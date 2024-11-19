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
    pathCerita,
    feedback,
    kesenangan,
    pertemanan,
  } = useGameContext();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOpening, setShowOpening] = useState(true);
  const [complete, setComplete] = useState(false);
  const [dialog, setDialog] = useState(
    `Di saat jam istirahat Risa dan Aira sedang memakan bekal mereka berdua di taman sekolah. Tiba tiba ada sekumpulan perempuan yang menghampiri mereka.Ternyata itu adalah The Ladies!`
  );

  const handleOpeningComplete = () => {
    setShowOpening(false); // Menyembunyikan OpeningStory dan menampilkan dialog pembuka
  };

  const whenComplete = () => {
    setTimeout(() => {
      setComplete(true);
      setDialog(`Eh liat guys ada anak tukang mabok Ahahahah.`);
    }, 2500);
  };

  const paragraphs = [
    "Di sekolah mereka ada sebuah geng wanita terkenal yang biasa disebut The Ladies.",
    "Mereka berisikan 4 orang kaya yang memiliki muka di sekolah tetapi mereka mempunyai sifat yang buruk.",
    "Mereka di ketuai oleh Dian, Sang perempuan cantik nan kaya raya dan juga teman masa kecil Aira.",
    "Dian adalah sosok arogan, sombong, dan suka mencemooh orang orang yang dia anggap berada di bawahnya.",
    "Teman Dian yaitu Nina, Siska, dan Maya terus mencari cara untuk mempermalukan Aira.",
    "Mereka kerap menghina latar belakang keluarganya di depan umum Karena Dian adalah teman masa kecil Aira, jadi ia sudah tahu latar belakang keluarga Aira.",
    "Oleh karena itu juga ia sering membully Aira dengan cara menghasut teman teman nya untuk membully Aira juga.",
  ];

  const positivePath = () => {
    const handleOptionA = () => {
      setSelectedOption("A");
      updateKesenangan(8);
      updatePertemanan(9);
      updateFeedback("Aira merasa tenang.");
    };

    const handleOptionB = () => {
      setSelectedOption("B");
      updateKesenangan(10);
      updatePertemanan(10);
      updateFeedback("Aira semakin positif karena merasa dilindungi.");
    };

    const handleOptionC = () => {
      setSelectedOption("C");
      updateKesenangan(6);
      updatePertemanan(7);
      updateFeedback(
        "Aira nampak tenang, tetapi itu terlalu lemah untuk sebuah peringatan. Tetapi itu baik-baik saja."
      );
    };
    return (
      <PageDialog
        NamaKarakter="The Ladies"
        Dialog={dialog}
        gambarkarakter={["/DAY1/airadialog1.png"]}
        opsi={[
          {
            text: "Apa maksudmu berkata seperti itu ke teman ku?!",
            action: handleOptionA,
            type: "positive", // Positif
          },
          {
            text: "Hey apa yang kau katakan. Tarik lagi ucapan mu!",
            action: handleOptionB,
            type: "positive", // Positif
          },
          {
            text: "Hei tidak baik berkata seperti itu.",
            action: handleOptionC,
            type: "neutral", // Netral
          },
        ]}
        hari="Hari Ketiga"
        background="/DAY2/bgdialog1.jpg"
        // alert={feedback}
        status={{
          kesenangan,
          pertemanan,
        }}
        onCompleteNavigate="/day3/dialog2"
      />
    );
  };

  const negativePath = () => {
    const handleOptionA = () => {
      setSelectedOption("A");
      updateKesenangan(2);
      updatePertemanan(3);
      updateFeedback("Aira semakin tidak percaya diri karena perkataan Risa.");
    };

    const handleOptionB = () => {
      setSelectedOption("B");
      updateKesenangan(4);
      updatePertemanan(5);
      updateFeedback(
        "Meskipun Risa mendukung Aira, tetapi ini hanya membuat Aira lebih sadar akan ketidakadilan yang dihadapinya."
      );
    };

    const handleOptionC = () => {
      setSelectedOption("C");
      updateKesenangan(6);
      updatePertemanan(7);
      updateFeedback("Risa mencoba menyinggung balik Dian dengan halus.");
    };

    return (
      <PageDialog
        NamaKarakter="The Ladies"
        Dialog={dialog}
        gambarkarakter={["/DAY1/airadialog1.png"]}
        opsi={[
          {
            text: "Sudah Ra gausah dibales",
            action: handleOptionA,
            type: "negative", // Negatif
          },
          {
            text: "Sabar ya ra udah gausa liatin mereka. Aku di sini untukmu.",
            action: handleOptionB,
            type: "negative", // Negatif
          },
          {
            text: "Hei, Kalau itu yang kamu sebut lucu, aku kasihan sama selera humormu.",
            action: handleOptionC,
            type: "neutral", // Netral
          },
        ]}
        hari="Hari Ketiga"
        background="/DAY2/bgdialog1.jpg"
        // alert={feedback}
        status={{
          kesenangan,
          pertemanan,
        }}
        onCompleteNavigate="/day3/dialog2"
      />
    );
  };

  return (
    <>
      {showOpening ? (
        <OpeningStory
          onComplete={() => handleOpeningComplete()}
          paragraphs={paragraphs}
        />
      ) : (
        <div>
          <SplashScreen day={"Hari Ketiga"} />
          {!complete ? (
            <PageDialog
              key={dialog}
              Dialog={dialog}
              DelayTyping={4500}
              hari="Hari Ketiga"
              background="/DAY2/bgdialog1.jpg"
              status={{
                kesenangan,
                pertemanan,
              }}
              onComplete={() => whenComplete()}
            />
          ) : (
            <div className="">
              {pathCerita ? positivePath() : negativePath()}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Dialog1;
