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
  const [pathCerita, setPathCerita] = useState(0);

  // Fungsi untuk update kesenangan dan pertemanan
  const updateKesenangan = (value) => {
    setKesenangan((prevKesenangan) => {
      const newKesenangan = Math.max(0, Math.min(100, prevKesenangan + value));
      console.log("Kesenangan updated:", newKesenangan);
      return newKesenangan;
    });
  };

  const updatePertemanan = (value) => {
    setPertemanan((prevPertemanan) => {
      const newPertemanan = Math.max(0, Math.min(100, prevPertemanan + value));
      console.log("Pertemanan updated:", newPertemanan);
      return newPertemanan;
    });
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
