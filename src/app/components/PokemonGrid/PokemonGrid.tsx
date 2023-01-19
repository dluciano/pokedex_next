import { type PokemonListDetail } from "@/api/pokeapi/PokeApiService";
import { PokemonCard } from "@components";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

export function PokemonGrid({ pokemons, page }: { pokemons: PokemonListDetail[], page: number }) {
  const nextPage = `\\${page + 1}`;
  return (
    <div className="p-8">
      <main className="grid grid-cols-4 gap-4 mb-4">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} className="" key={uuidv4()} />
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
