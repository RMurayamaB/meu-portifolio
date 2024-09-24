import { motion } from "framer-motion";

const Technologies = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-4xl mx-auto text-left">
      <h1 className="text-5xl font-bold mb-8 text-mainText">
        Tecnologias e ferramentas
      </h1>

      <section className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold mb-4 text-mainText">Front-End</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 font-light">
          {[
            {
              src: "/src/image/html-5-svgrepo-com.svg",
              alt: "logo html5",
              text: "HTML",
            },
            {
              src: "/src/image/css-3-svgrepo-com.svg",
              alt: "logo CSS3",
              text: "CSS",
            },
            {
              src: "/src/image/javascript-svgrepo-com.svg",
              alt: "logo javascript",
              text: "JavaScript",
            },
            {
              src: "/src/image/typescript-icon-svgrepo-com.svg",
              alt: "logo TypeScript",
              text: "TypeScript",
            },
            {
              src: "/src/image/react-javascript-js-framework-facebook-svgrepo-com.svg",
              alt: "logo React JS",
              text: "React",
            },
            {
              src: "/src/image/react-router-svgrepo-com.svg",
              alt: "React router",
              text: "React Router",
            },
            {
              src: "/src/image/tailwindcss-icon-svgrepo-com.svg",
              alt: "logo Tailwindcss",
              text: "TailwindCSS",
            },
            {
              src: "/src/image/vite-svgrepo-com.svg",
              alt: "logo Vite",
              text: "Vite",
            },
            {
              src: "/src/image/figma-svgrepo-com.svg",
              alt: "logo Figma",
              text: "Figma",
            },
          ].map((tool, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg bg-bgFerramentas transition-transform transform hover:scale-105 hover:bg-bgFerramentasHover hover:shadow-lg duration-300"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <img src={tool.src} alt={tool.alt} />
              <span className="text-btnText">{tool.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-3xl text-mainText font-bold mb-4 mt-8">Testes</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 font-light">
          <motion.div
            className="flex items-center gap-3 p-3 rounded-lg bg-bgFerramentas transition-transform transform hover:scale-105 hover:bg-bgFerramentasHover hover:shadow-lg duration-300"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <img
              src="/src/image/jest-snapshot-svgrepo-com.svg"
              alt="logo Jest"
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
            className="flex items-center gap-3 p-3 rounded-lg bg-bgFerramentas transition-transform transform hover:scale-105 hover:bg-bgFerramentasHover hover:shadow-lg duration-300"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <img
              src="/src/image/postgresql-svgrepo-com.svg"
              alt="logo PostgreSQL"
            />
            <span className="text-btnText">PostgreSQL</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
