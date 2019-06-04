/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Player } from 'video-react';
// import KivaVideo from '../videos/kiva.mp4';
import VideoImage from '../videos/videoImage.png';
import '../css/video.css';


class Video extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h1 className="VideoTitle">
                  What’s life at Kiva like? This
                </h1>
                {/* <video width="100%" height="100%" controls>
                  <source
                    src={KivaVideo}
                    type="video/mp4"
                  />
                  <source src="movie.ogg" type="video/ogg" />
                </video> */}
                {/* <iframe src="https://player.vimeo.com/video/339484799" width="100%" height="560" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe> */}

                <Player
                  poster={VideoImage}
                  src="https://vimeo.com/339484799"
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
