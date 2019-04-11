import React, { Component } from 'react';

class NavBar extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h2>
          Kiva
        </h2>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />

        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div>
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item active">
                <a className="nav-link" href="/">Careers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Fellowship</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
