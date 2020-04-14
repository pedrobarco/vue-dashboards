module.exports = {
  theme: {
    fontFamily: {
      sans: ["Fira Sans"]
    },
    extend: {
      colors: {
        primary: {
          100: "#F0EFFF",
          200: "#DAD8FF",
          300: "#C4C1FF",
          400: "#9892FF",
          500: "#6C63FF",
          600: "#6159E6",
          700: "#413B99",
          800: "#312D73",
          900: "#201E4D"
        },
        secondary: {
          100: "#FFF0EF",
          200: "#FFDAD8",
          300: "#FFC3C1",
          400: "#FF9692",
          500: "#FF6963",
          600: "#E65F59",
          700: "#993F3B",
          800: "#732F2D",
          900: "#4D201E"
        }
      }
    }
  },
  variants: {
    textColor: ["group-hover"],
    opacity: ["group-hover"]
  },
  plugins: []
};
