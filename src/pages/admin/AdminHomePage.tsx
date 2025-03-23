import { Button } from "@/components/common";
import { CheckIcon, Drumstick } from "lucide-react";
import { useDisclosure } from "@mantine/hooks";
import { useMutation } from "@apollo/client";
import { Formik } from "formik";
import { toFormikValidate } from "zod-formik-adapter";
import { Menu } from "@/types";
import { validationMenuSchema } from "@/zodSchema";
import { FormAddMenu } from "@/components/AdminHomePage";
import { CREATE_MENU } from "@/graphql/mutations/menu.mutation";
import { Notification } from "@mantine/core";

export const AdminHomePage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [createMenu, { loading }] = useMutation(CREATE_MENU);

  const onCreateMenu = async (
    menu: Omit<Menu, "image"> & { image: File | string }
  ) => {
    try {
      const res = await createMenu({
        variables: {
          input: menu
        }
      });
      console.log("RESULT: ", res);
    } catch (e) {
      return e;
    }
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
        onSubmit={async (values, { resetForm }) => {
          await onCreateMenu(values);
          resetForm();
          close();
          //TODO: ERROR HANDLING
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
            isSubmitting={loading}
          />
        )}
      </Formik>
      <Button text="Add Menu" Icon={Drumstick} onClick={open} />
      {/* {false && (
        <Notification
          icon={<CheckIcon />}
          color="teal"
          title="Success!"
          mt="md"
        >
          Adding complete!
        </Notification>
      )} */}
    </div>
  );
};
