import React from "react";

export const H1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className={`font-montserrat text-pokeGray3 font-bold text-base`}>
    {children}
  </h1>
);
