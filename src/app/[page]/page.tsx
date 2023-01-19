import pokeApiService from "@/api/pokeapi/PokeApiService";
import { H1 } from "@components/typography";
import { PokemonCard } from "@components";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

const getPokemonPage = async (page: number) => {
  const pokemons = await pokeApiService.fetchNext(page, 12);
  return {
    data: {
      pokemons,
    },
  };
};

export default async function Pokemons({
  params,
}: {
  params: { page: string };
}) {
  const page = parseInt(params.page);
  const nextPage = `\\${page + 1}`;
  const {
    data: { pokemons },
  } = await getPokemonPage(page);
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
        {pokemons.length === 12 && (
          <Link
            href={nextPage}
            className="w-[216px] h-[44px] bg-pokeBlue font-montserrat font-bold rounded-md mb-[54px] inline-block p-2"
          >
            LOAD MORE
          </Link>
        )}
      </footer>
    </div>
  );
}
