// src/pages/Day1.js
import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import OpeningStory from "../OpeningStory";
import SplashScreen from "../../components/SplashScreen";

const Day1 = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Day1;
