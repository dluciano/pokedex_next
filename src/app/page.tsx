import pokeApiService from "@/api/pokeapi/PokeApiService";
import { PokemonGrid } from "@components";

const getPokemonPage = async (page: number) => {
  const pokemons = await pokeApiService.fetchNext(page, 12);
  return {
    data: {
      pokemons,
    },
  };
};

export default async function Pokemons() {
  const pageNumber = 0;
  const {
    data: { pokemons },
  } = await getPokemonPage(pageNumber);
  return <PokemonGrid page={pageNumber} pokemons={pokemons} />;
}
