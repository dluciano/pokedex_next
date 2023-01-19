import pokeApiService from "@/api/pokeapi/PokeApiService";
import { H1 } from "@components/typography";
import { PokemonCard } from "@components";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

const getPokemonPage = async () => {
  const pokemons = await pokeApiService.fetchNext(0, 12);
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
        {pokemons.map((pokemon) => (
          <PokemonCard {...pokemon} key={uuidv4()} />
        ))}
      </main>
      <footer className="text-center w-full">
        <Link
          href="/1"
          className="w-[216px] h-[44px] bg-pokeBlue font-montserrat font-bold rounded-md mb-[54px] inline-block p-2"
        >
          LOAD MORE
        </Link>
      </footer>
    </div>
  );
}
