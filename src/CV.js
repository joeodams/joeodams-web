import "./CV.css";
import { Link } from "react-router-dom";
import cvFile from "./CV_File.pdf";
import {
  education,
  experienceItems,
  homeHero,
  personalDetails,
  skillGroups,
  summaryBadges,
} from "./siteContent";

function CV() {
  return (
    <div className="page-container CV-page">
      <section className="CV-hero section-card">
        <div className="CV-summary-block">
          <p className="section-kicker">Curriculum vitae</p>
          <h1>{personalDetails.name}</h1>
          <p className="CV-role">{personalDetails.role}</p>
          <p className="CV-summary">{homeHero.summary}</p>
        </div>

        <aside className="CV-contact-card">
          <p className="CV-contact-label">Contact</p>
          <a href={`mailto:${personalDetails.email}`}>{personalDetails.email}</a>
          <a href={personalDetails.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href={personalDetails.github} rel="noreferrer" target="_blank">
            GitHub
          </a>
          <p className="CV-location">{personalDetails.location}</p>
          <a
            className="button button-primary no-print"
            download="Joe-Odams-CV.pdf"
            href={cvFile}
          >
            Download CV PDF
          </a>
        </aside>
      </section>

      <section className="CV-snapshot">
        {summaryBadges.map((item) => (
          <article className="CV-snapshot-card" key={item}>
            {item}
          </article>
        ))}
      </section>

      <section className="section-card">
        <div className="Section-heading">
          <p className="section-kicker">Strengths</p>
          <h2>Technical focus</h2>
        </div>
        <div className="CV-skill-grid">
          {skillGroups.map((group) => (
            <article className="CV-skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="CV-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <div className="Section-heading">
          <p className="section-kicker">Experience</p>
          <h2>Roles and impact</h2>
        </div>
        <div className="CV-role-list">
          {experienceItems.map((item) => (
            <article className="CV-role-card" key={item.company}>
              <div className="CV-role-header">
                <div>
                  <h3>{item.company}</h3>
                  <p className="CV-role-title">{item.role}</p>
                </div>
                <p className="CV-role-dates">{item.dates}</p>
              </div>

              <p className="CV-role-summary">{item.summary}</p>

              <ul className="CV-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="CV-tag-list">
                {item.stack.map((tech) => (
                  <span className="CV-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <div className="Section-heading">
          <p className="section-kicker">Selected project work</p>
          <h2>How I stay current outside commercial systems</h2>
        </div>
        <p className="CV-project-note">
          Outside work I keep building in React, Blazor, React Native, Go,
          computer vision experiments, real-time multiplayer apps, and small
          deployed services.
        </p>
        <div className="CV-project-links no-print">
          <Link className="button button-secondary" to="/projects">
            Browse projects
          </Link>
          <a
            className="button button-ghost"
            href={personalDetails.github}
            rel="noreferrer"
            target="_blank"
          >
            GitHub profile
          </a>
        </div>
      </section>

      <section className="section-card">
        <div className="Section-heading">
          <p className="section-kicker">Education</p>
          <h2>{education.title}</h2>
        </div>
        <p className="CV-education-detail">
          {education.organisation} | {education.dates}
        </p>
      </section>
    </div>
  );
}

export default CV;
