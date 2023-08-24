/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}", "./public/*.{html,js}"],
  theme: {
    fontFamily: {
      Montserrat: ['"Montserrat"', "sans-serif"],
    },
    colors: {
      ...colors,
      primary: "#CC2D4A",
      secondary: "#8FA206",
      terciary: "#61AEC9",
    },
    extend: {
      backgroundImage: {
        sanFrancisco: "url('../img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../img/sanFranciscoDesktop.jpg')",
        yosemite: "url('../img/yosemite.jpg')",
        LA: "url('../img/LA.jpg')",
        seattle: "url('../img/seattle.jpg')",
        new_york: "url('../img/new_york.jpg')",
        sydney: "url('../img/sydney.jpg')",
        miami: "url('../img/miami.jpg')",
        switzerland: "url('../img/switzerland.jpg')",
        bali: "url('../img/bali.jpg')",
        chicago: "url('../img/chicago.jpg')",
        europe: "url('../img/europe.jpg')",
        iceland: "url('../img/iceland.jpg')",
        norway: "url('../src/img/norway.jpg')",
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [],
};
