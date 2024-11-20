import React, { useState } from "react";
import { useGameContext } from "../../context/GameContext";
import PageDialog from "../PageDialog";
import AudioPlayer from "../../components/AudioPlayer";
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
      <AudioPlayer src="/audio/day1.mp3" />
      <PageDialog
        NamaKarakter="..."
        Audio={"/audio/day1.mp4"}
        Dialog={`Sebentar, mengapa kau mau berbicara dengan ku?`}
        DelayTyping={1}
        gambarkarakter={["/DAY1/airadialog1.png", "/DAY1/airadialog1.png"]}
        opsi={[
          {
            text: "Sepertinya kamu butuh orang untuk bercerita.",
            action: handleOptionA,
            type: "negative",
          },
          {
            text: "Gapapa Aku bingung aja kenapa ada orang yang sendiri sementara ini baru masuk sekolah.",
            action: handleOptionB,
            type: "neutral", // Netral
          },
          {
            text: "Gaada salahnya kan kalo kita berteman?",
            action: handleOptionC,
            type: "positive", // Positif
          },
        ]}
        hari="Hari Pertama"
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
