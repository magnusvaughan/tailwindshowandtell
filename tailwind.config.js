const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // brand: "#0fa9e6",
        // brand: {
        //   light: "#0fa9e6",
        // },
      },
      // fontFamily: {
      //   headline: "Tahoma",
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
