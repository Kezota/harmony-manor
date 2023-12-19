import React from "react";
import "./book.css";
import { useNavigate } from "react-router-dom";

const Book = () => {
  const navigate = useNavigate();

  return (
    <section className="book container section">
      <div className="sec-container">
        <div className="text-div">
          <h2 className="title">Reserve Your Stay Instantly!</h2>
          <p>
            Seize the opportunity to secure your dream getaway instantly with
            our hassle-free reservation process
          </p>
        </div>
        <button
          className="btn"
          onClick={() => {
            navigate("/reservation");
          }}
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Book;
