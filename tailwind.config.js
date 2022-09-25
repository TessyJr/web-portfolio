/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        eurostile: ["Eurostile", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#3944BC",
        customWhite: "#F9F9F9",
      },
    },
  },
  plugins: [],
};
