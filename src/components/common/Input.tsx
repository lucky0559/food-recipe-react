import { Input as I } from "@mantine/core";
import { LucideIcon } from "lucide-react";

type InputProps = {
  placeholder?: string;
  Icon?: LucideIcon;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export const Input = ({ placeholder, Icon, size }: InputProps) => {
  return (
    <I
      placeholder={placeholder}
      leftSection={Icon && <Icon size={20} />}
      size={size ? size : "sm"}
    />
  );
};
