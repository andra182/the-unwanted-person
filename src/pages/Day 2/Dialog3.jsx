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
  const [showDialog, setShowDialog] = useState(1);
  const [dialog, setDialog] = useState(
    `Bel pulang sekolah pun berbunyi, Risa dan Aira pulang ke rumah nya masing masing.`
  );

  const whenComplete = (param, nextDialog) => {
    setTimeout(() => {
      setShowDialog(nextDialog);
      setDialog(param);
    }, 2500);
    console.log("Dialog updated:", `Kamu siapa? Kenapa ingin duduk di sini?`);
  };

  const handleOptionA = () => {
    setSelectedOption("A");
    updateKesenangan(10);
    updatePertemanan(10);
    updateFeedback("Tekad Risa tumbuh lebih kuat. Hubungan semakin erat.");
  };

  const handleOptionB = () => {
    setSelectedOption("B");
    updateKesenangan(7);
    updatePertemanan(6);
    updateFeedback(
      "Risa tetap mendukung tetapi dengan rasa takut. Ini membuat bantuan terhambat."
    );
  };

  const handleOptionC = () => {
    setSelectedOption("C");
    updateKesenangan(3);
    updatePertemanan(2);
    updateFeedback(
      "Risa mulai meragukan perannya, membuat Aira merasa tidak ada yang mendukung."
    );
  };

  if (showDialog === 1) {
    return (
      <>
        <PageDialog
          key={dialog}
          Dialog={dialog}
          hari="Hari Kedua"
          gambarkarakter={[
            "/DAY2/risadialog2-1.png",
            "/DAY2/airadialog2-2.png",
          ]}
          background="/DAY2/bgdialog2.jpg"
          status={{
            kesenangan,
            pertemanan,
          }}
          onComplete={() =>
            whenComplete("Risa merenung di rumah tentang situasi Aira", 2)
          }
        />
      </>
    );
  } else if (showDialog === 2) {
    return (
      <>
        <PageDialog
          Dialog={dialog}
          gambarkarakter={["/DAY2/risadialog3.png"]}
          opsi={[
            {
              text: "Aku tidak bisa membiarkan dia menghadapi ini sendirian.",
              action: handleOptionA,
              type: true, // Positif
            },
            {
              text: "Aku harus berhati-hati, tetapi tetap di sisinya.",
              action: handleOptionB,
              type: true, // Positif
            },
            {
              text: "Mungkin ini terlalu sulit untukku. Apa aku abaikan saja ya Dia?",
              action: handleOptionC,
              type: false, // Negatif
            },
          ]}
          hari="Hari Kedua"
          background="/DAY1/bgdialog1.jpg"
          alert={feedback}
          status={{
            kesenangan,
            pertemanan,
          }}
          onCompleteNavigate="/day3/dialog1"
        />
      </>
    );
  }
};

export default Dialog3;
