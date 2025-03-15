import { Chip as C } from "@mantine/core";

type ChipProps = {
  text: string;
  checked: boolean;
  onChange: (v: string) => void;
};

export const Chip = ({ text, checked, onChange }: ChipProps) => {
  return (
    <C checked={checked} onChange={() => onChange(text)}>
      {text}
    </C>
  );
};
