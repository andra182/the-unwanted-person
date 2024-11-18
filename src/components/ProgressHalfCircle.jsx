// src/components/SemiCircleProgress.js
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SemiCircleProgress = ({ value, title, color }) => {
  return (
    <div className="flex flex-col  pb-14 pt-5 px-5 bg-[#1E1E1E]/90">
      <h3 className="text-lg font-semibold  text-white mb-2">{title}</h3>
      <div
        style={{
          width: "75px", // Atur ukuran lingkaran
          height: "35px", // Setengah tinggi dari lingkaran
        }}
      >
        <CircularProgressbar
          value={value}
          maxValue={100}
          text={`${value}%`}
          styles={buildStyles({
            rotation: 0.5, // Putar ke 180 derajat
            strokeLinecap: "round",
            textSize: "16px",
            pathColor: color,
            textColor: color,
            trailColor: "#eee",
          })}
        />
      </div>
    </div>
  );
};

export default SemiCircleProgress;
