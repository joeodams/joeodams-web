import "./CV.css";
import Table from "react-bootstrap/Table";

function CV() {
  return (
    <Table hover className="CV-table">
      <thead></thead>
      <tbody>
        <tr height="100%" className="CV-table-row">
          <td style={{ alignItems: "right" }}>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {" "}
              Software Developer
            </p>
            <p>Parmenion</p>
            <p>June 2022 - </p>
          </td>
          <td>
            <div className="CV-column">
              <p>
                Engineer at Parmenion, developing an investment management
                platform. Worked across a large, mature solution with varying
                technologies and approaches. Modernisation and infrastructural
                improvements as well as feature and service development.
              </p>
            </div>
          </td>
        </tr>
        <tr className="CV-table-row">
          <td style={{ alignItems: "right" }}>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {" "}
              Backend Developer
            </p>
            <p>Beedle</p>
            <p>April 2020 - June 2022</p>
          </td>
          <td>
            <div className="CV-column">
              <p>
                Developer for Beedle, a startup developing an MS Teams app.
                Responsible for rapid implementation of backend functionality
                according to feature requirements. Working to extend Azure
                deployments to scale and optimise the app as the customer base
                grew.{" "}
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td style={{ alignItems: "right" }}>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {" "}
              Developer / Data Scientist
            </p>
            <p>Landmark</p>
            <p>November 2017 - April 2020</p>
          </td>
          <td>
            <div className="CV-column">
              <p>
                Data scientist and developer for Landmark, a geographical
                information services business. Development of data pipelines for
                the data team. Development of Azure Functions for internal
                business use
              </p>
            </div>
          </td>
        </tr>{" "}
        <tr>
          <td style={{ alignItems: "right" }}>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {" "}
              Data Analyst
            </p>
            <p>Equiniti Data</p>
            <p>April 2020 - June 2022</p>
          </td>
          <td>
            <div className="CV-column">
              <p>
                Worked with on-prem databases to provide marketing data for
                customers
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CV;
