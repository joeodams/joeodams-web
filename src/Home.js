import selfie from "./selfie.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <p className="Home-title">
          Hey, I'm Joe, a full-stack developer. I build web apps, backends,
          APIs, and UIs.
        </p>
        <div>
          <img src={selfie} className="Home-logo" alt="logo" />
        </div>
        <div className="Home-break"></div>

        <div className="Home-links">
          <Link
            to="https://www.linkedin.com/in/joe-odams-327333a4/"
            variant="link"
            className="Home-link"
            target="_blank"
            style={{ marginLeft: "0px !important" }}
          >
            LinkedIn
          </Link>{" "}
          <Link
            Link="link"
            className="Home-link"
            to="https://github.com/joeodams"
            target="_blank"
          >
            Github
          </Link>{" "}
          <Link variant="link" className="Home-link" to="/CV">
            CV
          </Link>{" "}
          <Link variant="link" className="Home-link" to="/projects">
            Projects
          </Link>{" "}
        </div>
      </header>
    </div>
  );
}

export default Home;
