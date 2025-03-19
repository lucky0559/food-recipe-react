import { Button as B } from "@mantine/core";
import { LucideIcon } from "lucide-react";

type ButtonProps = {
  text: string;
  className?: string;
  Icon?: LucideIcon;
  onClick?: () => void;
  isDisable?: boolean;
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  text,
  className,
  Icon,
  onClick,
  isDisable,
  type
}: ButtonProps) => {
  return (
    <B
      variant="filled"
      color="red"
      radius="xl"
      className={`${className}`}
      onClick={onClick}
      disabled={isDisable}
      type={type ?? "submit"}
    >
      {text}
      {Icon && <Icon size={18} className="ml-2" />}
    </B>
  );
};
