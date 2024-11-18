// src/components/SemiCircleProgress.js
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SemiCircleProgress = ({ value, title, color }) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div
        style={{
          width: "150px", // Atur ukuran lingkaran
          height: "75px", // Setengah tinggi dari lingkaran
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
