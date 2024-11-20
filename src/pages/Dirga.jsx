import React, { useState } from "react";
import { useGameContext } from "../context/GameContext";

const Dirga = () => {
  const {
    updateKesenangan,
    updatePertemanan,
    updateFeedback,
    feedback,
    kesenangan,
    pertemanan,
  } = useGameContext();

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionA = () => {
    setSelectedOption("A");
    updateKesenangan(8);
    updatePertemanan(7);
    updateFeedback("Aira sedikit terbuka. Hubungan berkembang positif.");
  };

  const handleOptionB = () => {
    setSelectedOption("B");
    updateKesenangan(5);
    updatePertemanan(3);
    updateFeedback(
      "Aira tetap diam, tetapi tidak menjauh. Perkembangan lambat."
    );
  };

  const handleOptionC = () => {
    setSelectedOption("C");
    updateKesenangan(6);
    updatePertemanan(5);
    updateFeedback("Aira masih terdiam tetapi hati Aira mulai terbuka.");
  };

  // Fungsi untuk debugging
  const debugValues = () => {

    updateKesenangan(4)
    updatePertemanan(10)
  };

  return (
    <>
      <p>{kesenangan}</p>
      <p>{pertemanan}</p>
      {/* Tombol Debugging */}
      <button onClick={debugValues} className="debug-button">
        Debug Kesenangan dan Pertemanan
      </button>
    </>
  );
};

export default Dirga;
