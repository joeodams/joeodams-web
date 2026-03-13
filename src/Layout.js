import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";
import { personalDetails } from "./siteContent";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/cv", label: "CV" },
  { to: "/projects", label: "Projects" },
];

const Layout = () => {
  return (
    <div className="Site-shell">
      <header className="Site-header no-print">
        <div className="Site-nav">
          <NavLink to="/" className="Site-brand">
            <span className="Site-brand-title">{personalDetails.name}</span>
            <span className="Site-brand-subtitle">{personalDetails.role}</span>
          </NavLink>

          <div className="Site-nav-groups">
            <nav className="Site-links" aria-label="Primary">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  className={({ isActive }) =>
                    `Site-link${isActive ? " Site-link-active" : ""}`
                  }
                  end={item.end}
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="Site-social">
              <a
                className="Site-social-link"
                href={personalDetails.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="Site-social-link"
                href={personalDetails.github}
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="Site-social-link"
                href={`mailto:${personalDetails.email}`}
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="Site-main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
