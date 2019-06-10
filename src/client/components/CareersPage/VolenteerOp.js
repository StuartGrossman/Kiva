/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class VolenteerOp extends Component {
  render() {
    return (
      <div>
        <div style={{ marginBottom: '100px' }}>
          <h1 className="Volunteer-Op">Volunteer Opportunities</h1>
          <span className="Volunteer-Text">
            Want to make an impact in your spare time? Volunteer with us! We’re
            currently looking for people to help remotely on our editing and
            translation teams. Or if leadership is more your style, lead a group
            of online volunteers!
          </span>
        </div>
      </div>
    );
  }
}

export default VolenteerOp;
