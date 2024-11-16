// src/pages/StatusBar.js
import React from "react";
import { useGameContext } from "../context/GameContext";

const StatusBar = () => {
  const { kesenangan, pertemanan } = useGameContext();

  return (
    <div>
      <p>
        <strong>Kesenangan:</strong> {kesenangan}
      </p>
      <p>
        <strong>Pertemanan:</strong> {pertemanan}
      </p>
    </div>
  );
};

export default StatusBar;
