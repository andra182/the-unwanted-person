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
        NamaKarakter="Aira"
        Dialog={`(menunjukkan rasa tidak percaya diri) “Tidak ada gunanya mencoba berteman.”
`}
        gambarkarakter={["/Tocil.png"]}
        opsi={[
          {
            text: "Kita semua layak mendapatkan teman.",
            action: handleOptionA,
            type: true, // Positif
          },
          {
            text: "Itu tidak benar, teman pasti akan membantu jika ada kesulitan.",
            action: handleOptionB,
            type: true, // Positif
          },
          {
            text: "Tidak kok, berteman itu banyak manfaatnya!",
            action: handleOptionC,
            type: true, // Netral
          },
        ]}
        hari="Hari Pertama"
        background="/bg.png"
        alert={feedback}
        status={{
          kesenangan,
          pertemanan,
        }}
        onCompleteNavigate="/day1/dialog3"
      />
    </>
  );
};

export default Dialog3;
