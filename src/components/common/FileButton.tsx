import { FileButton as MFileButton, Group, Button, Text } from "@mantine/core";

type FileButtonProps = {
  file: File | null;
  name?: string;
  onChange: (f: File | null) => void;
  // hasError: boolean;
};

export const FileButton = ({
  file,
  name,
  onChange
}: // hasError
FileButtonProps) => {
  const onChangeTrigger = (f: File | null) => {
    // if (!hasError) {
    onChange(f);
    // } else onChange(null);
  };

  return (
    <>
      {file ? (
        <div className="flex items-center">
          <Text size="sm" ml={10}>
            {file.name}
          </Text>
          <Group justify="center" className="ml-4">
            <MFileButton
              onChange={f => onChangeTrigger(f)}
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
            onChange={f => onChangeTrigger(f)}
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
