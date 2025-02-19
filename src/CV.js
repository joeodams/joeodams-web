import "./CV.css";
import Table from "react-bootstrap/Table";
import cvFile from "./CV_file.pdf";
import pdf from "./PDF_file_icon.png";

function CV() {
  return (
    <div style={{ width: "100%" }}>
      <div className="CV-container">
        {/* <a href={cvFile} download="Joe Odams CV.pdf">
          <img
            alt="CV"
            src={pdf}
            height={"100px"}
            style={{ float: "right", padding: "10px" }}
          ></img>
          Download as PDF
        </a> */}

        <div className="CV-download">
          <a
            href={cvFile}
            download="Joe Odams CV.pdf"
            className="CV-download-link"
          >
            <img alt="Download CV" src={pdf} className="CV-download-icon" />
            <span>Download as PDF</span>
          </a>
        </div>

        <Table
          hover
          color="#e9e1e1"
          bgcolor="#e9e1e1"
          style={{
            textAlign: "center",
            tableLayout: "fixed",
            "--bs-body-bg": "#e9e1e1",
          }}
        >
          <thead>
            <tr>
              <th colSpan={8} style={{ fontSize: "72px" }}>
                Key Skills
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={8} style={{ alignContent: "center" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: "48px",
                  }}
                >
                  <ul
                    style={{
                      listStyleType: "none",
                      gap: "15px",
                      flexWrap: "wrap",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      paddingLeft: 0,
                    }}
                  >
                    <li>.NET / C#</li>
                    <li>Unit testing</li>
                    <li>Architecture</li>
                    <li>SQL</li>
                    <li>Code review</li>
                    <li>Rapid prototyping</li>
                    <li>git</li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th colSpan={8} style={{ fontSize: "72px" }}>
                Experience
              </th>
            </tr>
            <tr>
              <td colSpan={2}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Parmenion
                  </p>
                  <p>2022-present</p>
                </div>
              </td>
              <td colSpan={3}>
                <div
                  style={{
                    textAlign: "justify",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "2%",
                  }}
                >
                  <p>
                    I am currently a staff engineer for a large, mature
                    investment management platform. I've contributed to
                    modernisation and infrastructural improvements as well as
                    feature and service development.
                  </p>
                </div>
              </td>
              <td colSpan={3}>
                <div
                  style={{
                    textAlign: "justify",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "3%",
                  }}
                >
                  <p>
                    ASP.NET Core & Framework using MVC, Web API, Web Forms, EF
                    Core, EF6, React, Docker
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Beedle.io
                  </p>
                  <p>2020-2022</p>
                </div>
              </td>
              <td colSpan={3}>
                <div
                  style={{
                    textAlign: "justify",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "2%",
                  }}
                >
                  <p>
                    I was a leading backend engineer for Beedle, a startup
                    developing an MS Teams app. I was responsible for rapid
                    implementation of Beedle's API to support features. I worked
                    to extend Azure deployments to scale and optimise the app as
                    the customer base grew.
                  </p>
                </div>
              </td>
              <td colSpan={3}>
                <div
                  style={{
                    textAlign: "justify",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "3%",
                  }}
                >
                  <p>
                    Modern C# stack, Azure Functions, REST APIs, React/TS, Azure
                    SQL Database
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Landmark
                  </p>
                  <p>2017-2020</p>
                </div>
              </td>
              <td colSpan={3}>
                <div
                  style={{
                    textAlign: "justify",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "2%",
                  }}
                >
                  <p>
                    I worked as a data scientist and software developer with the
                    team at Landmark. I developed data pipelines for the data
                    team and developed APIs and systems for internal business
                    use.
                  </p>
                </div>
              </td>
              <td colSpan={3}>
                <div
                  style={{
                    textAlign: "justify",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "3%",
                  }}
                >
                  <p>
                    Azure Functions, REST/SOAP APIs, Azure Logic Apps,
                    scikit-learn
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Equiniti Data
                  </p>
                  <p>2016-2017</p>
                </div>
              </td>
              <td colSpan={3}>
                <div
                  style={{
                    textAlign: "justify",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "2%",
                  }}
                >
                  <p>Data analyst</p>
                </div>
              </td>
              <td colSpan={3}>
                <div
                  style={{
                    textAlign: "justify",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "3%",
                  }}
                >
                  <p>SQL Server</p>
                </div>
              </td>
            </tr>
            <tr>
              <th colSpan={8} style={{ fontSize: "72px" }}>
                Education
              </th>
            </tr>
            <tr>
              <td colSpan={8}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ fontSize: "48px", fontWeight: "bold" }}>
                    Bsc Physics
                  </p>
                  <p style={{ fontSize: "28px" }}>
                    University of Sussex (2012-2015)
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default CV;
