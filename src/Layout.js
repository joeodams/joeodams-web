import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: " #e9e1e1",
      }}
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          backgroundColor: "#e9e1e1",
        }}
      >
        {location.pathname !== "/" && (
          <Link
            variant="link"
            to="/"
            className="Back-link"
            // style={{
            //   fontSize: "50px",
            //   textDecoration: "none",
            //   padding: "4vh",
            // }}
          >
            ←
          </Link>
        )}
        <div
          style={{
            padding: "4vh",
            marginLeft: "auto",
            textAlign: "center",
            marginBottom: "auto",
            marginTop: "auto",
          }}
        >
          <Link
            to="https://www.linkedin.com/in/joe-odams-327333a4/"
            variant="link"
            className="Home-link"
            target="_blank"
            style={{ marginLeft: "0px !important" }}
          >
            LinkedIn
          </Link>
          <Link
            Link="link"
            className="Home-link"
            to="https://github.com/joeodams"
            target="_blank"
          >
            Github
          </Link>
          <Link variant="link" className="Home-link" to="/CV">
            CV
          </Link>
          <Link variant="link" className="Home-link" to="/projects">
            Projects
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
