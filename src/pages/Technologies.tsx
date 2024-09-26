import { motion } from "framer-motion";
import html from "../assets/html-5-svgrepo-com.svg";
import css from "../assets/css-3-svgrepo-com.svg";
import javascript from "../assets/javascript-svgrepo-com.svg";
import typescript from "../assets/typescript-icon-svgrepo-com.svg";
import react from "../assets/react-javascript-js-framework-facebook-svgrepo-com.svg";
import reactRouter from "../assets/react-router-svgrepo-com.svg";
import tailwind from "../assets/tailwindcss-icon-svgrepo-com.svg";
import vite from "../assets/vite-svgrepo-com.svg";
import figma from "../assets/figma-svgrepo-com.svg";
import framer from "../assets/framer-svgrepo-com(3).svg";
import jest from "../assets/jest-snapshot-svgrepo-com.svg";
import postgresql from "../assets/postgresql-svgrepo-com.svg";

const Technologies = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-4xl mx-auto text-left">
      <h1 className="text-5xl font-bold mb-8 text-mainText">
        Tecnologias e ferramentas
      </h1>

      <section className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold mb-4 text-mainText">Front-End</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 font-normal">
          {[
            {
              src: html,
              alt: "logo html5",
              text: "HTML",
            },
            {
              src: css,
              alt: "logo CSS3",
              text: "CSS",
            },
            {
              src: javascript,
              alt: "logo JavaScript",
              text: "JavaScript",
            },
            {
              src: typescript,
              alt: "logo TypeScript",
              text: "TypeScript",
            },
            {
              src: react,
              alt: "logo React JS",
              text: "React",
            },
            {
              src: reactRouter,
              alt: "React Router",
              text: "React Router",
            },
            {
              src: tailwind,
              alt: "logo Tailwind CSS",
              text: "TailwindCSS",
            },
            {
              src: vite,
              alt: "logo Vite",
              text: "Vite",
            },
            {
              src: figma,
              alt: "logo Figma",
              text: "Figma",
            },
            {
              src: framer,
              alt: "logo Framer Motion",
              text: "Framer Motion",
            },
          ].map((tool, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg bg-bgFerramentas transition-transform hover:bg-bgFerramentasHover hover:shadow-blur duration-500"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <img
                className="transition-transform transform hover:scale-110"
                src={tool.src}
                alt={tool.alt}
              />
              <span className="text-btnText">{tool.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-3xl text-mainText font-bold mb-4 mt-8">Testes</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 font-light">
          <motion.div
            className="flex items-center gap-3 p-3 rounded-lg bg-bgFerramentas transition-transform transform hover:scale-105 hover:bg-bgFerramentasHover hover:shadow-blur duration-500"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <img
              src={jest}
              alt="logo Jest"
              className="transition-transform transform hover:scale-110"
            />
            <span className="text-btnText">Jest</span>
          </motion.div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-3xl text-mainText font-bold mb-4 mt-8">
          Banco de dados
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 font-light">
          <motion.div
            className="flex items-center gap-3 p-3 rounded-lg bg-bgFerramentas transition-transform hover:bg-bgFerramentasHover hover:shadow-blur duration-300"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <img
              src={postgresql}
              alt="logo PostgreSQL"
              className="transition-transform transform hover:scale-110"
            />
            <span className="text-btnText">PostgreSQL</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
