import { FC, HTMLAttributes } from "react";

export const H1: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h1
    className={`font-montserrat text-pokeGray3 font-bold text-base ${className}`}
    {...props}
  >
    {children}
  </h1>
);
