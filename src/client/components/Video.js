/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import VideoSrc from '../videos/temp_movie.mp4';

class Video extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 " />
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <video width="100%" height="100%" controls>
              <source src="./src/client/videos/temp_movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
            </video>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 " />
        </div>
      </div>
    );
  }
}

export default Video;