import { v4 as uuidv4 } from "uuid";
import { H1, H4, Text } from "../typography";
import Image from "next/image";
import { numberToThreeDigitsLeadingZeros } from "@lib";
import styles from "./PokemonCard.module.css";
import { HTMLAttributes } from "react";

type PokemonCardProps = {
  pokemon: {
    name: string;
    id: number;
    types: string[];
    image: string | null | undefined;
  };
} & HTMLAttributes<HTMLElement>;

const PokeType = ({
  type,
  hasTwoPokeTypes,
}: {
  type: string;
  hasTwoPokeTypes?: boolean;
}) => {
  // be careful if you want to move this method from here.
  // I experienced problems while using it in a separate file
  const pokemonTypeToBgClass = (type: string) => {
    const colourClassByType: any = {
      grass: "bg-pokeGreen",
      bug: "bg-pokeGreen",
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
      )} ${styles.pokeType} ${hasTwoPokeTypes && styles.hasTwoPokeTypes} `}
    >
      {type}
    </H4>
  );
};

export const PokemonCard = ({
  pokemon: { name, id, types, image },
  className,
  ...props
}: PokemonCardProps) => {
  return (
    <article
      className={`w-[216px] h-[238px] bg-pokeCream relative rounded-md shadow-md ${
        className || ""
      }`}
      {...props}
      onClick={() => {
        window.gtag("event", "select_item", {
          event_label: "view pokemon",
          event_category: "navigate to item",
          description: `view pokemon ${name}`,
          value: id,
          items: name,
        });
      }}
    >
      <header className="pt-[6px] pl-[6px] w-full">
        <Text className="inline-block mr-1 align-top">
          &#35;{numberToThreeDigitsLeadingZeros(id)}
        </Text>
        <H1 className="capitalize inline-block text-ellipsis overflow-hidden whitespace-nowrap w-[140px] align-top">
          {name}
        </H1>
      </header>
      <main className="h-[186px] w-full flex items-center justify-center relative p-2">
        {image && (
          <Image src={image} alt={`${name} photo`} sizes="216px" width={216} height={186} className="w-full h-full" />
        )}
      </main>
      <footer className="w-full">
        {types.map((type) => (
          <PokeType
            key={uuidv4()}
            type={type}
            hasTwoPokeTypes={types.length > 1}
          />
        ))}
      </footer>
    </article>
  );
};
