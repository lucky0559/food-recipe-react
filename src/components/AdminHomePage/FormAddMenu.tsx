import { ProceduresSetter } from "@/components/AdminHomePage/ProceduresSetter";
import { RecipeSetter } from "@/components/AdminHomePage/RecipeSetter";
import { Button, FileButton } from "@/components/common";
import { category } from "@/lib";
import { validationMenuSchema } from "@/zodSchema";
import { Fieldset, Modal, TagsInput, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ErrorMessage, Form, FormikErrors } from "formik";
import { Plus } from "lucide-react";
import { useState } from "react";
import { ZodError } from "zod";

type FormAddMenuProps = {
  handleChange: {
    (e: React.ChangeEvent<unknown>): void;
    <T = string | React.ChangeEvent<unknown>>(
      field: T
    ): T extends React.ChangeEvent<unknown>
      ? void
      : (e: string | React.ChangeEvent<unknown>) => void;
  };
  image: File | null;
  setFieldError: (field: string, message: string | undefined) => void;
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<{
    name: string;
    image: null;
    description: string;
    recipes: string[];
    procedures: string[];
    category: string[];
  }>>;
  recipes: string[];
  procedures: string[];
  submitForm: () => void;
  opened: boolean;
  close: () => void;
};

export const FormAddMenu = ({
  handleChange,
  image,
  setFieldError,
  setFieldValue,
  recipes,
  procedures,
  submitForm,
  opened,
  close
}: FormAddMenuProps) => {
  const [openedRecipe, { open: openRecipe, close: closeRecipes }] =
    useDisclosure(false);
  const [openedProcedures, { open: openProcedures, close: closeProcedures }] =
    useDisclosure(false);
  const [errorImage, setErrorImage] = useState("");

  return (
    <Form>
      <Modal
        opened={opened}
        onClose={close}
        title="Add Menu"
        className="font-ubuntu"
      >
        <Fieldset legend="Menu information">
          <TextInput
            label="Name"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
          <ErrorMessage
            name="name"
            component={"span"}
            className="text-red-500 text-xs"
          />
          <div className="flex flex-col">
            <div className="flex items-center mt-4">
              <span>Image: </span>
              <FileButton
                file={image}
                name="image"
                onChange={async f => {
                  if (f) {
                    try {
                      await validationMenuSchema.shape.image.parseAsync(f);
                      setFieldError("image", undefined);
                      setErrorImage("");
                      setFieldValue("image", f);
                    } catch (e) {
                      if (e instanceof ZodError) {
                        setErrorImage(e.errors[0].message);
                        setFieldValue("image", null);
                        setFieldError("image", e.errors[0].message);
                      }
                    }
                  }
                }}
              />
            </div>
            {errorImage && (
              <div className="mt-1">
                <span className="text-red-500 text-xs">{errorImage}</span>
              </div>
            )}
          </div>
          <TextInput
            label="Description"
            placeholder="Description"
            mt="md"
            name="description"
            onChange={handleChange}
          />
          <ErrorMessage
            name="description"
            component={"span"}
            className="text-red-500 text-xs"
          />
          <div className="flex flex-col">
            <div className="mt-4 flex items-center">
              <RecipeSetter
                recipes={recipes}
                opened={openedRecipe}
                onRemove={val => {
                  setFieldValue(
                    "recipes",
                    recipes.filter(i => i !== val)
                  );
                }}
                onModalClose={closeRecipes}
                addRecipe={(v: string) => {
                  if (recipes.includes(v.toUpperCase())) {
                    return;
                  }
                  setFieldValue("recipes", [...recipes, v.toUpperCase()]);
                }}
              />
              <div className="mr-3">
                <span>Recipes: </span>
              </div>
              <span className="underline text-sm" onClick={openRecipe}>
                Edit Recipe
              </span>
            </div>
            <ErrorMessage
              name="recipes"
              component={"span"}
              className="text-red-500 text-xs"
            />
          </div>
          <div className="flex flex-col">
            <div className="mt-4 flex items-center">
              <ProceduresSetter
                procedures={procedures}
                opened={openedProcedures}
                onRemove={v => {
                  setFieldValue(
                    "procedures",
                    procedures.filter(i => i !== v)
                  );
                }}
                onModalClose={closeProcedures}
                addProcedure={(v: string) => {
                  if (procedures.includes(v.toUpperCase())) {
                    return;
                  }
                  setFieldValue("procedures", [...procedures, v.toUpperCase()]);
                }}
              />
              <div className="mr-3">
                <span>Procedures: </span>
              </div>
              <span className="underline text-sm" onClick={openProcedures}>
                Edit Procedures
              </span>
            </div>
            <ErrorMessage
              name="procedures"
              component={"span"}
              className="text-red-500 text-xs"
            />
          </div>
          <TagsInput
            data={category}
            label="Category(Press Enter to submit a tag)"
            placeholder="Enter tag"
            className="mt-4"
            onChange={e => setFieldValue("category", e)}
            name="category"
          />
          <ErrorMessage
            name="category"
            component={"span"}
            className="text-red-500 text-xs"
          />
        </Fieldset>
        <div className="mt-5 flex justify-end">
          <Button text="Add" Icon={Plus} type="submit" onClick={submitForm} />
        </div>
      </Modal>
    </Form>
  );
};
