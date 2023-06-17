import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./Projects.js";
import Home from "./Home.js";
import CV from "./CV.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/CV" element={<CV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
