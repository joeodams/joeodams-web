import Carousel from "react-bootstrap/Carousel";
import electionScreenshot from "./election-app-screenshot.PNG";
import planningScreenshot1 from "./planning-app-screenshot-1.png";
import planningScreenshot2 from "./planning-app-screenshot-2.png";

import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <div style={{ height: "95vh", display: "flex", flexFlow: "column" }}>
        <div>
          {" "}
          <Link
            variant="link"
            to="/"
            style={{ fontSize: "50px", textDecoration: "none" }}
            className="position-top"
          >
            ←
          </Link>
        </div>
        <Carousel
          style={{
            paddingTop: "2%",
            height: "100%",
            bottom: "0",
            width: "100%",
            display: "flex",
          }}
          variant="dark"
          interval={null}
        >
          <Carousel.Item>
            <div className="Projects-content election">
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
              <p className="Projects-content-text election">
                View the shifting geography and demographics of general
                elections over the years in this React App.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="Projects-content">
              <div style={{ display: "flex", width: "75%" }}>
                <img
                  className="d-block w-50"
                  src={planningScreenshot1}
                  alt="First slide"
                  style={{
                    margin: "auto",
                    width: "100%",
                    flex: "33.33%",
                    padding: "10px",
                  }}
                />
                <img
                  className="d-block w-50"
                  src={planningScreenshot2}
                  alt="First slide"
                  style={{
                    margin: "auto",
                    width: "100%",
                    flex: "33.33%",
                    padding: "10px",
                  }}
                />
              </div>
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
                backend trained to scrape context and information from a
                planning application document. The frontend is a React app which
                visualises the results, including a 3D reconstruction of the
                proposal from the architectural drawings.
              </p>

              <a href="mailto:joeodams@gmail.com">
                Request a demo / chat through the tech!
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
