// src/pages/Day2.js
import React from "react";
import { Outlet } from "react-router-dom";

const Day2 = () => {
  return (
    <div>
      <h1>Day 2</h1>
      <p>Ini adalah hari kedua, lebih banyak dialog yang menantimu!</p>
      <Outlet /> {/* Render dialog berdasarkan route */}
    </div>
  );
};

export default Day2;
