import React, { useState } from "react";
import { useGameContext } from "../../context/GameContext";
import PageDialog from "../PageDialog";
import { useNavigate } from "react-router-dom";
import AudioPlayer from "../../components/AudioPlayer";

const Dialog4 = () => {
  const { kesenangan, pertemanan } = useGameContext();

  const [selectedOption, setSelectedOption] = useState(null);

  const navigate = useNavigate();

  return (
    <>
      <AudioPlayer src="/audio/day1.mp3"/>
      <PageDialog
        NamaKarakter="Aira"
        Audio={"/audio/day1.mp3"}
        Dialog={`Maaf ya kalau aku kesannya pesimis. Karena aku tidak pernah berteman sebelumnya. Kenalin juga nama ku Aira`}
        gambarkarakter={["/DAY1/airadialog4.png"]}
        hari="Hari Pertama"
        background="/DAY1/bgdialog1.jpg"
        // alert={feedback}
        status={{
          kesenangan,
          pertemanan,
        }}
        onComplete={() => {
          setTimeout(() => {
            navigate("/day2/dialog1");
          }, 2500);
        }}
      />
    </>
  );
};

export default Dialog4;
