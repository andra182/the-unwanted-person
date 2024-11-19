import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../../context/GameContext";
import SplashScreen from "../../components/SplashScreen";
import PageDialog from "../PageDialog";
import OpeningStory from "../OpeningStory";

const Dialog1 = () => {
  const navigate = useNavigate();
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
  const [complete, setComplete] = useState(false);
  const [dialog, setDialog] = useState(
    `Di taman sekolah ada seorang wanita yang sedang duduk merenungi sesuatu yang sepertinya berat.`
  );

  const handleOpeningComplete = () => {
    setShowOpening(false); // Menyembunyikan OpeningStory dan menampilkan dialog pembuka
  };

  const whenComplete = () => {
    setTimeout(() => {
      setComplete(true);
      setDialog(`Kamu siapa? Kenapa ingin duduk di sini?`);
    }, 2500);
    console.log("Dialog updated:", `Kamu siapa? Kenapa ingin duduk di sini?`);
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

  return (
    <>
      {showOpening ? (
        <OpeningStory onComplete={handleOpeningComplete} />
      ) : (
        <div>
          <SplashScreen day={"Hari Pertama"} />
          {!complete ? (
            <PageDialog
              key={dialog}
              Dialog={dialog}
              
              hari="Hari Pertama"
              background="/DAY1/bgdialog1.jpg"
              status={{
                kesenangan,
                pertemanan,
              }}
              
              onComplete={() => whenComplete()}
            />
          ) : (
            <PageDialog
              NamaKarakter="..."
              Dialog={dialog}
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
                  type: false,
                },
              ]}
              hari="Hari Pertama"
              background="/DAY1/bgdialog1.jpg"
              // alert={feedback}
              status={{
                kesenangan,
                pertemanan,
              }}
              onCompleteNavigate="/day1/dialog2"
            />
          )}
        </div>
      )}
    </>
  );
};

export default Dialog1;
