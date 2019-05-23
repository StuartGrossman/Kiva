/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import logo from '../images/kiva_logo_green.png';

class NavBar extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} alt="logo" className="logo" />
        <button
          className="navbar-toggler nav-bar-button"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />

        </button>

        <div className="collapse navbar-collapse nav-height" id="navbarSupportedContent">
          <div>
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <a className="nav-link aTagHighlight" style={{ fontSize: '20px' }} onClick={this.props.changeToCareersPage}>Careers </a>
              </li>
              <li className="nav-item">
                <a className="nav-link aTagHighlight" style={{ fontSize: '20px' }} onClick={this.props.changeToFellowshipPage}>Fellowship</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
