const Technologies = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto text-left">
        <h1 className="text-5xl font-bold mb-8 text-mainText">
          Tecnologias e ferramentas
        </h1>
        <section className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold mb-4 text-mainText">Front-End</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 font-light">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-bgFerramentas transition-transform transform hover:scale-105 hover:bg-bgFerramentasHover hover:shadow-lg duration-300">
              <img src="/src/image/html-5-svgrepo-com.svg" alt="logo html5" />
              <span className="text-btnText">HTML</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-bgFerramentas transition-transform transform hover:scale-105 hover:bg-bgFerramentasHover hover:shadow-lg duration-300">
              <img src="/src/image/css-3-svgrepo-com.svg" alt="logo CSS3" />
              <span className="text-btnText">CSS</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-bgFerramentas transition-transform transform hover:scale-105 hover:bg-bgFerramentasHover hover:shadow-lg duration-300">
              <img
                src="/src/image/javascript-svgrepo-com.svg"
                alt="logo javascript"
              />
              <span className="text-btnText">JavaScript</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-bgFerramentas transition-transform transform hover:scale-105 hover:bg-bgFerramentasHover hover:shadow-lg duration-300">
              <img
                src="/src/image/typescript-icon-svgrepo-com.svg"
                alt="logo TypeScript"
              />
              <span className="text-btnText">TypeScript</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-bgFerramentas transition-transform transform hover:scale-105 hover:bg-bgFerramentasHover hover:shadow-lg duration-300">
              <img
                src="/src/image/react-javascript-js-framework-facebook-svgrepo-com.svg"
                alt="logo React JS"
              />
              <span className="text-btnText">React</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-bgFerramentas transition-transform transform hover:scale-105 hover:bg-bgFerramentasHover hover:shadow-lg duration-300">
              <img
                src="/src/image/react-router-svgrepo-com.svg"
                alt="React router"
              />
              <span className="text-btnText">React Router</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-bgFerramentas transition-transform transform hover:scale-105 hover:bg-bgFerramentasHover hover:shadow-lg duration-300">
              <img
                src="/src/image/tailwindcss-icon-svgrepo-com.svg"
                alt="logo Tailwindcss"
              />
              <span className="text-btnText">TailwindCSS</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-bgFerramentas transition-transform transform hover:scale-105 hover:bg-bgFerramentasHover hover:shadow-lg duration-300">
              <img src="/src/image/vite-svgrepo-com.svg" alt="logo Vite" />
              <span className="text-btnText">Vite</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-bgFerramentas transition-transform transform hover:scale-105 hover:bg-bgFerramentasHover hover:shadow-lg duration-300">
              <img src="/src/image/figma-svgrepo-com.svg" alt="logo Figma" />
              <span className="text-btnText">Figma</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-3xl text-mainText font-bold mb-4 mt-8">Testes</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 font-light">
            <div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-bgFerramentas transition-transform transform hover:scale-105 hover:bg-bgFerramentasHover hover:shadow-lg duration-300">
                <img
                  src="/src/image/jest-snapshot-svgrepo-com.svg"
                  alt="logo Jest"
                />
                <span className="text-btnText">Jest</span>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <h3 className="text-3xl text-mainText font-bold mb-4 mt-8">
            Banco de dados
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 font-light">
            <div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-bgFerramentas transition-transform transform hover:scale-105 hover:bg-bgFerramentasHover hover:shadow-lg duration-300">
                <img
                  src="/src/image/postgresql-svgrepo-com.svg"
                  alt="logo PostgreSQL"
                />
                <span className="text-btnText">PostgreSQL</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Technologies;
