import React, { useEffect, useState } from "react";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";

import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  // code to toggle/show navbar
  const [active, setActive] = useState("navbar");
  const showNav = () => {
    setActive("navbar active-navbar");
  };

  const removeNav = () => {
    setActive("navbar");
  };

  // scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="about">
      <section className="navbar-section">
        <div className="header">
          <div
            className="logo-div"
            onClick={() => {
              navigate("/home");
            }}
          >
            <h1
              className="logo"
              style={{ color: "#213555", cursor: "pointer" }}
            >
              Harmony Manor
            </h1>
          </div>
          <div className={active}>
            <ul className="nav-lists flex">
              <li
                className="nav-item"
                onClick={() => {
                  navigate("/home");
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="nav-link">Home</div>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  navigate("/about");
                }}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="nav-link"
                  style={{ color: "#213555", cursor: "pointer" }}
                >
                  About
                </div>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  navigate("/offers");
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="nav-link">Offers</div>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  navigate("/reviews");
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="nav-link">Reviews</div>
              </li>
              <div className="header-btns flex">
                <button
                  className="btn book-now"
                  onClick={() => {
                    navigate("/reservation");
                  }}
                >
                  Book Now
                </button>
              </div>
            </ul>
            <div onClick={removeNav} className="close-navbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>
          <div onClick={showNav} className="toggle-navbar">
            <TbGridDots className="icon" />
          </div>
        </div>
      </section>

      <section className="about-section" style={{ marginBottom: 80 }}>
        <div className="heading">
          <div className="sec-title">
            <h1 className="title" data-aos="fade-down" data-aos-duration="2000">
              About Page
            </h1>
            <p data-aos="fade-down">
              Unveiling the essence of our hotel, where luxury meets
              personalized comfort in every detail
            </p>
          </div>
        </div>
        <div
          className="section container"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p className="first-p">
            Welcome to our distinguished hotel, a sanctuary of elegance and
            comfort in the heart of Bali, Indonesia. From the moment you enter
            our doors, you are enveloped in an atmosphere of refined luxury. The
            lobby, adorned with contemporary artwork and stylish furnishings,
            sets the tone for a sophisticated stay. Our commitment to providing
            an exceptional guest experience begins here, where a warm and
            attentive staff awaits to ensure your every need is met.
          </p>
          <br />
          <p>
            Our hotel proudly boasts a diverse selection of thoughtfully
            designed room types, each a haven of comfort and style. Whether you
            seek a tranquil escape in a deluxe room, a romantic retreat in a
            suite with panoramic city views, or spacious family-friendly
            accommodations, our rooms are meticulously appointed to cater to the
            unique preferences of every traveler. Modern amenities, plush
            bedding, and a tasteful aesthetic come together to create an
            environment that invites relaxation and rejuvenation.
          </p>
          <br />
          <p>
            Step beyond the comfort of your room, and you'll discover a host of
            amenities designed to enrich your stay. Indulge your taste buds at
            our renowned dining establishments, where culinary delights crafted
            by skilled chefs await. Our poolside oasis provides the perfect
            setting to unwind and soak up the sun, while our spa and wellness
            center offers a tranquil escape for rejuvenation. Whether you're
            here for business or leisure, our hotel provides a seamless blend of
            convenience and indulgence.
          </p>
          <br />
          <p>
            As a hub of social and cultural activity, our hotel is not just a
            place to stay but a destination in itself. Our vibrant events and
            meeting spaces cater to gatherings of all sizes, from intimate
            business meetings to grand celebrations. Immerse yourself in the
            local scene with our concierge service, providing insider tips on
            the best attractions, dining, and entertainment in the area.
          </p>
          <br />
          <p>
            At the heart of our philosophy is a dedication to exceeding
            expectations and creating lasting memories for our guests. With a
            legacy of hospitality, our hotel invites you to experience a world
            where every detail is curated to perfection, ensuring an
            unforgettable stay that lingers in your memories long after you
            depart.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
