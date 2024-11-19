import React, { useState } from "react";
import { useGameContext } from "../../context/GameContext";
import PageDialog from "../PageDialog";

const Dialog2 = () => {
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

  return (
    <>
      <PageDialog
        NamaKarakter="..."
        Dialog={`Sebentar, mengapa kau mau berbicara dengan ku?`}
        gambarkarakter="/DAY1/airadialog1.png"
        opsi={[
          {
            text: "Sepertinya kamu butuh orang untuk bercerita.",
            action: handleOptionA,
            type: true, // Positif
          },
          {
            text: "Gapapa Aku bingung aja kenapa ada orang yang sendiri sementara ini baru masuk sekolah.",
            action: handleOptionB,
            type: true, // Netral
          },
          {
            text: "Gaada salahnya kan kalo kita berteman?",
            action: handleOptionC,
            type: true, // Positif
          },
        ]}
        hari="Hari Pertama"
        background="/DAY1/bgdialog1.jpg"
        // alert={feedback}
        status={{
          kesenangan,
          pertemanan,
        }}
        onCompleteNavigate="/day1/dialog3"
      />
    </>
  );
};

export default Dialog2;
