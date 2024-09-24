import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-5xl text-mainText font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Meus Projetos
      </motion.h1>
      <section className="flex flex-col">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 justify-items-center md:grid-cols-1 lg:grid-cols-2">
          {[1, 2].map((project, index) => (
            <motion.div
              key={index}
              className="max-w-sm rounded-lg shadow-md p-6 border border-border-project"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <button
                type="button"
                className="rounded-md mb-4 border border-border-project w-full overflow-hidden"
              >
                <motion.img
                  className="hover:scale-105 transition-all duration-300"
                  src="/src/image/portifo-img.png"
                  whileHover={{ scale: 1.05 }}
                />
              </button>
              <h3 className="text-xl text-mainText font-semibold mb-2">
                Portifólio pessoal
              </h3>
              <p className="text-projectDescription text-base">
                Protifólio pessoal, com o objetivo de me apresentar melhor e
                mostrar os meus projetos.
              </p>
              <div className="mt-4 flex space-x-3">
                <a
                  href="#"
                  className="bg-btnVisualizar text-btnText px-4 py-2 rounded-lg hover:bg-hoverBtnVisualizar transition duration-300 text-sm flex items-center"
                >
                  Visualizar
                </a>
                <a
                  href="https://github.com/RMurayamaB/meu-portifolio"
                  target="_blank"
                  className="bg-btnCodigo text-btnText px-4 py-2 rounded-lg hover:bg-hoverBtnCodigo transition duration-300 text-sm flex items-center"
                >
                  Código
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
