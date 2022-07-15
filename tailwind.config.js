/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "blue-200": "#04358066",
      "blue-800": "#043580",
      "blue-900": "#021E48",
      "gray-200": "#F0F0F0",
      "gray-500": "#ACACAC",
      "gray-700": "#8D8D8D",
      "gray-800": "#757575",
      "gray-900": "#898989",
      "red-600": "#e74c3c",
      white: "#FFFFFF",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
