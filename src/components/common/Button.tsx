import { Button as B } from "@mantine/core";
import { LucideIcon } from "lucide-react";

type ButtonProps = {
  text: string;
  className?: string;
  Icon?: LucideIcon;
};

export const Button = ({ text, className, Icon }: ButtonProps) => {
  return (
    <B variant="filled" color="red" radius="xl" className={`${className}`}>
      {text}
      {Icon && <Icon size={18} className="ml-2" />}
    </B>
  );
};
