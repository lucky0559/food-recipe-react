import { Button } from "@/components/common";
import { Drumstick } from "lucide-react";
import { useDisclosure } from "@mantine/hooks";
import { gql, useMutation } from "@apollo/client";
import { Formik } from "formik";
import { toFormikValidate } from "zod-formik-adapter";
import { Menu } from "@/types";
import { validationMenuSchema } from "@/zodSchema";
import { FormAddMenu } from "@/components/AdminHomePage";

export const AdminHomePage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const CREATE_MENU = gql`
    mutation CreateMenu($input: CreateMenuInput!) {
      createMenu(input: $input) {
        name
        image
        description
        recipes
        procedures
        category
      }
    }
  `;

  const [createMenu] = useMutation(CREATE_MENU);

  const onCreateMenu = async (
    menu: Omit<Menu, "image"> & { image: File | string }
  ) => {
    // menu.image = "test image";
    console.log("CREATING MENU: ", menu);
    const res = await createMenu({
      variables: {
        input: menu
      }
    });
    console.log("RESULT: ", res);
  };

  return (
    <div className="p-10">
      <Formik
        initialValues={{
          name: "",
          image: "",
          description: "",
          recipes: [] as string[],
          procedures: [] as string[],
          category: [] as string[]
        }}
        validate={toFormikValidate(validationMenuSchema)}
        onSubmit={values => {
          // const isValid = isValidObject(values)
          onCreateMenu(values);
        }}
      >
        {({
          values,
          setFieldValue,
          submitForm,
          handleChange,
          setFieldError
        }) => (
          <FormAddMenu
            handleChange={handleChange}
            image={values.image}
            setFieldError={setFieldError}
            setFieldValue={setFieldValue}
            recipes={values.recipes}
            procedures={values.procedures}
            submitForm={submitForm}
            opened={opened}
            close={close}
          />
        )}
      </Formik>
      <Button text="Add Menu" Icon={Drumstick} onClick={open} />
    </div>
  );
};
