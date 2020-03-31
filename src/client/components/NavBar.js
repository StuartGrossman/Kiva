/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../images/kiva_logo_green.png";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light navBarHeight navPadding">
        <img src={logo} alt="logo" className="logo" />
        <button
          className="navbar-toggler nav-bar-button"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="nav-button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse nav-height navBarCustomMargin"
          id="navbarSupportedContent"
        >
          <div>
            <ul className="nav navbar-nav navbar-right">
              <span
                className="nav-item"
                onClick={() => {
                  document.getElementById("nav-button").click();
                }}
              >
                <Link style={{ textDecoration: "none" }} to="/">
                  <li
                    className="nav-link aTagHighlight "
                    style={{ fontSize: "20px", marginRight: "50px" }}
                  >
                    Careers
                  </li>
                </Link>
              </span>
              <span
                className="nav-item"
                onClick={() => {
                  document.getElementById("nav-button").click();
                }}
              >
                <Link style={{ textDecoration: "none" }} to="/fellowships">
                  <li
                    className="nav-link aTagHighlight"
                    style={{ fontSize: "20px" }}
                  >
                    Fellowships
                  </li>
                </Link>
              </span>
              <span
                className="nav-item"
              >
                <li
                  className="nav-link aTagHighlight"
                  style={{ fontSize: "20px" }}
                >
                  <a
                    href="https://www.kiva.org/work-with-us/internvolunteers"
                    target="_blank"
                    className="navbar-light navbar-nav nav-link nav-item-last"
                    style={{ display: 'inline'}}
                  >
                    Internships
                  </a>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
