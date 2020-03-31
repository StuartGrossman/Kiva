/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

class VolenteerTitle extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h2
              className="Open-Positions"
              style={{ marginTop: "50px", marginBottom: "25px" }}
            >
              Volunteer Opportunities
            </h2>
            <h3 className="JobCatDes" style={{ marginBottom: "25px" }}>
              We’re the team focused on building and engaging a global ecosystem
              of smart, motivated, inspiring interns, fellows and volunteers to
              help Kiva change the world. Read more about our&nbsp;
              <a href="https://www.careers.kiva.org/fellowships" target="_blank">Fellowship</a>&nbsp;and&nbsp;
              <a href="https://www.kiva.org/work-with-us/internvolunteers" target="_blank">Internship</a>&nbsp;programs.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default VolenteerTitle;
