import React, { useState } from "react";
import "./offers.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { MdKingBed } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { IoMdPeople } from "react-icons/io";
import { PiForkKnifeFill } from "react-icons/pi";

import Footer from "../footer/Footer";
import Offer from "../offer/Offer";

import img1 from "../../images/room1.jpeg";
import img2 from "../../images/room2.jpeg";
import img3 from "../../images/room3.jpeg";
import img4 from "../../images/room4.avif";
import img5 from "../../images/room5.avif";
import img6 from "../../images/room6.avif";
import { useNavigate } from "react-router-dom";

const OffersData = [
  {
    id: 1,
    imgSrc: img3,
    roomType: "STANDARD ROOM",
    roomsLeft: 21,
    price: 360,
    facilities: {
      beds: "1 bed",
      people: "2-3 People",
      breakfast: "2 People",
    },
  },
  {
    id: 2,
    imgSrc: img1,
    roomType: "DELUXE ROOM",
    roomsLeft: 11,
    price: 460,
    facilities: {
      beds: "1 bed",
      people: "2-3 People",
      breakfast: "2 People",
    },
  },
  {
    id: 3,
    imgSrc: img2,
    roomType: "FAMILY ROOM",
    roomsLeft: 8,
    price: 550,
    facilities: {
      beds: "2 beds",
      people: "4-6 People",
      breakfast: "4 People",
    },
  },
  {
    id: 3,
    imgSrc: img4,
    roomType: "STANDARD ROOM",
    roomsLeft: 10,
    price: 460,
    facilities: {
      beds: "2 beds",
      people: "2-4 People",
      breakfast: "2 People",
    },
  },
  {
    id: 3,
    imgSrc: img5,
    roomType: "DELUXE ROOM",
    roomsLeft: 8,
    price: 560,
    facilities: {
      beds: "2 beds",
      people: "2-4 People",
      breakfast: "2 People",
    },
  },
  {
    id: 3,
    imgSrc: img6,
    roomType: "FAMILY ROOM",
    roomsLeft: 4,
    price: 950,
    facilities: {
      beds: "4 beds",
      people: "6-10 People",
      breakfast: "6 People",
    },
  },
];

const Offers = () => {
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
    <div className="offers">
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
                <div className="nav-link" style={{ color: "#213555" }}>
                  Offers
                </div>
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

      <section className="offers-section">
        <div className="heading">
          <div className="sec-title">
            <h1 className="title">Offers Page</h1>
            <p>
              Explore a range of meticulously curated hotel room types, each
              designed to elevate your stay with a perfect blend of comfort
            </p>
          </div>
        </div>

        <section className="offer container section">
          <div className="sec-container">
            <div className="main-content grid">
              {OffersData.map(
                ({ id, imgSrc, roomType, roomsLeft, price, facilities }) => {
                  return (
                    <div className="single-offer" style={{ marginTop: 40 }}>
                      <div className="dest-image">
                        <img src={imgSrc} alt="Image Name" />

                        <span className="rooms-left">
                          {roomsLeft} rooms left
                        </span>
                      </div>

                      <div className="offer-body">
                        <div className="room-type flex">
                          <h4>{roomType}</h4>
                        </div>

                        <div className="amenities flex">
                          <div className="single-amenity flex">
                            <MdKingBed className="icon" />
                            <small>{facilities.beds}</small>
                          </div>
                          <div className="single-amenity flex">
                            <IoMdPeople className="icon" />
                            <small>{facilities.people}</small>
                          </div>
                          <div className="single-amenity flex">
                            <PiForkKnifeFill className="icon" />
                            <small>{facilities.breakfast}</small>
                          </div>
                        </div>

                        <div className="price flex">Rp{price}.000</div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <div className="see-more">
              <button
                className="btn flex"
                onClick={() => {
                  navigate("/reservation");
                }}
              >
                Book Now
                <BsArrowRightShort className="icon" />
              </button>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default Offers;
