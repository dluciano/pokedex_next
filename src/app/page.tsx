import pokeApiService from "@/api/pokeapi/PokeApiService";
import { H1 } from "@components/typography";
import { PokemonCard } from "@components";
import { v4 as uuidv4 } from "uuid";

const getPokemonPage = async () => {
  const pokemons = await pokeApiService.fetchNext();
  return {
    data: {
      pokemons,
    },
  };
};

export default async function Home() {
  const {
    data: { pokemons },
  } = await getPokemonPage();
  return (
    <div className={`pl-[60px]`}>
      <header>
        <H1 className={`pl-[6px] py-[54px]`}>POK&Eacute;DEX</H1>
      </header>
      <main>
        {pokemons.map(pokemon=>(<PokemonCard {...pokemon} key={uuidv4()} />))}
      </main>
    </div>
  );
}
