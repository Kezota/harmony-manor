import React from "react";
import "./facilities.css";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";

import img1 from "../../images/facility1.png";
import img2 from "../../images/facility2.png";
import img3 from "../../images/facility3.png";
import img4 from "../../images/facility4.jpg";

const Facilites = () => {
  return (
    <section className="facilities section container">
      <div className="sec-container">
        <div className="sec-header flex">
          <div className="text-div">
            <h1 className="sec-title">Hotel's Facilites</h1>
          </div>
        </div>

        <div className="main-content">
          <div className="facilities-div grid">
            <div className="facility">
              <div className="img-div">
                <img src={img1} alt="Image Name" />
              </div>
              <div className="text-div">
                <h3>24-Hour Café</h3>
                <p>
                  Indulge in our 24-hour cafe's delectable dishes and delightful
                  ambiance for satisfaction.
                </p>
              </div>
            </div>
            <div className="facility">
              <div className="img-div hangout-place">
                <img src={img3} alt="Image Name" />
              </div>
              <div className="text-div">
                <h3>Hangout Place</h3>
                <p>
                  The perfect chill zone: Cozy atmosphere, good company, and
                  enjoyable entertainment you
                </p>
              </div>
            </div>
            <div className="facility">
              <div className="img-div">
                <img src={img2} alt="Image Name" />
              </div>
              <div className="text-div">
                <h3>Meeting Room</h3>
                <p>
                  Efficiency meets comfort in our thoughtfully designed meeting
                  space, perfect for focused discussions
                </p>
              </div>
            </div>
            <div className="facility">
              <div className="img-div swimming-pool">
                <img src={img4} alt="Image Name" />
              </div>
              <div className="text-div">
                <h3>Swimming Pool</h3>
                <p>
                  Dive into luxury and serenity at our exclusive hotel pool,
                  where crystal-clear waters meet unrivaled relaxation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilites;
