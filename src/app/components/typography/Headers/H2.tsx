import { FC, HTMLAttributes } from "react";

export const H2: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h2
    className={`font-montserrat text-pokeGray3 font-normal text-base ${className}`}
    {...props}
  >
    {children}
  </h2>
);
