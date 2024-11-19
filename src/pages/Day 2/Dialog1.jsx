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
    `Beberapa siswa mencemooh Aira saat di kantin`
  );

  const handleOpeningComplete = () => {
    setShowOpening(false); // Menyembunyikan OpeningStory dan menampilkan dialog pembuka
  };

  const whenComplete = () => {
    setTimeout(() => {
      setComplete(true);
      setDialog(`Dasar Yatim Piatu. Anak orang gabener nih haha`);
    }, 2500);
  };

  const handleOptionA = () => {
    setSelectedOption("A");
    updateKesenangan(7);
    updatePertemanan(8);
    updateFeedback(
      "Risa menunjukkan keberanian, meskipun risiko meningkat. Beberapa siswa mulai menghargai tindakannya."
    );
  };

  const handleOptionB = () => {
    setSelectedOption("B");
    updateKesenangan(6);
    updatePertemanan(7);
    updateFeedback(
      "Efek minim, tapi ada tanda bahwa Risa ingin membantu. Situasi tidak berubah drastis."
    );
  };

  const handleOptionC = () => {
    setSelectedOption("C");
    updateKesenangan(4);
    updatePertemanan(3);
    updateFeedback(
      "Pesan ini dapat membuat Aira merasa tidak berharga dan sendirian."
    );
  };

  return (
    <>
      <div>
        <SplashScreen day={"Hari Kedua"} />
        {!complete ? (
          <PageDialog
            key={dialog}
            Dialog={dialog}
            hari="Hari Kedua"
            background="/DAY2/bgdialog1.jpg"
            status={{
              kesenangan,
              pertemanan,
            }}
            onComplete={() => whenComplete()}
          />
        ) : (
          <PageDialog
            NamaKarakter="Sirkel Sebelah"
            Dialog={dialog}
            gambarkarakter={["/DAY1/airadialog1.png"]}
            opsi={[
              {
                text: "Berhenti bersikap seperti itu! Tidak ada yang pantas diperlakukan begini.",
                action: handleOptionA,
                type: "positive", // Positif
              },
              {
                text: "Tolong berhenti, ini tidak benar.",
                action: handleOptionB,
                type: "positive", // Positif
              },
              {
                text: "Abaikan mereka, Aira.",
                action: handleOptionC,
                type: "negative", // Negatif
              },
            ]}
            hari="Hari Kedua"
            background="/DAY2/bgdialog1.jpg"
            // alert={feedback}
            status={{
              kesenangan,
              pertemanan,
            }}
            onCompleteNavigate="/day2/dialog2"
          />
        )}
      </div>
    </>
  );
};

export default Dialog1;
