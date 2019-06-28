/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class VolenteerOp extends Component {
  render() {
    return (
      <div>
        <div style={{ marginBottom: '100px' }}>
          {/* <hr /> */}
          {/* <h1 className="Volunteer-Op">Volunteer Opportunities</h1> */}
          <span className="Volunteer-Text">
          We’re also currently looking for people to help remotely on our editing and translation teams. Or if leadership is more your style, lead a group of online volunteers! 
          {/* kiva.org (https://www.kiva.org/work-with-us/reviewers ) */}
          &nbsp;You can find more information at <a href="https://www.kiva.org/work-with-us/reviewers" target="_blank">Kiva.org/reviewers</a>
          </span>
   
        </div>
      </div>
    );
  }
}

export default VolenteerOp;
