import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../../context/GameContext";
import SplashScreen from "../../components/SplashScreen";
import PageDialog from "../PageDialog";
import OpeningStory from "../OpeningStory";

const Dialog1 = () => {
  const navigate = useNavigate(); // Tambahkan useNavigate
  const {
    updateKesenangan,
    updatePertemanan,
    updateFeedback,
    feedback,
    kesenangan,
    pertemanan,
  } = useGameContext();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOpening, setShowOpening] = useState(true);

  const handleOpeningComplete = () => {
    setShowOpening(false); // Menyembunyikan OpeningStory dan menampilkan Outlet
  };

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

  const handleComplete = () => {
    navigate("/day1/dialog2"); // Navigasi ke halaman berikutnya
  };

  return (
    <>
      {showOpening ? (
        <OpeningStory onComplete={handleOpeningComplete} />
      ) : (
        <div>
          <SplashScreen day={"Hari Pertama"} />
          <PageDialog
            NamaKarakter="Aira"
            Dialog={`Kamu siapa? Kenapa ingin duduk di sini?`}
            gambarkarakter={["/DAY1/airadialog1.png"]}
            opsi={[
              {
                text: "Aku cuma merasa kamu butuh teman. Kenalin, nama aku Risa.",
                action: handleOptionA,
                type: true,
              },
              {
                text: "Gapapa aku coba mau ngobrol saja sama kamu. Nama aku Risa.",
                action: handleOptionB,
                type: true,
              },
              {
                text: "Aku cuma ingin bicara, tidak ada maksud lain. Kenalin ya, aku Risa.",
                action: handleOptionC,
                type: true,
              },
            ]}
            hari="Hari Pertama"
            background="/DAY1/bgdialog1.jpg"
            alert={feedback}
            status={{
              kesenangan,
              pertemanan,
            }}
            onCompleteNavigate="/day1/dialog2"
          />
        </div>
      )}
    </>
  );
};

export default Dialog1;
