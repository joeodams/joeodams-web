import "./CV.css";
import Table from "react-bootstrap/Table";
import CVRow from "./CVrow";
import pdf from "./PDF_file_icon.png";
import cvFile from "./CV_file.pdf";

function CV() {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          alignItems: "center",
          margin: "auto",
        }}
      >
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
            {/* <tr>
              <th>Username</th>
              <th>Username</th>
              <th>Username</th>
              <th>Username</th>
              <th>Username</th>
              <th>Username</th>
              <th>Username</th>
              <th>Username</th>
            </tr> */}
          </thead>
          <thead>
            <tr>
              <th colSpan={8} style={{ fontSize: "48px" }}>
                Skills
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} style={{ alignContent: "center" }}>
                <div
                  style={{
                    listStyle: "none",
                    textAlign: "justify",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <ul>
                    <li>.NET: C#/VB, ASP.NET / Core, Web API</li>
                    <li>API design and development</li>
                    <li>React/TS</li>
                    <li>Architectural design patterns</li>
                    <li>SOLID principles</li>
                  </ul>
                </div>
              </td>
              <td colSpan={4}>
                <div
                  style={{
                    listStyle: "none",
                    textAlign: "justify",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <ul>
                    <li>Code review</li>
                    <li>Rapid prototyping</li>
                    <li>git</li>
                    <li>
                      {" "}
                      Python ML Stack:
                      <ul>
                        <li>TensorFlow</li>
                        <li>Keras</li>
                        <li>scikit-learn</li>
                        <li>pandas</li>
                      </ul>
                    </li>
                    <li>Flask</li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th colSpan={8} style={{ fontSize: "48px" }}>
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
                  }}
                >
                  <p>
                    I was a data analyst during a period of explosive growth and
                    acquisition for EQ Data
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
                  <p>SQL Server</p>
                </div>
              </td>
            </tr>
            <tr>
              <th colSpan={8} style={{ fontSize: "48px" }}>
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
                  <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Bsc Physics
                  </p>
                  <p>University of Sussex (2012-2015)</p>
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
