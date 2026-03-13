import { HashRouter, Route, Routes } from "react-router-dom";
import Projects from "./Projects.js";
import Home from "./Home.js";
import CV from "./CV.js";
import Layout from "./Layout.js";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/CV" element={<CV />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
