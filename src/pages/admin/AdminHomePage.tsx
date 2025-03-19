import { Button } from "@/components/common";
import { Drumstick } from "lucide-react";
import { useDisclosure } from "@mantine/hooks";
import { gql, useMutation } from "@apollo/client";
import { Formik } from "formik";
import { toFormikValidate } from "zod-formik-adapter";
import { Menu } from "@/types";
import { FormAddMenu } from "@/components/AdminHomePage/FormAddMenu";
import { validationMenuSchema } from "@/zodSchema";

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
