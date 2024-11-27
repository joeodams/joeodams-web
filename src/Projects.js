import Carousel from "react-bootstrap/Carousel";
import electionScreenshot from "./election-app-screenshot.PNG";

import AstronProjectSlide from "./AstronProjectSlide";
import PlanningProjectSlide from "./PlanningProjectSlide";

import "./Projects.css";

function Projects() {
  return (
    <div>
      <div style={{ display: "flex", flexFlow: "column" }}>
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
          indicators={false}
        >
          <Carousel.Item>
            <AstronProjectSlide />

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
              <p style={{ maxWidth: "50%" }}>
                Tech demonstration of how the React Native/Expo stack can be
                used to rapidly prototype cross-platform mobile apps. The app is
                a demo for a bike rental service startup. It uses a .NET 7
                backend and includes a full auth flow and persistence layer.
              </p>

              <a href="mailto:joeodams@gmail.com">Request a demo</a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <PlanningProjectSlide />
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
          <Carousel.Item>
            <div className="Projects-title">UK Election data visualiser</div>
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
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
