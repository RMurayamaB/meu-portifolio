import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="w-80 h-screen bg-aside-color p-6 fixed z-20">
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
  );
};

export default Aside;
