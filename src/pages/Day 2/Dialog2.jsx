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
    updateKesenangan(10);
    updatePertemanan(10);
    updateFeedback(
      "Aira merasakan dukungan. Mulai percaya pada Risa sepenuhnya."
    );
  };

  const handleOptionB = () => {
    setSelectedOption("B");
    updateKesenangan(8);
    updatePertemanan(8);
    updateFeedback(
      "Aira mempertimbangkan untuk berbicara lebih banyak, tetapi tetap berhati-hati."
    );
  };

  const handleOptionC = () => {
    setSelectedOption("C");
    updateKesenangan(3);
    updatePertemanan(2);
    updateFeedback("Aira merasa perkataan Risa sangat menusuk.");
  };

  return (
    <>
      <PageDialog
        NamaKarakter="..."
        Dialog={`Sebentar, mengapa kau mau berbicara dengan ku?`}
        gambarkarakter="/DAY1/airadialog1.png"
        opsi={[
          {
            text: "Aku akan membantumu, apa pun yang terjadi.",
            action: handleOptionA,
            type: true, // Positif
          },
          {
            text: "Yang sabar ya Ra, Inget kalau tuhan gabakal ngasih ujian yang diluar batas kemampuan hambanya. Ada aku kok disini kamu santai aja",
            action: handleOptionB,
            type: true, // Positif
          },
          {
            text: "Oh pantes kamu jadi kayak gini ya.",
            action: handleOptionC,
            type: false, // Negatif
          },
        ]}
        hari="Hari Kedua"
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
