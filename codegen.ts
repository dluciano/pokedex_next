import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://beta.pokeapi.co/graphql/v1beta",
  documents: ["src/api/pokeapi/graphql/**/*.graphql"],
  generates: {
    "src/api/pokeapi/generated/": {
      preset: "client",
      plugins: ["typescript-graphql-request"],
    },
  },
  config: {
    autogenSWRKey: true,
    rawRequest: false,
  },
};

export default config;
