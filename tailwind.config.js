const defaultTheme = require("tailwindcss/defaultTheme");

const gray = defaultTheme.colors.gray;

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        xs: `${2 * 0.25}em`,
        sm: `${3 * 0.25}em`,
        base: `${4 * 0.25}em`,
        md: `${5 * 0.25}em`,
        lg: `${7 * 0.25}em`,
        xl: `${9 * 0.25}em`,
      },
      colors: {
        gray: {
          lightest: gray[200],
          lighter: gray[300],
          light: gray[400],
          DEFAULT: gray[500],
          dark: gray[600],
          darker: gray[700],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
