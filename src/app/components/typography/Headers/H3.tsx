import { FC, HTMLAttributes } from "react";

export const H3: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h3
    className={`font-din text-pokeGray3 text-3_2 ${className}`}
    {...props}
  >
    {children}
  </h3>
);
