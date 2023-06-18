import selfie from "./selfie.jpg";
import "./Home.css";
import Button from "react-bootstrap/Button";

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
          <Button
            variant="link"
            className="Home-link"
            href="https://www.linkedin.com/in/joe-odams-327333a4/"
            target="_blank"
            style={{ marginLeft: "0px !important" }}
          >
            LinkedIn
          </Button>{" "}
          <Button
            variant="link"
            className="Home-link"
            href="https://github.com/joeodams"
            target="_blank"
          >
            Github
          </Button>{" "}
          <Button variant="link" className="Home-link" href="/CV">
            CV
          </Button>{" "}
          <Button variant="link" className="Home-link" href="/projects">
            Projects
          </Button>{" "}
        </div>
      </header>
    </div>
  );
}

export default Home;
