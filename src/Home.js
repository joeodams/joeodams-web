import selfie from "./selfie.jpg";
import "./Home.css";
import { Link } from "react-router-dom";
import {
  commercialProjects,
  focusAreas,
  homeHero,
  sideProjects,
  summaryBadges,
} from "./siteContent";

const featuredProjects = sideProjects.filter((project) => project.featured);

function Home() {
  return (
    <div className="page-container Home-page">
      <section className="Home-hero section-card">
        <div className="Home-copy">
          <p className="section-kicker">{homeHero.eyebrow}</p>
          <h1 className="Home-title">{homeHero.title}</h1>
          <p className="Home-summary Home-summary-secondary">
            {homeHero.summary}
          </p>

          <div className="Home-actions no-print">
            <Link className="button button-primary" to="/cv">
              View CV
            </Link>
            <Link className="button button-secondary" to="/projects">
              See projects
            </Link>
            <a className="button button-ghost" href="mailto:joeodams@gmail.com">
              Email me
            </a>
          </div>

          <ul className="pill-list">
            {summaryBadges.map((badge) => (
              <li className="pill" key={badge}>
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <aside className="Home-photo-card">
          <img src={selfie} className="Home-photo" alt="Joe Odams" />
          <div className="Home-photo-caption">
            <span>Bristol, UK</span>
          </div>
        </aside>
      </section>

      <section className="Home-section">
        <div className="Section-heading">
          <h2>Where I add value </h2>
        </div>
        <div className="Home-card-grid">
          {focusAreas.map((area) => (
            <article className="section-card Home-info-card" key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="Home-section">
        <div className="Section-heading">
          <h2>Recent commercial highlights</h2>
        </div>
        <div className="Home-card-grid">
          {commercialProjects.map((project) => (
            <article
              className="section-card Home-info-card"
              key={project.title}
            >
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card Home-section">
        <div className="Section-heading">
          <h2>Selected side projects.</h2>
        </div>
        <div className="Home-project-grid">
          {featuredProjects.map((project) => (
            <article className="Home-project-card" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="pill-list pill-list-compact">
                {project.stack.slice(0, 3).map((item) => (
                  <li className="pill" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="Home-inline-action no-print">
          <Link className="button button-secondary" to="/projects">
            Browse all projects
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
