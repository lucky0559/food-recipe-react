import { Button as B } from "@mantine/core";
import { LucideIcon } from "lucide-react";

type ButtonProps = {
  text: string;
  className?: string;
  Icon?: LucideIcon;
  onClick?: () => void;
  isDisable?: boolean;
};

export const Button = ({
  text,
  className,
  Icon,
  onClick,
  isDisable
}: ButtonProps) => {
  return (
    <B
      variant="filled"
      color="red"
      radius="xl"
      className={`${className}`}
      onClick={onClick}
      disabled={isDisable}
    >
      {text}
      {Icon && <Icon size={18} className="ml-2" />}
    </B>
  );
};
