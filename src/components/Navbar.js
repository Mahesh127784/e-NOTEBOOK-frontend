import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  let location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top opacity-75">
      <div className="container-fluid"> 
        <Link className="navbar-brand" to="/">
          <b>eNOTEBOOK</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                } `}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                } `}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        {!localStorage.getItem("token") ? (
          <div>
            {" "}
            <Link to="/login" className="btn btn-primary mx-1" role="button">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary mx-1" role="button">
              signup
            </Link>
          </div>
        ) : (
          <Link
            to="/login"
            onClick={() => localStorage.removeItem("token")}
            className="btn btn-primary mx-1"
            role="button"
          >
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
}
