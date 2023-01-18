import {FC, HTMLAttributes} from "react";

import { cva, type VariantProps } from "class-variance-authority";

const text = cva(["font-montserrat", "text-pokeGray3"], {
  variants: {
    size: {
      regular: ["font-normal"],
      thin: ["font-extralight"],
      light: ["font-light"],
    },
  },
  defaultVariants: {
    size: "regular",
  },
});

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof text> {}

export const Text: FC<TextProps> = ({
  className,
  children,
  size,
  ...props
}) => (
  <p className={text({ size, className })} {...props}>
    {children}
  </p>
);