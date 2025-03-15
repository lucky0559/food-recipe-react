import { FileButton as MFileButton, Group, Button, Text } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";

type FileButtonProps = {
  setFile: Dispatch<SetStateAction<File | null>>;
  file: File | null;
};

export const FileButton = ({ setFile, file }: FileButtonProps) => {
  return (
    <>
      {file ? (
        <div className="flex items-center">
          <Text size="sm" ml={10}>
            {file.name}
          </Text>
          <Group justify="center" className="ml-4">
            <MFileButton onChange={setFile} accept="image/png,image/jpeg">
              {props => (
                <Button size="compact-xs" color="red" {...props}>
                  Replace
                </Button>
              )}
            </MFileButton>
          </Group>
        </div>
      ) : (
        <Group justify="center" className="ml-4">
          <MFileButton onChange={setFile} accept="image/png,image/jpeg">
            {props => (
              <Button color="red" {...props}>
                Upload image
              </Button>
            )}
          </MFileButton>
        </Group>
      )}
    </>
  );
};
