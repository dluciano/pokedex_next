const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pokeCream: "#F2F1F1",
        pokeGray1: "#D8D8D8",
        pokeGray2: "#606C78",
        pokeGray3: "#1F2532",
        pokeGray4: "B0B9C4",
        pokeBlue: "#4A90E2",
        pokePurple: "#BE93E7",
        pokeOrange: "#E85B0E",
        pokeGreen: "#A0DA5E",
      },
      fontSize: {
        "1_3": "1.2rem",
        "3_2": "3.2rem",
      },
      fontFamily: {
        // @see: https://beta.nextjs.org/docs/optimizing/fonts#local-fonts
        // @see: https://tailwindcss.com/docs/font-family#customizing-your-theme
        /*
            Note that Tailwind does not automatically escape font names for you. 
            If you’re using a font that contains an invalid identifier, 
            wrap it in quotes or escape the invalid characters.
        */
        montserrat: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
        din: ["var(--font-din)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
