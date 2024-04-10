const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      default: ["Open Sans", "sans-serif"],
    },
    width: {
      "content-width": "400px",
    },
    boxShadow: {
      "form-shadow": "0 2px 10px rgba(0, 0, 0, 0.3)",
    },
    colors: {
      "text-color": "#777",
      "border-color": "#f0f0f0",
      white: "#fff",
      black: "#000",
      sky: {
        500: "#0ea5e9",
      },
    },
  },
  plugins: [],
};
