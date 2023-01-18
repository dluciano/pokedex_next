import pokeApiService from "@/api/pokeapi/PokeApiService";
import { H1 } from "@components/typography";

export default async function Home() {
  return (
    <div className={`px-[60px]`}>
      <header>
        <H1 className={`pl-[6px] py-[54px]`}>POK&Eacute;DEX</H1>
      </header>
    </div>
  );
}
