/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "aside-color": "#191E24",
      "asideBgUl": "#2A384D",
      "asideText": "#A6ADBB",

      "mainText": "#A6ADBB",
      "mainBg": "#1D232A",
      
      "projectDescription": "#8A8A8A",
      "btnText": "#F2F2F2",

      "bgFerramentas": "#313A45",
      "bgFerramentasHover": "#191E24",

      
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
