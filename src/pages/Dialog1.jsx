import React, { useState } from "react";
import { useGameContext } from "../context/GameContext";
import PageDialog from "./PageDialog";

const Dialog1 = () => {
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
    updateFeedback("Aira tetap skeptis, tetapi bersedia mendengar lebih banyak.");
  };

  return (
    <>
    <PageDialog
      NamaKarakter="Aira"
      Dialog="Kamu siapa? Kenapa ingin duduk di sini?"
      gambarkarakter="/Tocil.png"
      opsi={[
        { text: "Aku cuma merasa kamu butuh teman.", action: handleOptionA, type: true },
        { text: "Gapapa aku coba mau ngobrol saja sama kamu.", action: handleOptionB, type: true },
        { text: "Aku cuma ingin bicara, tidak ada maksud lain.", action: handleOptionC, type: false },
      ]}
      hari="Hari Pertama"
      background="/bg.png"
      alert={feedback}
    />
    </>
  );
};

export default Dialog1;
