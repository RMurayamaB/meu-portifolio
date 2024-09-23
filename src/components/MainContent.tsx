import { Route, Routes } from "react-router-dom";
import Projects from "../pages/Projects";
import Technologies from "../pages/Technologies";
import Home from "../pages/Home";

const MainContent = () => {
  return (
    <main className="p-8 pt-16 min-h-screen md:ml-80 bg-mainBg">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/tecnologias" element={<Technologies />} />
      </Routes>
    </main>
  );
};

export default MainContent;
