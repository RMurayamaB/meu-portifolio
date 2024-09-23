/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "aside-color": "#F2F2F2",
      "bg-tecnologia": "#F2F2F2",
      "bg-tecnologiaHover": "#DCDCDC",
      "border-project": "#D2D2D2",
      "colorTextProject": "#A8B1BE",
      "btnVisualizar": "#2BCA95",
      "hoverBtnVisualizar": "#258968",
      "btnCodigo": "#235CA4",
      "hoverBtnCodigo": "#0A4A9C",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
