// src/pages/Dialog1.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGameContext } from "../context/GameContext";
import StatusBar from "../components/StatusBar";

const Dialog1 = () => {
  const {
    updateKesenangan,
    updatePertemanan,
    updateFeedback,
    feedback,
    kesenangan,
    pertemanan,
  } = useGameContext();

  // Menambahkan state untuk memilih opsi
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionA = () => {
    setSelectedOption("A");
    updateKesenangan(10);
    updatePertemanan(5);
    updateFeedback("Aira merasa dihargai. Hubungan membaik.");
  };

  const handleOptionB = () => {
    setSelectedOption("B");
    updateKesenangan(5);
    updatePertemanan(3);
    updateFeedback("Hati Aira perlahan terbuka. Ada kemajuan.");
  };

  const handleOptionC = () => {
    setSelectedOption("C");
    updateKesenangan(-5);
    updatePertemanan(1);
    updateFeedback(
      "Aira tetap skeptis, tetapi bersedia mendengar lebih banyak."
    );
  };

  return (
    <div>
      <StatusBar kesenangan={kesenangan} pertemanan={pertemanan} />
      <h2>Dialog 1</h2>
      <p>Aira: "Kamu siapa? Kenapa ingin duduk di sini?"</p>
      <div>
        <button onClick={handleOptionA} disabled={selectedOption !== null}>
          Opsi A: Aku cuma merasa kamu butuh teman.
        </button>
        <button onClick={handleOptionB} disabled={selectedOption !== null}>
          Opsi B: Gapapa aku coba mau ngobrol saja sama kamu, Kenalin nama ku
          Risa
        </button>
        <button onClick={handleOptionC} disabled={selectedOption !== null}>
          Opsi C: Aku cuma ingin bicara, tidak ada maksud lain.
        </button>
      </div>

      {/* Feedback */}
      <p>
        <strong>Feedback: </strong>
        {feedback}
      </p>

      {/* Link menuju Dialog2 */}
      <Link to="/day2/dialog2">
        <button disabled={selectedOption === null}>Next Dialog</button>
      </Link>
    </div>
  );
};

export default Dialog1;
