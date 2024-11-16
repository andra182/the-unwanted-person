// src/pages/Dialog2.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGameContext } from "../context/GameContext";
import StatusBar from "../components/StatusBar";

const Dialog2 = () => {
  const { updateKesenangan, updatePertemanan, updateFeedback, feedback } =
    useGameContext();

  // Menambahkan state untuk memilih opsi
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionA = () => {
    setSelectedOption("A");
    updateKesenangan(10);
    updatePertemanan(5);
    updateFeedback(
      "Aira merasakan dukungan. Mulai percaya pada Risa sepenuhnya."
    );
  };

  const handleOptionB = () => {
    setSelectedOption("B");
    updateKesenangan(5);
    updatePertemanan(3);
    updateFeedback(
      "Aira mempertimbangkan untuk berbicara lebih banyak, tetapi tetap berhati-hati."
    );
  };

  const handleOptionC = () => {
    setSelectedOption("C");
    updateKesenangan(-5);
    updatePertemanan(1);
    updateFeedback(
      "Aira merasa disarankan untuk menyerah. Motivasi semakin lemah."
    );
  };

  return (
    <div>
      <StatusBar />
      <h2>Dialog 2</h2>
      <p>Aira terlihat terguncang di sudut sekolah. Risa bertanya...</p>
      <div>
        <button onClick={handleOptionA} disabled={selectedOption !== null}>
          Opsi A: Aku akan membantumu, apa pun yang terjadi.
        </button>
        <button onClick={handleOptionB} disabled={selectedOption !== null}>
          Opsi B: Yang sabar ya Ra, Inget kalau tuhan gabakal ngasih ujian yang
          diluar batas kemampuan hambanya.
        </button>
        <button onClick={handleOptionC} disabled={selectedOption !== null}>
          Opsi C: Mungkin kamu harus menjauh dari mereka saja.
        </button>
      </div>

      {/* Feedback */}
      <p>
        <strong>Feedback: </strong>
        {feedback}
      </p>

      {/* Link menuju Dialog1 */}
      <Link to="/day1/dialog1">
        <button disabled={selectedOption === null}>Back to Dialog1</button>
      </Link>
    </div>
  );
};

export default Dialog2;
