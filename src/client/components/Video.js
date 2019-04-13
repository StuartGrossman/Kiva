/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Player } from 'video-react';
import SliderImage from '../images/image1.svg';

// import VideoSrc from '../videos/temp_movie.mp4';
import '../css/video.css';


class Video extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-2 col-md-1 col-sm-1 col-xs-1 " />
          <div className="col-lg-8 col-md-10 col-sm-10 col-xs-10">
            {/* <video width="100%" height="100%" controls>
              <source src="./src/client/videos/temp_movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
            </video> */}
            <Player
              playsInline
              poster={SliderImage}
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
          </div>
          <div className="col-lg-2 col-md-1 col-sm-1 col-xs-1 " />
        </div>
      </div>
    );
  }
}

export default Video;
