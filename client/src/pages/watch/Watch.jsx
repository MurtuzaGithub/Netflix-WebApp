import React, { useRef, useEffect } from 'react';
import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Watch() {
  // Get the location and movie information from React Router
  const location = useLocation();
  const { movie } = location.state;
  // Create a reference to the video element
  const videoRef = useRef(null);

  // Function to skip video playback by a specified number of seconds
  const handleSkip = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  // Function to disable the context menu (right-click menu) on the video element
  const disableContextMenu = (videoElement) => {
    videoElement.addEventListener("contextmenu", (e) => {
      e.preventDefault(); // Prevent the default context menu
    });
  };

  // Use the useEffect hook to run code after rendering
  useEffect(() => {
    if (videoRef.current) {
      // Call the disableContextMenu function to prevent right-clicking
      disableContextMenu(videoRef.current);
    }
  }, []);

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      {movie ? (
        <div className="video-container">
          <video
            id="video-player"
            className="video"
            autoPlay
            controls
            controlsList="nodownload" // Disable the download option
            src={movie.video} // Set the video source from the movie data
            ref={videoRef} // Attach the videoRef to the video element
          />
          <div className="skip-controls">
            <button onClick={() => handleSkip(-30)}>Skip Back 30s</button>
            <button onClick={() => handleSkip(10)}>Skip Forward 10s</button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}



//<ReactPlayer url ="https://vod-progressive.akamaized.net/exp=1624452918~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2400%2F14%2F362003850%2F1486625955.mp4~hmac=d6f829e7bb83f1ee6a28047d00aa2c1083c8fe5036c8084a4adf1c3903085856/vimeo-prod-skyfire-std-us/01/2400/14/362003850/1486625955.mp4" />

{/*import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Watch() {
  const location = useLocation();
  const { movie } = location.state;
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>

      <div className="video-container" onClick={playVideo}>
        <video
          className="video"
          autoPlay
          controls
          src={movie.video}
          ref={videoRef} // Ref to the video element
        />
        <div className="play-button">Click to Play</div>
      </div>
    </div>
  );
}*/}



