/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        "brand-primary": "#179800",
        "secondary-bg": "#EFEBE3",
      },
    },
  },
  plugins: [require("daisyui")],
};
