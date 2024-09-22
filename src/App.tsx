import { BrowserRouter as Router } from "react-router-dom";
import Aside from "./components/Aside";
import NavBar from "./components/navbar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <>
      <Router>
        <div className="flex">
          <Aside />
          <div className="flex-1">
            <NavBar />
            <MainContent />
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
