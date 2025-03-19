import { FileButton as MFileButton, Group, Button, Text } from "@mantine/core";

type FileButtonProps = {
  file: File | string;
  name?: string;
  onChange: (f: File | null) => void;
};

export const FileButton = ({ file, name, onChange }: FileButtonProps) => {
  return (
    <>
      {file ? (
        <div className="flex items-center">
          <Text size="sm" ml={10}>
            {file instanceof File ? file.name : ""}
          </Text>
          <Group justify="center" className="ml-4">
            <MFileButton
              onChange={onChange}
              accept="image/png,image/jpeg"
              name={name}
            >
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
          <MFileButton
            onChange={onChange}
            accept="image/png,image/jpeg"
            name={name}
          >
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
