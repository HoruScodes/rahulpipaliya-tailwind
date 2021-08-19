module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sViolate: "#6772E5",
        sBlue: "#408AF8",
        sGreen: "#3ECF8E",
        sGray: "#6B7393",
        sWhite: "#F6F9FC",
        sHover: "#7795f8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
