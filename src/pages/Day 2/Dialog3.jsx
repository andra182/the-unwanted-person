import React, { useState } from "react";
import { useGameContext } from "../../context/GameContext";
import PageDialog from "../PageDialog";

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
        NamaKarakter="..."
        Dialog={`(menunjukkan rasa tidak percaya diri) “Tidak ada gunanya mencoba berteman.”`}
        gambarkarakter={["/DAY1/airadialog1.png"]}
        opsi={[
          {
            text: "Kita semua layak mendapatkan teman.",
            action: handleOptionA,
            type: "positive", // Positif
          },
          {
            text: "Itu tidak benar, teman pasti akan membantu jika ada kesulitan.",
            action: handleOptionB,
            type: "positive", // Positif
          },
          {
            text: "Tidak kok, berteman itu banyak manfaatnya!",
            action: handleOptionC,
            type: "neutral", // Netral
          },
        ]}
        hari="Hari Pertama"
        background="/DAY1/bgdialog1.jpg"
        alert={feedback}
        status={{
          kesenangan,
          pertemanan,
        }}
        onCompleteNavigate="/day1/dialog4"
      />
    </>
  );
};

export default Dialog3;
