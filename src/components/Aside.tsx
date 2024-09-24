import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const asideRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (asideRef.current && !asideRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <aside
        ref={asideRef}
        className={`fixed bg-aside-color z-20 p-6 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-80 h-screen md:translate-x-0 md:block`}
      >
        <div className="w-fit mx-auto mt-5 mb-6">
          <img
            src="/src/image/IMG_7362.jpg"
            alt="Foto de perfil"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <ul className="space-y-6 font-light text-2xl text-asideText">
          <li>
            <Link
              className="block py-2 px-4 rounded-lg transition duration-500 ease-in-out hover:translate-x-1 hover:shadow-2xl hover:bg-asideBgUl"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 px-4 rounded-lg transition duration-500 ease-in-out hover:translate-x-1 hover:shadow-2xl hover:bg-asideBgUl"
              to="/projetos"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 px-4 rounded-lg transition duration-500 ease-in-out hover:translate-x-1 hover:shadow-2xl hover:bg-asideBgUl"
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
        {isOpen ? <X color="#A6ADBB" /> : <Menu color="#A6ADBB" />}
      </button>
    </>
  );
};

export default Aside;
