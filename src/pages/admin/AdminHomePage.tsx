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
    mutation CreateMenu(
      $name: String!
      $image: String!
      $description: String!
      $recipes: [String!]
      $procedures: [String!]
      $category: [String!]
    ) {
      createMenu(
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

  const [createMenu] = useMutation(CREATE_MENU);

  const onCreateMenu = (
    menu: Omit<Menu, "image"> & { image: File | string }
  ) => {
    // menu.image = "new image";
    console.log("CREATING MENU: ", menu);
    // createMenu({ variables: menu })
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
