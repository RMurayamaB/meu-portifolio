import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
    {
      title: "Ecommerce",
      description:
        "Desenvolvi um e-commerce usando Vite, JavaScript e Tailwind CSS, integrado à API do Mercado Livre para exibir produtos. O projeto inclui um carrinho de compras funcional com cálculo em tempo real e uma interface moderna e responsiva.",
      imageSrc: "/public/image/Ecommerce.png",
      liveLink: "https://ecommerce-rosy-omega.vercel.app/",
      codeLink: "https://github.com/RMurayamaB/Ecommerce",
    },
    {
      title: "Site kiris",
      description:
        "Desenvolvi um site de moda como parte de um trabalho acadêmico no primeiro período da faculdade, utilizando HTML e CSS. O site apresenta um layout responsivo e organizado com seções para calças, shorts, camisetas e página de login.",
      imageSrc: "/public/image/Kiris.jpg",
      liveLink: "https://site-kiris-moda.vercel.app/",
      codeLink: "https://github.com/RMurayamaB/Site-kiris-moda",
    },
  ];

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
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="max-w-sm flex flex-col justify-between rounded-lg shadow-md p-6 border border-border-project"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <div>
                <button
                  type="button"
                  className="rounded-md mb-4 border border-border-project w-full overflow-hidden"
                >
                  <motion.img
                    className="hover:scale-105 transition-all duration-300"
                    src={project.imageSrc}
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                  />
                </button>
                <h3 className="text-xl text-mainText font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-projectDescription text-base">
                  {project.description}
                </p>
              </div>
              <div className="mt-4 flex space-x-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="bg-btnVisualizar text-btnText px-4 py-2 rounded-lg hover:bg-hoverBtnVisualizar transition duration-300 text-sm flex items-center"
                >
                  Visualizar
                </a>
                <a
                  href={project.codeLink}
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
