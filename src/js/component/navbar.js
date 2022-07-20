import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark opacity-75 pt-0 pb-0">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          <img class="logo" width="60px" src="https://img.icons8.com/color/344/star-wars.png" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link
              className="nav-link active text-white"
              aria-current="page"
              to="/"
            >
              Home
            </Link>
            <Link className="nav-link text-white" to="/people">
              Characters
            </Link>
            <Link className="nav-link text-white" to="/planets">
              Planets
            </Link>
            <Link className="nav-link text-white" to="/vehicles">
              Vehicles
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
