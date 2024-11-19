import React, { useState } from "react";
import { useGameContext } from "../../context/GameContext";
import PageDialog from "../PageDialog";
import { useNavigate } from "react-router-dom";

const Dialog3 = () => {
  const {
    updateKesenangan,
    updatePertemanan,
    updateFeedback,
    feedback,
    kesenangan,
    pertemanan,
  } = useGameContext();

  const [selectedOption, setSelectedOption] = useState(null);

  const navigate = useNavigate();

  const handleOptionA = () => {
    setSelectedOption("A");
    updateKesenangan(9);
    updatePertemanan(8);
    updateFeedback("Aira mulai melihat harapan kecil. Rasa percaya meningkat.");
  };

  const handleOptionB = () => {
    setSelectedOption("B");
    updateKesenangan(10);
    updatePertemanan(9);
    updateFeedback("Aira termakan ucapan Risa dan mulai membuka hatinya.");
  };

  const handleOptionC = () => {
    setSelectedOption("C");
    updateKesenangan(7);
    updatePertemanan(6);
    updateFeedback(
      "Aira merasa bingung, tetapi tidak menjauh. Potensi masih ada."
    );
  };

  return (
    <>
      <PageDialog
        NamaKarakter="Aira"
        Dialog={`Maaf ya kalau aku kesannya pesimis. Karena aku tidak pernah berteman sebelumnya. Kenalin juga nama ku Aira`}
        gambarkarakter={["/DAY1/airadialog4.png"]}
        hari="Hari Pertama"
        background="/DAY1/bgdialog1.jpg"
        alert={feedback}
        status={{
          kesenangan,
          pertemanan,
        }}
        onComplete={() => {
          setTimeout(() => {
            navigate("/day2/dialog1");
          }, 2500);
        }}
      />
    </>
  );
};

export default Dialog3;
