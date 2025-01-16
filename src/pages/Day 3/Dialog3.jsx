import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../../context/GameContext";
import PageDialog from "../PageDialog";
import OpeningStory from "../OpeningStory";

const Dialog3 = () => {
  const navigate = useNavigate();
  const {
    updateKesenangan,
    updatePertemanan,
    updateFeedback,
    kesenangan,
    pertemanan,
    pathCerita,
  } = useGameContext();

  const dialogByPathCerita = () => {
    if (pathCerita === 0) {
      return "Guys ayo kita pergi dulu, kita akan membalasnya nanti.";
    } else if (pathCerita === 1) {
      return "Guys gimana nih?? Ada guru BK yang nyamperin kita.";
    }
  };

  const [dialog, setDialog] = useState(dialogByPathCerita());
  const [showDialog, setShowDialog] = useState(1);
  const paragraphs_positive = [
    "Dian dan the Ladies pun pergi tanpa meninggalkan satu patah kata pun karena tidak bisa membalas Risa.",
    "Coming Soon.",
  ];

  const paragraphs_negative = [
    "Dikarenakan adu mulut antara Risa dan Dian sangat kencang sampai hampir satu sekolah melihatnya, akhirnya ada seorang guru BK yang menghampiri mereka berdua dan menasehatinya dan menyuruh mereka untuk ke Ruang BK besok.",
  ];

  const paragraphs =
    pathCerita === 0 || pathCerita === 2
      ? paragraphs_positive
      : paragraphs_negative;

  const whenComplete = (param, nextDialog) => {
    setTimeout(() => {
      setShowDialog(nextDialog);
      setDialog(param);
    }, 2500);
  };

  const positivePath = () => {
    return (
      <PageDialog
        key={dialog}
        NamaKarakter="Dian"
        Dialog={dialog}
        gambarkarakter={[
          "/DAY3/risadanairadialog2.png",
          "/DAY3/diandialog2.png",
        ]}
        hari="Hari Ketiga"
        background="/DAY2/bgdialog1.jpg"
        status={{
          kesenangan,
          pertemanan,
        }}
        onComplete={() => {
          whenComplete(
            `Dian dan the Ladies pun pergi tanpa meninggalkan satu patah kata pun karena tidak bisa membalas Risa.`,
            2
          );
        }}
      />
    );
  };

  const negativePath = () => {
    return (
      <PageDialog
        NamaKarakter="Dian"
        key={dialog}
        Dialog={dialog}
        gambarkarakter={["/DAY1/airadialog1.png"]}
        hari="Hari Ketiga"
        background="/DAY2/bgdialog1.jpg"
        status={{
          kesenangan,
          pertemanan,
        }}
        onComplete={() => {
          whenComplete(
            `Dikarenakan adu mulut antara Risa dan Dian sangat kencang sampai hampir satu sekolah melihatnya, akhirnya ada seorang guru BK yang menghampiri mereka berdua dan menasehatinya dan menyuruh mereka untuk ke Ruang BK besok.`,
            2
          );
        }}
      />
    );
  };

  const endDialog = () => {
    return (
      <OpeningStory
        paragraphs={paragraphs}
        endText="Coming soon"
        onComplete={() => navigate("/credit")}
      />
    );
  };

  if (showDialog === 1) {
    if (pathCerita === 0 || pathCerita === 2) {
      return <div>{positivePath()}</div>;
    } else if (pathCerita === 1) {
      return <div>{negativePath()}</div>;
    }
  } else if (showDialog === 2) {
    return <div>{endDialog()}</div>;
  }
};

export default Dialog3;
