// src/pages/Day1.js
import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import OpeningStory from "../OpeningStory";

const Day1 = () => {
  return (
    <div>
      <Outlet /> // Render dialog berdasarkan route
    </div>
  );
};

export default Day1;
