import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";
import navbarData from "../Data/NavbarData";
import { socialIcons } from "../Data/NavbarData";

function Navbar() {
  return (
    <>
      <div id="navbar">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="logo" />
            </NavLink>
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            >
              <span>
                <FaBars />
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {navbarData.map((data) => (
                  <li className="nav-item" key={data.id}>
                    <NavLink
                      exact
                      className="nav-link"
                      activeClassName="menu-active"
                      to={data.url}
                    >
                      {data.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* ------- sidebar---------  */}

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasWithBackdrop"
        aria-labelledby="offcanvasWithBackdropLabel"
      >
        <div className="offcanvas-header">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body text-center">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navbarData.map((data) => (
              <li className="nav-item" key={data.id}>
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="menu-active"
                  to={data.url}
                >
                  {data.text}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* social icons */}
          <ul className="list-inline">
            {socialIcons.map((data) => (
              <li className="list-inline-item mx-2" key={data.id}>
                <a href={data.url} target={data.target}>
                  {data.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ------- sidebar---------  */}
    </>
  );
}

export default Navbar;
