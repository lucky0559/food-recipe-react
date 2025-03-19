import { Button, FileButton } from "@/components/common";
import { Drumstick, Plus } from "lucide-react";
import { useDisclosure } from "@mantine/hooks";
import { Fieldset, Modal, TagsInput, TextInput } from "@mantine/core";
import { useCallback, useState } from "react";
import { ProceduresSetter, RecipeSetter } from "@/components/AdminHomePage";
import { category as categoryLists, isValidObject } from "@/lib";
import { gql, useMutation } from "@apollo/client";
import * as z from "zod";
import { ErrorMessage, Form, Formik } from "formik";
import { toFormikValidate } from "zod-formik-adapter";
import { Menu } from "@/types";

export const AdminHomePage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedRecipe, { open: openRecipe, close: closeRecipes }] =
    useDisclosure(false);
  const [openedProcedures, { open: openProcedures, close: closeProcedures }] =
    useDisclosure(false);
  const [file, setFile] = useState<File | null>(null);
  const [recipes, setRecipes] = useState<string[]>([]);
  const [recipe, setRecipe] = useState("");
  const [procedures, setProcedures] = useState<string[]>([]);
  const [procedure, setProcedure] = useState("");
  const [error, setError] = useState("");
  const [category, setCategory] = useState<string[]>([]);

  const onModalClose = useCallback(() => {
    close();
    setFile(null);
  }, [close]);

  const addRecipe = useCallback(() => {
    if (recipes.includes(recipe.toUpperCase())) {
      return setError("This recipe exists!");
    }
    setRecipes([...recipes, recipe.toUpperCase()]);
    setRecipe("");
    setError("");
  }, [recipe, recipes]);

  const addProcedure = useCallback(() => {
    if (procedures.includes(procedure.toUpperCase())) {
      return setError("This recipe exists!");
    }
    setProcedures([...procedures, procedure.toUpperCase()]);
    setProcedure("");
    setError("");
  }, [procedure, procedures]);

  const onModalCloseRecipe = useCallback(() => {
    closeRecipes();
    setRecipe("");
  }, [closeRecipes]);

  const onModalCloseProcedure = useCallback(() => {
    closeProcedures();
    setRecipe("");
  }, [closeProcedures]);

  const onRemoveRecipe = useCallback((val: string) => {
    setRecipes(prevItems => prevItems.filter(i => i !== val));
  }, []);

  const onRemoveProcedure = useCallback((val: string) => {
    setProcedures(prevItems => prevItems.filter(i => i !== val));
  }, []);

  const CREATE_MENU = gql`
    mutation CreateMenu(
      $name: String!
      $image: String!
      $description: String!
      $recipes: [String!]
      $procedures: [String!]
      $category: [String!]
    ) {
      createUser(
        name: $name
        image: $image
        description: $description
        recipes: $recipes
        procedures: $procedures
        category: $category
      ) {
        name
        image
        description
        recipes
        procedures
        category
      }
    }
  `;

  // const [createMenu] = useMutation(CREATE_MENU, );

  const onCreateMenu = (menu: Omit<Menu, "image"> & { image: File }) => {
    console.log("CREATING MENU: ", menu);
  };

  const MAX_FILE_SIZE = 1 * 1024 * 1024;
  const DIMENSIONS = { width: 580, height: 580 };
  const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp"
  ];

  const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const validationMenuSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    image: z
      .instanceof(File, {
        message: "Please select an image file."
      })
      .refine(file => file.size <= MAX_FILE_SIZE, {
        message: `The image is too large. Please choose an image smaller than ${formatBytes(
          MAX_FILE_SIZE
        )}.`
      })
      .refine(file => ACCEPTED_IMAGE_TYPES.includes(file.type), {
        message: "Please upload a valid image file (JPEG, PNG, or WebP)."
      })
      .refine(
        file =>
          new Promise(resolve => {
            const reader = new FileReader();
            reader.onload = e => {
              const img = new Image();
              img.onload = () => {
                const meetsDimensions =
                  img.width === DIMENSIONS.width &&
                  img.height === DIMENSIONS.height;
                resolve(meetsDimensions);
              };
              img.src = e.target?.result as string;
            };
            reader.readAsDataURL(file);
          }),
        {
          message: `The image dimensions are invalid. Please upload an image ${DIMENSIONS.width}x${DIMENSIONS.height} pixels.`
        }
      )
      .nullable(),
    description: z.string().nonempty("Please enter description"),
    recipes: z.array(z.string()).min(1, "Must have at least one recipe"),
    procedures: z
      .string({ required_error: "Please enter procedure/s" })
      .array(),
    category: z.string({ required_error: "Please enter category/s" }).array()
  });

  return (
    <div className="p-10">
      <Formik
        initialValues={{
          name: "",
          image: null,
          description: "",
          recipes: [] as string[],
          procedures: [] as string[],
          category: [] as string[]
        }}
        validate={toFormikValidate(validationMenuSchema)}
        onSubmit={values => {
          // const isValid = isValidObject(values)
          // if (values.image !== null) {
          //   onCreateMenu(values);
          // }
          console.log("FORM SUBMITTED: ", values);
        }}
      >
        {({
          values,
          setFieldValue,
          submitForm,
          handleChange,
          setFieldError,
          validateField
        }) => (
          <Form>
            <Modal
              opened={opened}
              onClose={onModalClose}
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
                <div className="flex items-center mt-4">
                  <span>Image: </span>
                  <FileButton
                    file={values.image}
                    name="image"
                    onChange={async f => {
                      try {
                        await validationMenuSchema.shape.image.parseAsync(f);

                        setFieldError("image", undefined);
                      } catch (e) {
                        if (e instanceof z.ZodError) {
                          setFieldValue("image", null);
                          setFieldError("image", e.errors[0].message);
                          console.log("image", e.errors[0].message);
                          validateField("image");
                          return;
                        }
                      }
                      setFieldValue("image", f);
                    }}
                    // hasError={!errors.image}
                  />
                  <ErrorMessage
                    name="image"
                    component={"span"}
                    className="text-red-500 text-xs"
                  />
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
                <div className="mt-4 flex items-center">
                  <RecipeSetter
                    recipes={values.recipes}
                    opened={openedRecipe}
                    onRemove={val => {
                      setFieldValue(
                        "recipes",
                        values.recipes.filter(i => i !== val)
                      );
                    }}
                    onModalClose={onModalCloseRecipe}
                    addRecipe={(v: string) => {
                      if (values.recipes.includes(v.toUpperCase())) {
                        return;
                      }
                      setFieldValue("recipes", [
                        ...values.recipes,
                        v.toUpperCase()
                      ]);
                    }}
                  />
                  <div className="mr-3">
                    <span>Recipes: </span>
                  </div>
                  <span className="underline text-sm" onClick={openRecipe}>
                    Edit Recipe
                  </span>
                  <ErrorMessage
                    name="recipes"
                    component={"span"}
                    className="text-red-500 text-xs"
                  />
                </div>
                <div className="mt-4 flex items-center">
                  <ProceduresSetter
                    procedures={values.procedures}
                    opened={openedProcedures}
                    onRemove={onRemoveProcedure}
                    onModalClose={onModalCloseProcedure}
                    addProcedure={(v: string) => {
                      if (values.procedures.includes(v.toUpperCase())) {
                        return;
                      }
                      setFieldValue("procedures", [
                        ...values.procedures,
                        v.toUpperCase()
                      ]);
                    }}
                  />
                  <div className="mr-3">
                    <span>Procedures: </span>
                  </div>
                  <span className="underline text-sm" onClick={openProcedures}>
                    Edit Procedures
                  </span>
                </div>
                <TagsInput
                  data={categoryLists}
                  label="Category(Press Enter to submit a tag)"
                  placeholder="Enter tag"
                  className="mt-4"
                  onChange={e => setFieldValue("category", e)}
                  name="category"
                />
              </Fieldset>
              <div className="mt-5 flex justify-end">
                <Button
                  text="Add"
                  Icon={Plus}
                  // isDisable={!isValidObject(values)}
                  type="submit"
                  onClick={submitForm}
                />
              </div>
            </Modal>
          </Form>
        )}
      </Formik>
      <Button text="Add Menu" Icon={Drumstick} onClick={open} />
    </div>
  );
};
