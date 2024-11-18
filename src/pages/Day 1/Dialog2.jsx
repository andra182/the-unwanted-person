import React, { useState } from "react";
import { useGameContext } from "../../context/GameContext";
import PageDialog from "../PageDialog";
import SplashScreen from "../../components/SplashScreen";

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
        NamaKarakter="Aira"
        Dialog={`Aira: “Mengapa kau mau berbicara dengan ku?”`}
        gambarkarakter="/Tocil.png"
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
        background="/bg.png"
        alert={feedback}
        status={{
          kesenangan,
          pertemanan,
        }}
        onCompleteNavigate="/day1/dialog2"
      />
    </>
  );
};

export default Dialog2;
