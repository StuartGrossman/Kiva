/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Player } from 'video-react';
// import KivaVideo from '../videos/kivaVideo.mp4';
// import VideoImage from '../videos/videoImage.png';
// import '../css/video.css';
import '../../css/plyr.css';
import Plyr from 'react-plyr';
class Video extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div>
            <div className="row" style={{ marginBottom: '92px', marginTop: '60px' }}>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h1 className="VideoTitle">
                  What’s life at Kiva like? This: 
                  {/* This : */}
                </h1>
                <Plyr
                  type="vimeo"
                  videoId="333230823"
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
