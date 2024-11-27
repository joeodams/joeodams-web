import astronScreenshot1 from "./astron-screenshot-1.png";
import astronScreenshot2 from "./astron-screenshot-2.png";
import astronScreenshot3 from "./astron-screenshot-3.jpg";
import astronScreenshot4 from "./astron-screenshot-4.jpg";

function AstronProjectSlide() {
  return (
    <div>
      <div className="Projects-title">a bike rental service app</div>
      <div className="Projects-content astron">
        <div className="Projects-image-container astron">
          <img
            src={astronScreenshot2}
            alt="First slide"
            style={{
              margin: "auto",
              flex: "25%",
              padding: "10px",
            }}
          />
          <img
            src={astronScreenshot3}
            alt="First slide"
            style={{
              margin: "auto",
              flex: "25%",
              padding: "10px",
            }}
          />
          <img
            src={astronScreenshot4}
            alt="First slide"
            style={{
              margin: "auto",
              flex: "25%",
              padding: "10px",
            }}
          />
          <img
            src={astronScreenshot1}
            alt="First slide"
            style={{
              margin: "auto",
              flex: "25%",
              padding: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AstronProjectSlide;
