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
  const [showDialog, setShowDialog] = useState(1);
  const [dialog, setDialog] = useState(
    `Aira terlihat terguncang di sudut sekolah.`
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
    updateKesenangan(2);
    updatePertemanan(1);
    updateFeedback("Aira merasa perkataan Risa sangat menusuk.");
  };
  if (showDialog === 1) {
    return (
      <>
        <PageDialog
          key={dialog}
          Dialog={dialog}
          hari="Hari Kedua"
          gambarkarakter={["/DAY2/airadialog2-1.png"]}
          background="/DAY2/bgdialog2.jpg"
          status={{
            kesenangan,
            pertemanan,
          }}
          onComplete={() =>
            whenComplete(
              "Apakah yang dikatakan mereka benar Aira? kalau kamu sudah tidak tinggal bersama orang tua mu lagi?",
              2
            )
          }
        />
      </>
    );
  } else if (showDialog === 2) {
    return (
      <>
        <PageDialog
          key={dialog}
          Dialog={dialog}
          NamaKarakter={"Risa"}
          hari="Hari Kedua"
          gambarkarakter={["/DAY2/risadialog2-1.png"]}
          background="/DAY2/bgdialog2.jpg"
          status={{
            kesenangan,
            pertemanan,
          }}
          onComplete={() =>
            whenComplete(
              "Iya Ris, aku sudah ga tinggal sama kedua orang tuaku lagi. Semenjak kecil aku telah ditinggal oleh ibuku dan ayahku baru-baru ini masuk penjara karena terlibat dalam suatu kasus. Aku sekarang hanya tinggal bersama Bibi & Nenek ku. Aku sedih Ris, Kalau aku bisa memilih aku juga tidak mau hidup seperti ini..",
              3
            )
          }
        />
      </>
    );
  } else if (showDialog === 3) {
    return (
      <PageDialog
        NamaKarakter="Aira"
        Dialog={dialog}
        gambarkarakter={["/DAY2/airadialog2-2.png"]}
        opsi={[
          {
            text: "Aku akan membantumu, apa pun yang terjadi.",
            action: handleOptionA,
            type: "positive", // Positif
          },
          {
            text: "Yang sabar ya Ra, inget kalau tuhan gabakal ngasih ujian yang diluar batas kemampuan hambanya. Ada aku kok disini kamu santai aja.",
            action: handleOptionB,
            type: "positive", // Positif
          },
          {
            text: "Oh pantes kamu jadi kayak gini ya.",
            action: handleOptionC,
            type: "negative", // Negatif
          },
        ]}
        hari="Hari Kedua"
        background="/DAY2/bgdialog2.jpg"
        // alert={feedback}
        status={{
          kesenangan,
          pertemanan,
        }}
        onCompleteNavigate="/day2/dialog3"
      />
    );
  }
};

export default Dialog2;
