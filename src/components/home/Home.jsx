import React, { useEffect } from "react";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";

import { MdOutlineFreeBreakfast } from "react-icons/md";
import { IoWifi } from "react-icons/io5";
import { TbAirConditioning } from "react-icons/tb";
import { LuRefrigerator } from "react-icons/lu";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="home">
      <div className="sec-container container">
        <div className="home-text">
          <h1 className="title" data-aos="fade-up">
            elegant escape at harmony manor
          </h1>
          <p className="sub-title" data-aos-duration="2000" data-aos="fade-up">
            Where timeless charm, exquisite surroundings, and warm hospitality
            create an oasis of serenity
          </p>
        </div>

        <div className="home-card grid">
          <div className="benefits">
            <div className="benefit" data-aos="fade-up">
              <IoWifi className="icon wifi" />
              <p>Wi-Fi</p>
            </div>
            <div
              className="benefit"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <MdOutlineFreeBreakfast className="icon breakfast" />
              <p>Breakfast</p>
            </div>
            <div
              className="benefit"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <TbAirConditioning className="icon ac" />
              <p>AC</p>
            </div>
            <div
              className="benefit"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <LuRefrigerator className="icon minibar" />
              <p>Minibar</p>
            </div>
          </div>
          <div className="check-in-out">
            <div
              className="check-in"
              data-aos="fade-right"
              data-aos-duration="2500"
            >
              <h3>Check-In</h3>
              <p>Start: 09.00</p>
              <p>End: 12.00</p>
            </div>
            <div
              className="check-out"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <h3>Check-Out</h3>
              <p>Start: 13.00</p>
              <p>End: 16.00</p>
            </div>
          </div>
        </div>

        {/* <div className="home-card grid">
          <div className="location-div">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Dream Destination" />
          </div>
          <div className="dist-div">
            <label htmlFor="distance">Distance</label>
            <input type="text" placeholder="11/Meters" />
          </div>
          <div className="price-div">
            <label htmlFor="price">Location</label>
            <input type="text" placeholder="$140-$500" />
          </div>
          <button className="btn">Search</button>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
