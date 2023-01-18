import React from "react";

export const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2
    className={`font-montserrat text-pokeGray3 font-normal text-base inline-block`}
  >
    {children}
  </h2>
);
