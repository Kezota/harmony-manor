import React from "react";
import "./app.css";
import Index from "./components/index/Index";
import Reservation from "./components/reservation/Reservation";
import About from "./components/about/About";
import Offers from "./components/offers/Offers";
import Reviews from "./components/reviews/Reviews";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="home" element={<Index />} />
        <Route path="about" element={<About />} />
        <Route path="offers" element={<Offers />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
