import electionScreenshot from "./election-app-screenshot.PNG";
import astronScreenshot1 from "./astron-screenshot-1.png";
import astronScreenshot2 from "./astron-screenshot-2.png";
import astronScreenshot3 from "./astron-screenshot-3.jpg";
import astronScreenshot4 from "./astron-screenshot-4.jpg";
import planningScreenshot1 from "./planning-app-screenshot-1.png";
import planningScreenshot2 from "./planning-app-screenshot-2.png";
import { commercialProjects, sideProjects } from "./siteContent";
import "./Projects.css";

const projectImages = {
  lycanthrope: ["/lycanthrope-title.png"],
  co2: ["/co2.PNG"],
  astron: [
    astronScreenshot2,
    astronScreenshot3,
    astronScreenshot4,
    astronScreenshot1,
  ],
  planning: [planningScreenshot1, planningScreenshot2],
  election: [electionScreenshot],
};

function Projects() {
  return (
    <div className="page-container Projects-page">
      <section className="Projects-section">
        <div className="Section-heading">
          <p className="section-kicker">Commercial highlights</p>
          <h2>Recent work I can describe at a high level</h2>
        </div>
        <div className="Projects-grid">
          {commercialProjects.map((project) => (
            <article
              className="section-card Projects-summary-card"
              key={project.title}
            >
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="pill-list pill-list-compact">
                {project.focus.map((item) => (
                  <li className="pill" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="Projects-section">
        <div className="Section-heading">
          <p className="section-kicker">Side projects</p>
          <h2>Experiments, prototypes, and public-facing builds</h2>
        </div>

        <div className="Projects-showcase-list">
          {sideProjects.map((project) => {
            const images = projectImages[project.id] || [];
            const openInNewTab = /^https?:/i.test(project.link.href);
            const showcaseClassName = `section-card Project-showcase${
              images.length === 0 ? " Project-showcase-no-media" : ""
            }`;

            return (
              <article className={showcaseClassName} key={project.id}>
                <div className="Project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>

                  <ul className="pill-list pill-list-compact">
                    {project.stack.map((item) => (
                      <li className="pill" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="Project-links no-print">
                    <a
                      className="button button-secondary"
                      href={project.link.href}
                      rel={openInNewTab ? "noreferrer" : undefined}
                      target={openInNewTab ? "_blank" : undefined}
                    >
                      {project.link.label}
                    </a>
                  </div>
                </div>

                {images.length > 0 && (
                  <div
                    className={`Project-gallery Project-gallery-${project.id}`}
                  >
                    {images.map((image, index) => (
                      <img
                        alt={`${project.title} screenshot ${index + 1}`}
                        key={`${project.id}-${index + 1}`}
                        src={image}
                      />
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Projects;
