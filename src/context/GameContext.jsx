// src/context/GameContext.js
import React, { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
  const [kesenangan, setKesenangan] = useState(50); // Status kesenangan (range 0-100)
  const [pertemanan, setPertemanan] = useState(50); // Status pertemanan (range 0-100)
  const [feedback, setFeedback] = useState(""); // Feedback yang muncul setelah pilihan
  const [pathCerita, setPathCerita] = useState(false);

  // Fungsi untuk update kesenangan dan pertemanan
  const updateKesenangan = (value) => {
    setKesenangan((prevKesenangan) =>
      Math.max(0, Math.min(100, prevKesenangan + value))
    );
  };

  const updatePertemanan = (value) => {
    setPertemanan((prevPertemanan) =>
      Math.max(0, Math.min(100, prevPertemanan + value))
    );
  };

  // Fungsi untuk mengubah feedback
  const updateFeedback = (newFeedback) => {
    setFeedback(newFeedback);
  };

  // Fungsi untuk mengubah path cerita
  const updatePathCerita = (newPathCerita) => {
    setPathCerita(newPathCerita);
  };

  return (
    <GameContext.Provider
      value={{
        kesenangan,
        pertemanan,
        feedback,
        pathCerita,
        updateKesenangan,
        updatePertemanan,
        updateFeedback,
        updatePathCerita,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
