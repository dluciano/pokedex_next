import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated/graphql";

class PokeApiService {
  private readonly sdk: ReturnType<typeof getSdk>;
  constructor() {
    this.sdk = getSdk(new GraphQLClient(process.env.POKEAPI_GRAPHQL_URL));
  }
  fetchNext = async () => {
    return await this.sdk.getListOfPokemonsByPage({offset: 0, limit: 12});
  };
}

const pokeApiService = new PokeApiService();

export default pokeApiService;