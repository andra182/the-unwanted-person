// src/pages/Day1.js
import React from "react";
import { Outlet } from "react-router-dom";
import StatusBar from "../components/StatusBar";

const Day1 = () => {
  return (
    <div>
      <h1>Day 1</h1>
      <p>Ini adalah hari pertama, dialog dimulai!</p>
      <Outlet /> {/* Render dialog berdasarkan route */}
    </div>
  );
};

export default Day1;
