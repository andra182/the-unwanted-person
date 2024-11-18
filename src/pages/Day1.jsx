// src/pages/Day1.js
import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import OpeningStory from "./OpeningStory";

const Day1 = () => {
  const [showOpening, setShowOpening] = useState(true);

  const handleOpeningComplete = () => {
    setShowOpening(false); // Menyembunyikan OpeningStory dan menampilkan Outlet
  };

  return (
    <div>
      <Navigate to="/day1/dialog1" />
      {showOpening ? (
        <OpeningStory onComplete={handleOpeningComplete} />
      ) : (
        <Outlet /> // Render dialog berdasarkan route
      )}
    </div>
  );
};

export default Day1;
