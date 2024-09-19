import { Sun } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="w-full shadow-md p-4 fixed top-0 flex justify-end font-light text-lg ">
      <div className="flex px-4">
        <Sun className="mr-2" size={32} color="#000000" />
        Light
      </div>
    </nav>
  );
};

export default NavBar;
