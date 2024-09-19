import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aside from "./components/Aside";
import NavBar from "./components/navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <div className="flex">
          <Aside />
          <div className="flex-1">
            <NavBar />
            <div className="p-8 pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
