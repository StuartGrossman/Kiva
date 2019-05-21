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
      <div className="container-fluid">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 className="VideoTitle">Video Headline FPO</h1>
                {/* <video width="100%" height="100%" controls>
              <source src="./src/client/videos/temp_movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
            </video> */}
                <Player
                  playsInline
                  poster={SliderImage}
                  src="https://vimeo.com/user41370063/review/333230823/35cd0f98ab"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
