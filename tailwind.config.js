/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {},
    fontFamily:{
      Roboto: ["'Open Sans', sans-serif;"],
      OpenSans: ["'Roboto', sans-serif;"],
    },
    backgroundColor:{
      loos: "#0A61F7",
      transparent: "transparent"
    },
    fontSize:{
      gh: '57px'
    },
  },
  plugins: [],
}
