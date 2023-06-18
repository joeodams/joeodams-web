import { Routes, Route, HashRouter } from "react-router-dom";
import Projects from "./Projects.js";
import Home from "./Home.js";
import CV from "./CV.js";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/CV" element={<CV />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
