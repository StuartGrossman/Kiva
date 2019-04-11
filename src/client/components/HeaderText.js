import React, { Component } from 'react';

/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line react/prefer-stateless-function
class HeaderText extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <p className="compressedLineHeight">{this.props.desc}</p>
      </div>
    );
  }
}


export default HeaderText;
