/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "aside-color": "#F2F2F2",
      "bg-tecnologia": "#F2F2F2",
      "bg-tecnologiaHover": "#DCDCDC",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
