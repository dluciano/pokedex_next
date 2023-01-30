import "server-only";
import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated/graphql";
import { PokemonClient } from "pokenode-ts";

export type PokemonListDetail = {
  name: string;
  id: number;
  types: string[];
  image: string | null | undefined;
};

class PokeApiService {
  private readonly sdk: ReturnType<typeof getSdk>;
  private readonly tsapi: PokemonClient;

  constructor() {
    this.sdk = getSdk(new GraphQLClient(process.env.POKEAPI_GRAPHQL_URL));
    this.tsapi = new PokemonClient();
  }

  fetchNext: (page: number, limit: number) => Promise<PokemonListDetail[]> =
    async (page = 0, limit = 12) => await this.fetchNextTsApi(page, limit);

  // https://github.com/Gabb-c/pokenode-ts
  private fetchNextTsApi: (
    page: number,
    limit: number
  ) => Promise<PokemonListDetail[]> = async (page = 0, limit = 12) => {
    const res = await this.tsapi.listPokemons(page * limit, limit);
    const pokemonNames = res.results.map((p) => p.name);
    const pokemons = await Promise.all(
      pokemonNames.map((name) => this.tsapi.getPokemonByName(name))
    );
    const models = pokemons.map((pokemon) => {
      const details: PokemonListDetail = {
        name: pokemon.name,
        id: pokemon.id,
        image: pokemon.sprites.other?.["official-artwork"]?.front_default,
        types: pokemon.types.map((type) => type.type.name),
      };
      return details;
    });
    return models;
  };

  // https://beta.pokeapi.co/graphql/console/
  private fetchNextGraphQl: (
    page: number,
    limit: number
  ) => Promise<PokemonListDetail[]> = async (page = 0, limit = 12) => {
    const response = await this.sdk.getListOfPokemonsByPage({
      offset: page * limit,
      limit: limit,
    });

    const pokemons: PokemonListDetail[] = response.pokemon_v2_pokemon.map(
      (pokemon) => {
        let image: string | undefined = "";
        if (pokemon.pokemon_v2_pokemonsprites.length > 0) {
          const spriteObj = JSON.parse(
            pokemon.pokemon_v2_pokemonsprites[0].sprites
          );
          if (
            "other" in spriteObj &&
            "official-artwork" in spriteObj.other &&
            "front_default" in spriteObj.other["official-artwork"]
          )
            image = spriteObj.other["official-artwork"].front_default;
        }

        return {
          name: pokemon.name,
          id: pokemon.id,
          image,
          types: pokemon.pokemon_v2_pokemontypes
            .filter((type) => type.pokemon_v2_type && type.pokemon_v2_type.name)
            .map((type) => {
              if (!type.pokemon_v2_type || !type.pokemon_v2_type.name)
                throw new Error("pokemon_v2_type or type.name is null");
              return type.pokemon_v2_type.name.toLocaleLowerCase();
            }),
        };
      }
    );
    return pokemons;
  };
}

const pokeApiService = new PokeApiService();

export default pokeApiService;
