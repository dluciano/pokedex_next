import { v4 as uuidv4 } from "uuid";
import { H1, H4, Text } from "../typography";
import Image from "next/image";
import { numberToThreeDigitsLeadingZeros } from "@lib";
import styles from "./PokemonCard.module.css";

type PokemonCardProps = {
  name: string;
  id: number;
  types: string[];
  image: string | undefined;
};

const PokeType = ({ type }: { type: string }) => {
  // be careful if you want to move this method from here.
  // I experienced problems while using it in a separate file
  const pokemonTypeToBgClass = (type: string) => {
    const colourClassByType: any = {
      grass: "bg-pokeGreen",
      poison: "bg-pokePurple",
      fire: "bg-pokeOrange",
      water: "bg-pokeBlue",
      flying: "bg-pokeGray4",
      default: "bg-pokeGray4",
    };
    const cleanType = type.toLocaleLowerCase();
    if (!(cleanType in colourClassByType)) return colourClassByType.default;
    return colourClassByType[cleanType];
  };
  return (
    <H4
      className={`uppercase w-1/2 h-[22px] inline-block text-center align-center rounded-md ${pokemonTypeToBgClass(
        type
      )} ${styles.pokeType} `}
    >
      {type}
    </H4>
  );
};

export const PokemonCard = ({ name, id, types, image }: PokemonCardProps) => {
  console.log(image);
  return (
    <article className="mr-[13px] w-[216px] h-[238px] mb-[60px] bg-pokeCream relative rounded-md inline-block">
      <header className="pt-[6px] pl-[6px]">
        <Text className="inline-block mr-1">
          &#35;{numberToThreeDigitsLeadingZeros(id)}
        </Text>
        <H1 className="capitalize inline-block">{name}</H1>
      </header>
      <main className="h-[183px] flex items-center justify-center">
        {image && (
          <Image src={image} alt={`${name} photo`} width={190} height={171} />
        )}
      </main>
      <footer className="absolute bottom-0 w-full">
        {types.map((type) => (
          <PokeType key={uuidv4()} type={type} />
        ))}
      </footer>
    </article>
  );
};
