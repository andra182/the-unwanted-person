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

  const paragraphs = [
    "Di daerah di Malang tepatnya di daerah Cemoro Kandang, hiduplah seorang perempuan cantik bernama Risa.",
    "Risa adalah seorang pelajar yang baru memasuki SMA di Sekolah Menengah Atas Negeri 1 CemoroKandang.",
    "Ia hidup sederhana bersama kedua orang tuanya. Ia merupakan seorang pindahan dari Kota Jakarta ke Malang, dikarenakan satu dan beberapa hal.",
    "Risa memasuki lingkungan baru di SMA dengan harapan bisa menjalani masa remaja yang penuh warna.",
    "Namun, sejak hari pertama, Risa merasa ada atmosfer yang aneh. Dia melihat seorang gadis duduk sendirian di pojok taman sekolah, wajahnya murung dan pandangannya kosong.",
    "Gadis itu bernama Aira. Risa merasa terpanggil untuk mengenalnya.",
  ];

  const handleOptionA = () => {
    setSelectedOption("A");
    updateKesenangan(80);
    updatePertemanan(80);
    updateFeedback("Aira merasa dihargai. Hubungan membaik.");
  };

  const handleOptionB = () => {
    setSelectedOption("B");
    updateKesenangan(5);
    updatePertemanan(5);
    updateFeedback("Hati Aira perlahan terbuka. Ada kemajuan.");
  };

  const handleOptionC = () => {
    setSelectedOption("C");
    updateKesenangan(2);
    updatePertemanan(2);
    updateFeedback(
      "Aira tetap skeptis, tetapi bersedia mendengar lebih banyak."
    );
  };

  return (
    <>
      {showOpening ? (
        <OpeningStory
          onComplete={handleOpeningComplete}
          paragraphs={paragraphs}
          endText="Cerita Dimulai."
        />
      ) : (
        <div>
          <SplashScreen day={"Hari Pertama"} />
          {!complete ? (
            <PageDialog
              key={dialog}
              Audio={"/audio/day1.mp3"}
              Dialog={dialog}
              DelayTyping={4500}
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
              DelayTyping={1000}
              Audio={"/audio/day1.mp3"}
              gambarkarakter={[
                "/DAY1/risadialog1.png",
                "/DAY1/airadialog1.png",
              ]}
              opsi={[
                {
                  text: "Aku cuma merasa kamu butuh teman. Kenalin, nama aku Risa.",
                  action: handleOptionA,
                  type: "positive",
                },
                {
                  text: "Gapapa aku coba mau ngobrol saja sama kamu. Nama aku Risa.",
                  action: handleOptionB,
                  type: "positive",
                },
                {
                  text: "Aku cuma ingin bicara, tidak ada maksud lain. Kenalin ya, aku Risa.",
                  action: handleOptionC,
                  type: "neutral",
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
