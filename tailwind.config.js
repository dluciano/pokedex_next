/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pokeCream: "#F2F1F1",
        pokeGray1: "#D8D8D8",
        pokeGray2: "#606C78",
        pokeGray3: "#1F2532",
        pokeBlue: "#4A90E2",
        pokePurple: "#BE93E7",
        pokeOrange: "#E85B0E",
        pokeGreen: "#A0DA5E"
      },
      fontSize:{
        "1_3": "1.2rem",
        "3_2": "3.2rem"
      }
    },
  },
  plugins: [],
}
