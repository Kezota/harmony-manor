import React, { useEffect, useState } from "react";
import "./reservation.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Reservation = () => {
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

  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };
  const closePopup = () => {
    setPopupOpen(false);
    navigate("/home");
  };

  return (
    <div className="reservation">
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
                <div className="nav-link">About</div>
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

      <section className="reservation-section">
        <div className="heading">
          <div className="sec-title">
            <h1 className="title" data-aos="fade-down" data-aos-duration="2000">
              Reservation Page
            </h1>
            <p data-aos="fade-down">
              Reserve your retreat with ease and discover unmatched comfort in
              every booking
            </p>
          </div>
        </div>
        <div className="reserve section container">
          <div className="form">
            <div className="form first">
              <div className="details personal">
                <span
                  className="title"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  Book Details
                </span>

                <div className="fields">
                  <div
                    className="input-field"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div
                    className="input-field"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <label htmlFor="startDate">Start date</label>
                    <input
                      id="startDate"
                      type="date"
                      placeholder="Enter start date"
                      required
                    />
                  </div>

                  <div
                    className="input-field"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <label htmlFor="occupation">Number of days</label>
                    <input
                      id="occupation"
                      type="number"
                      placeholder="Enter number of days"
                      required
                    />
                  </div>

                  {/* row 2 */}
                  <div
                    className="input-field"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div
                    className="input-field"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    <label htmlFor="mobileNumber">Mobile number</label>
                    <input
                      id="mobileNumber"
                      type="text"
                      placeholder="Enter mobile number"
                      required
                    />
                  </div>

                  <div
                    className="input-field"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    <div class="custom-select">
                      <label htmlFor="roomType">Room type</label>
                      <select>
                        <option value="">Standard Room</option>
                        <option value="">Deluxe Room</option>
                        <option value="">Family Room</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="reserve-now">
                  <button
                    className="btn"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    onClick={openPopup}
                  >
                    Reserve now!
                  </button>
                  {isPopupOpen && (
                    <div className="popup">
                      <div className="popup-content">
                        <span className="close" onClick={closePopup}>
                          &times;
                        </span>
                        <h2>Reservation is Made!</h2>
                        <p>Your reservation has been successfully made.</p>
                        <p>We will contact you.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Reservation;
