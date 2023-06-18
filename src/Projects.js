import Carousel from "react-bootstrap/Carousel";
import electionScreenshot from "./election-app-screenshot.PNG";
import Button from "react-bootstrap/Button";
import "./Projects.css";

function Projects() {
  return (
    <div style={{ height: "100%", display: "flex", flexFlow: "column" }}>
      <div>
        {" "}
        <Button
          variant="link"
          href="/"
          style={{ fontSize: "50px", textDecoration: "none" }}
        >
          ←
        </Button>
      </div>
      <Carousel style={{ paddingTop: "2%", height: "100%" }} variant="dark">
        <Carousel.Item>
          <div className="Projects-content">
            <img
              className="d-block w-50"
              src={electionScreenshot}
              alt="First slide"
              style={{ margin: "auto" }}
            />
          </div>

          <Carousel.Caption style={{ color: "black", position: "initial" }}>
            <a
              href="https://polydata.github.io/election-age-breakdown/"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "50px",
              }}
            >
              UK Election App
            </a>
            <p>
              View the shifting geography and demographics of general elections
              over the years in this React App.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="Projects-content">
            <img
              className="d-block w-50"
              src={electionScreenshot}
              alt="First slide"
              style={{ margin: "auto" }}
            />
          </div>

          <Carousel.Caption
            style={{
              color: "black",
              position: "initial",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: "50px",
              }}
            >
              AI Planning Application tool
            </p>
            <p style={{ maxWidth: "75%" }}>
              This app consists of a YOLACT segmentation model running on the
              backend trained to scrape context and information from a planning
              application document. The frontend is a React app which visualises
              the results, including a 3D reconstruction of the proposal from
              the architectural drawings.
            </p>

            <a href="mailto:joeodams@gmail.com">
              Request a demo / chat through the tech!
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Projects;
