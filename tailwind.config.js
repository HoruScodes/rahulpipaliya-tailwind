module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        sViolate: "#6772E5",
        sBlue: "#408AF8",
        sGreen: "#3ECF8E",
        sGray: "#6B7393",
        sWhite: "#F6F9FC",
        sHover: "#7795f8",
        linkedinColor: "#0E76A8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
