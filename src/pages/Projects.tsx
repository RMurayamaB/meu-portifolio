const Projects = () => {
  return (
    <div className="max-w-3xl mx-auto text-left">
      <h1 className="text-5xl font-bold mb-8">Meus Projetos</h1>
      <section className="flex flex-col ">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 justify-items-center md:grid-cols-1 lg:grid-cols-2">
          <div className="max-w-sm rounded-lg shadow-md p-6 border border-border-project">
            <button
              type="button"
              className="rounded-md mb-4 border border-border-project w-full overflow-hidden"
            >
              <img
                className="hover:scale-105 transition-all duration-300"
                src="/src/image/portifo-img.png"
              />
            </button>
            <h3 className="text-xl font-semibold mb-2">Portifólio pessoal</h3>
            <p className="text-colorTextProject text-base">
              Protifólio pessoal, com o objetivo de me apresentar melhor e
              mostrar os meus projetos.
            </p>
            <div className="mt-4 flex space-x-3">
              <a
                href="#"
                className="bg-btnVisualizar text-aside-color px-4 py-2 rounded-lg hover:bg-hoverBtnVisualizar transition duration-300 text-sm flex items-center"
              >
                Visualizar
              </a>
              <a
                href="https://github.com/RMurayamaB/meu-portifolio"
                target="_blank"
                className="bg-btnCodigo text-aside-color px-4 py-2 rounded-lg hover:bg-hoverBtnCodigo transition duration-300 text-sm flex items-center"
              >
                Código
              </a>
            </div>
          </div>
          <div className="max-w-sm rounded-lg shadow-md p-6 border border-border-project">
            <button
              type="button"
              className="rounded-md mb-4 border border-border-project w-full overflow-hidden"
            >
              <img
                className="hover:scale-105 transition-all duration-300"
                src="/src/image/portifo-img.png"
              />
            </button>
            <h3 className="text-xl font-semibold mb-2">Portifólio pessoal</h3>
            <p className="text-colorTextProject text-base">
              Protifólio pessoal, com o objetivo de me apresentar melhor e
              mostrar os meus projetos.
            </p>
            <div className="mt-4 flex space-x-3">
              <a
                href="#"
                className="bg-btnVisualizar text-aside-color px-4 py-2 rounded-lg hover:bg-hoverBtnVisualizar transition duration-300 text-sm flex items-center"
              >
                Visualizar
              </a>
              <a
                href="#"
                className="bg-btnCodigo text-aside-color px-4 py-2 rounded-lg hover:bg-hoverBtnCodigo transition duration-300 text-sm flex items-center"
              >
                Código
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
