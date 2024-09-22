import { useState } from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <aside
        className={`fixed top-16 left-0 z-20 bg-aside-color p-6 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-80 h-screen md:translate-x-0 md:block ${
          !isOpen ? "hidden" : "block"
        }`}
      >
        <div className="w-fit mx-auto mt-5 mb-6">
          <img
            src="/src/image/IMG_7362.jpg"
            alt="Foto de perfil"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <ul className="space-y-6 font-light text-2xl">
          <li>
            <Link
              className="block py-2 px-4 rounded-lg transition duration-500 ease-in-out hover:translate-x-1 hover:shadow-2xl"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 px-4 rounded-lg transition duration-500 ease-in-out hover:translate-x-1 hover:shadow-2xl"
              to="/projetos"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 px-4 rounded-lg transition duration-500 ease-in-out hover:translate-x-1 hover:shadow-2xl"
              to="/tecnologias"
            >
              Tecnologias
            </Link>
          </li>
        </ul>
      </aside>
      <button
        className="fixed top-4 right-4 z-30 p-2 bg-gray-800 text-white md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "X" : "☰"}
      </button>
    </>
  );
};

export default Aside;
