import { Button, FileButton } from "@/components/common";
import { Drumstick } from "lucide-react";
import { useDisclosure } from "@mantine/hooks";
import { Fieldset, Modal, TextInput } from "@mantine/core";
import { useCallback, useState } from "react";

export const AdminHomePage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [file, setFile] = useState<File | null>(null);

  const onModalClose = useCallback(() => {
    close();
    setFile(null);
  }, [close]);

  return (
    <div className="p-10">
      <Modal
        opened={opened}
        onClose={onModalClose}
        title="Add Menu"
        className="font-ubuntu"
      >
        <Fieldset legend="Menu information">
          <TextInput label="Name" placeholder="Name" />
          <div className="flex items-center mt-4">
            <span>Image: </span>
            <FileButton file={file} setFile={setFile} />
          </div>
          <TextInput label="Description" placeholder="Description" mt="md" />
          <div>
            <TextInput
              label="Recipes"
              placeholder="Recipes"
              mt="md"
              className="mb-2"
            />
            <span className="underline">Add Recipe</span>
          </div>
          <TextInput label="Procedures" placeholder="Procedures" mt="md" />
          <TextInput label="Category" placeholder="Category" mt="md" />
        </Fieldset>
      </Modal>
      <Button text="Add Menu" Icon={Drumstick} onClick={open} />
    </div>
  );
};

// name
//       image
//       description
//       recipes
//       procedures
//       category
