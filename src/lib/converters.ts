const colourClassByType: any = {
  grass: "bg-pokeGreen",
  poison: "bg-pokePurple",
  fire: "bg-pokeOrange",
  water: "bg-pokeBlue",
  flying: "bg-pokeGray4",
  default: "bg-pokeGray4",
};

export const pokemonTypeToBgClass = (type: string) => {
  const cleanType = type.toLocaleLowerCase();
  if (!(cleanType in colourClassByType)) return colourClassByType.default;
  return colourClassByType[cleanType];
};

export const numberToThreeDigitsLeadingZeros = (id: number) => {
  if (id < 10) return `00${id}`;
  if (id < 100) return `0${id}`;
  return id.toString();
};
