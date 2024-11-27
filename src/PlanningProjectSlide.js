import planningScreenshot1 from "./planning-app-screenshot-1.png";
import planningScreenshot2 from "./planning-app-screenshot-2.png";

function PlanningProjectSlide() {
  return (
    <div>
      <div className="Projects-title">AI Planning Application tool</div>
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
      </div>{" "}
    </div>
  );
}

export default PlanningProjectSlide;
