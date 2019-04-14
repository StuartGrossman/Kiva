/* eslint-disable react/no-unused-state */
/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';

class NavBar extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    console.log(props);
    // this.showFellowshipPage = this.showFellowshipPage.bind(this);
    // this.showCareersPage = this.showCareersPage.bind(this);
  }

  showCareers = () => {
    // this.setParentState({ showCareersPage: true })
    // this.props.showFellowshipPage = false;
    // this.props.showCareersPage = true;
  }

  showFellowShip = () => {
    // this.props.showFellowShip = true;
    // this.props.showCareersPage = false;
  }

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
                <a className="nav-link" style={{ fontSize: '20px' }} onClick={this.showCareers()}>Careers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ fontSize: '20px' }} onClick={this.showFellowShip()}>Fellowship</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
