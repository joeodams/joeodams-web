import "./CV.css";
import Table from "react-bootstrap/Table";
import CVRow from "./CVrow";

function CV() {
  return (
    <Table hover className="CV-table">
      <thead></thead>
      <tbody>
        <CVRow isDivider={true} dividerTitle="Skills"></CVRow>
        <tr>
          {" "}
          <td></td>
          <td colSpan={2}>
            <div
              className="CV-column"
              style={{ justifyContent: "center", textAlign: "left" }}
            >
              <li>.NET: C#/VB, ASP.NET / Core, Web API</li>
              <li>API design and development</li>
              <li>React/TS</li>
              <li>Archiectural design patterns</li>
              <li>SOLID principles</li>
              <li>Code review</li>
              <li>git</li>
              <li>Python ML stack: TensorFlow, Keras, scikit-learn, pandas</li>
              <li>Flask</li>
            </div>
          </td>
          <td></td>
        </tr>
        <CVRow isDivider={true} dividerTitle="Work"></CVRow>
        <CVRow
          jobTitle="Software Developer"
          companyName="Parmenion"
          tenure="June 2022 - "
          jobDescription="Engineer at Parmenion, developing an investment management
          platform. Worked across a large, mature solution with varying
          technologies and approaches. Modernisation and infrastructural
          improvements as well as feature and service development."
          technologies="ASP.NET Core & Framework using MVC, Web API, Web Forms, EF Core, EF6, React, Docker"
        ></CVRow>
        <CVRow
          jobTitle="Backend Developer"
          companyName="Beedle Edu"
          tenure="April 2020 - June 2022"
          jobDescription="Developer for Beedle, a startup developing an MS Teams app.
          Responsible for rapid implementation of backend functionality
          according to feature requirements. Working to extend Azure
          deployments to scale and optimise the app as the customer base
          grew."
          technologies="Modern C# stack, Azure Functions, REST APIs, React/TS, Azure SQL Database"
        ></CVRow>
        <CVRow
          jobTitle="Developer / Data Scientist"
          companyName="Landmark Information Group"
          tenure="November 2017 - April 2020"
          jobDescription="Data scientist and developer for Landmark, a geographical
          information services business. Development of data pipelines for
          the data team. Development of Azure Functions for internal
          business use."
          technologies="Azure Functions, REST/SOAP APIs, Azure Logic Apps, scikit-learn"
        ></CVRow>
        <CVRow
          jobTitle="Data Analyst"
          companyName="Equiniti Data"
          tenure="June 2016 - August 2017"
          jobDescription="Worked with on-prem databases to provide marketing data for
          customers."
          technologies="SQL Server"
        ></CVRow>
        <CVRow isDivider={true} dividerTitle="Education"></CVRow>
        <CVRow
          jobTitle="University of Sussex"
          companyName="BSc (Hons.) Physics"
          tenure="September 2012 - June 2015"
          jobDescription={[
            <li>Scientific Computing (1st class)</li>,
            <li>Mathematical Methods</li>,
            <li>
              Final year research project: ‘A Natural Galaxy Classification
              Scheme’ (68% final grade)
            </li>,
          ]}
        ></CVRow>
        <CVRow
          jobTitle="Exeter College"
          companyName="A-levels"
          tenure="September 2010 - June 2012"
          jobDescription={[<li>Maths</li>, <li>Physics</li>, <li>History</li>]}
        ></CVRow>
      </tbody>
    </Table>
  );
}

export default CV;
