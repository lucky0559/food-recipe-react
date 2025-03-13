import { Button as B } from "@mantine/core";

type ButtonProps = {
  text: string;
  className?: string;
};

export const Button = ({ text, className }: ButtonProps) => {
  return (
    <B variant="filled" color="red" radius="xl" className={`${className}`}>
      {text}
    </B>
  );
};
