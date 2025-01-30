/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
    fontFamily: {
      sora: ["Sora", "sans-serif"],
    },
    colors: {
      "brand-primary": "#179800",
    },
  },
  plugins: [require("daisyui")],
};
