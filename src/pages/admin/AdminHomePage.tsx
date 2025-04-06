import { Button } from "@/components/common";
import { CheckIcon, Drumstick } from "lucide-react";
import { useDisclosure } from "@mantine/hooks";
import { ApolloError, useMutation } from "@apollo/client";
import { Formik } from "formik";
import { toFormikValidate } from "zod-formik-adapter";
import { Menu } from "@/types";
import { validationMenuSchema } from "@/zodSchema";
import { FormAddMenu } from "@/components/AdminHomePage";
import { CREATE_MENU } from "@/graphql/mutations/menu.mutation";
import { useState } from "react";
import { notifications } from "@mantine/notifications";

export const AdminHomePage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [createMenu, { loading }] = useMutation(CREATE_MENU);

  const [error, setError] = useState("");

  //TODO: NOTIF FOR SUCCESS NEW MENU

  const onCreateMenu = async (
    menu: Omit<Menu, "imageUrl"> & { imageUrl: File | string }
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

  // TODO: INTEGRATE RICH TEXT EDITOR FOR RECIPES AND PROCEDURES

  return (
    <div className="p-10">
      <Formik
        initialValues={{
          name: "",
          imageUrl: "",
          description: "",
          recipes: [] as string[],
          procedures: [] as string[],
          categories: [] as string[]
        }}
        validate={toFormikValidate(validationMenuSchema)}
        onSubmit={async (values, { resetForm }) => {
          setError("");
          const res = await onCreateMenu(values);
          console.log(res);
          if (res instanceof ApolloError) {
            return setError(res.message);
          }
          resetForm();
          close();
          notifications.show({
            title: "Success!",
            message: "Adding Completed!",
            style: {
              position: "absolute",
              bottom: 30,
              left: 25,
              right: 25,
              width: "90%"
            },
            color: "green",
            icon: <CheckIcon />
          });
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
            imageUrl={values.imageUrl}
            setFieldError={setFieldError}
            setFieldValue={setFieldValue}
            recipes={values.recipes}
            procedures={values.procedures}
            submitForm={submitForm}
            opened={opened}
            close={close}
            isSubmitting={loading}
            error={error}
          />
        )}
      </Formik>
      <Button text="Add Menu" Icon={Drumstick} onClick={open} />
    </div>
  );
};
