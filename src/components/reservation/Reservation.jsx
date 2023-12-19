import React, { useState } from "react";
import "./reservation.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";

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
            <h1 className="title">Reservation Page</h1>
            <p>
              Reserve your retreat with ease and discover unmatched comfort in
              every booking
            </p>
          </div>
        </div>
        <div className="reserve section container">
          <form action="">
            <div className="form first">
              <div className="details personal">
                <span className="title">Personal Details</span>

                <div className="fields">
                  <div className="input-field">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="startDate">Start date</label>
                    <input
                      id="startDate"
                      type="date"
                      placeholder="Enter start date"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="occupation">Number of days</label>
                    <input
                      id="occupation"
                      type="number"
                      placeholder="Enter number of days"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* row 2 */}
                  <div className="input-field">
                    <label htmlFor="mobileNumber">Mobile number</label>
                    <input
                      id="mobileNumber"
                      type="text"
                      placeholder="Enter mobile number"
                      required
                    />
                  </div>

                  <div className="input-field">
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
                  <button className="btn">Reserve now!</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Reservation;
