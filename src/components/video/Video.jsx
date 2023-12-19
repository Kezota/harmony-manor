import React from "react";
import "./video.css";

import img1 from "../../images/room1.jpeg";
import img2 from "../../images/room2.jpeg";
import img3 from "../../images/room3.jpeg";
import video from "../../images/video.mp4";

const Video = () => {
  return (
    <section className="video-section section container">
      <div className="sec-container">
        <div className="video-card container">
          <div className="card-content grid">
            <div className="card-text">
              <h2>Discover the Essence of our Hotel in Stunning Video</h2>
              <p>
                Experience the epitome of convenience and elegance at Harmony
                Manor, where our meticulously designed facilities cater to your
                every need
              </p>
            </div>
            <div className="card-video">
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
