import { Sun } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="w-full shadow-lg p-4 fixed top-0 left-0 flex justify-end font-light text-lg bg-aside-color">
      <button className="flex px-4">
        <Sun className="mr-2" size={32} color="#000000" />
        Light
      </button>
    </nav>
  );
};

export default NavBar;
