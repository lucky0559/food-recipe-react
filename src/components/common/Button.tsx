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

const textSpanClassname = "text-xs md:text-lg lg:text-xl";
const iconClassname = "ml-2";

export const Button = ({
  text,
  className,
  Icon,
  onClick,
  isDisable,
  type
}: ButtonProps) => {
  return (
    <>
      <B
        variant="filled"
        color="red"
        radius="xl"
        className={`${className}`}
        onClick={onClick}
        disabled={isDisable}
        type={type ?? "submit"}
        hiddenFrom="lg"
      >
        <span className={textSpanClassname}>{text}</span>
        {Icon && <Icon className={iconClassname} />}
      </B>
      <B
        variant="filled"
        color="red"
        radius="xl"
        className={`${className}`}
        onClick={onClick}
        disabled={isDisable}
        type={type ?? "submit"}
        size="md"
        visibleFrom="lg"
        hiddenFrom="xl"
      >
        <span className={textSpanClassname}>{text}</span>
        {Icon && <Icon className={iconClassname} />}
      </B>
      <B
        variant="filled"
        color="red"
        radius="xl"
        className={`${className}`}
        onClick={onClick}
        disabled={isDisable}
        type={type ?? "submit"}
        size="lg"
        visibleFrom="xl"
      >
        <span className={textSpanClassname}>{text}</span>
        {Icon && <Icon className={iconClassname} />}
      </B>
    </>
  );
};
