// src/pages/Day1.js
import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AudioPlayer from "../../components/AudioPlayer";

const Day1 = () => {
  return (
    <div>
      <AudioPlayer src="/audio/day1.mp3"/>
      <Outlet />
    </div>
  );
};

export default Day1;
