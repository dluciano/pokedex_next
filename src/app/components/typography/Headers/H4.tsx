import { FC, HTMLAttributes } from "react";

export const H4: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h4
    className={`font-din text-pokeGray3 text-base text-1_3 ${className}`}
    {...props}
  >
    {children}
  </h4>
);
