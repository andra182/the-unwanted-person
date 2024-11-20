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

  const handleOpeningComplete = () => {
    setShowOpening(false); // Menyembunyikan OpeningStory dan menampilkan dialog pembuka
  };

  const dialogByPathCerita = () => {
    if (pathCerita === 0) {
      return "";
    } else if (pathCerita === 1) {
      return "Kenapa kalian beradu mulut kemarin?! kedengaran sampai ruang guru loh!";
    } else if (pathCerita === 2) {
      return "";
    }
  };
  const [dialog, setDialog] = useState(dialogByPathCerita());
  const [showDialog, setShowDialog] = useState(1);

  const whenComplete = (param, nextDialog) => {
    setTimeout(() => {
      setShowDialog(nextDialog);
      setDialog(param);
    }, 2500);
  };

  const paragraphs_positive = [
    "Konflik antara Risa & Aira melawan The Ladies semakin memanas tetapi untuk sekarang mereka hanya bertukar ocehan bila bertemu.",
  ];

  const paragraphs_neutral = [
    "Kubu Risa & Aira semakin sering cekcok jika mereka bertemu. Ini mungkin ini hanya perlakuan sementara. Tetapi kita tidak tahu bagaimana kedepannya.",
  ];

  const paragraphs_negative = [
    "Dikarenakan adu mulut antara Risa dan Dian sangat kencang sampai hampir satu sekolah melihatnya, akhirnya ada seorang guru BK yang menghampiri mereka berdua dan menasehatinya dan menyuruh mereka untuk ke Ruang BK besok.",
  ];

  if (pathCerita === 0) {
    var paragraphs = paragraphs_positive;
  } else if (pathCerita === 1) {
    var paragraphs = paragraphs_negative;
  } else if (pathCerita === 2) {
    var paragraphs = paragraphs_neutral;
  }

  const positivePath = () => {
    const handleOptionA = () => {
      updateKesenangan(8);
      updatePertemanan(9);
      updateFeedback("Hati Aira lebih tenang karena ada yang membelanya.");
    };

    const handleOptionB = () => {
      updateKesenangan(4);
      updatePertemanan(3);
      updateFeedback(
        "Kamu tersulut emosi! ini akan memperkeruh situasi kedepannya."
      );
    };

    const handleOptionC = () => {
      updateKesenangan(8);
      updatePertemanan(8);
      updateFeedback("Hati Aira lebih tenang karena ada yang membelanya.");
    };

    return (
      <PageDialog
        key={dialog}
        NamaKarakter="Dian"
        Dialog={dialog}
        gambarkarakter={["/DAY1/airadialog1.png"]}
        opsi={[
          {
            text: "Itu gak penting, gue tanya kenapa lu ngejek dia kayak gitu?!",
            action: handleOptionA,
            type: "positive",
          },
          {
            text: "Dasar orang kaya gajelas! Anak papi mami.",
            action: handleOptionB,
            type: "negative",
          },
          {
            text: "Siapa kek gw cuman ga seneng kalau teman gw ada yang ngejek.",
            action: handleOptionC,
            type: "positive",
          },
        ]}
        hari="Hari Ketiga"
        background="/DAY2/bgdialog1.jpg"
        status={{
          kesenangan,
          pertemanan,
        }}
        onCompleteClick={() => {
          whenComplete(
            `"Lah kan gue ngejek Dia kenapa lu yang jadi sewot?!"\nJawab Dian dengan dongkol.`,
            2
          );
        }}
      />
    );
  };

  const negativePath = () => {
    const handleOptionA = () => {
      updateKesenangan(6);
      updatePertemanan(7);
      updateFeedback("Aira bersyukur masih ada orang yang mendukungnya.");
    };

    const handleOptionB = () => {
      updateKesenangan(4);
      updatePertemanan(3);
      updateFeedback(
        "Kamu tersulut emosi! ini akan memperkeruh situasi kedepannya."
      );
    };

    const handleOptionC = () => {
      updateKesenangan(5);
      updatePertemanan(5);
      updateFeedback(
        "Aira senang ada yang membelanya, tetapi dia sedikit tersinggung dengan perkataannya tetapi tidak apa."
      );
    };

    return (
      <PageDialog
        NamaKarakter="Dian"
        key={dialog}
        Dialog={dialog}
        gambarkarakter={["/DAY1/airadialog1.png"]}
        opsi={[
          {
            text: "gue cuman ga seneng kalau ada yang ngejek temen gue!",
            action: handleOptionA,
            type: "positive",
          },
          {
            text: "Hah lu kali yang kesiangan. Hari gini masih ngejek orang, gapunya pikiran lu ya?",
            action: handleOptionB,
            type: "negative",
          },
          {
            text: "Gue ga ada maksud apa-apa cuma gue gasuka kalo ada seseorang yang ngatain orang lain yang lebih rendah darinya.",
            action: handleOptionC,
            type: "neutral",
          },
        ]}
        hari="Hari Ketiga"
        background="/DAY2/bgdialog1.jpg"
        status={{
          kesenangan,
          pertemanan,
        }}
        onCompleteClick={() => {
          whenComplete(
            `"Lah kan gue ngejek Dia kenapa lu yang jadi sewot?!"\nJawab Dian dengan dongkol.`,
            2
          );
        }}
      />
    );
  };
  const neutralPath = () => {
    const handleOptionA = () => {
      updateKesenangan(6);
      updatePertemanan(7);
      updateFeedback("Aira bersyukur masih ada orang yang mendukungnya.");
    };

    const handleOptionB = () => {
      updateKesenangan(4);
      updatePertemanan(3);
      updateFeedback(
        "Kamu tersulut emosi! ini akan memperkeruh situasi kedepannya."
      );
    };

    const handleOptionC = () => {
      updateKesenangan(5);
      updatePertemanan(5);
      updateFeedback(
        "Aira senang ada yang membelanya, tetapi dia sedikit tersinggung dengan perkataannya tetapi tidak apa."
      );
    };

    return (
      <PageDialog
        NamaKarakter="Dian"
        key={dialog}
        Dialog={dialog}
        gambarkarakter={["/DAY1/airadialog1.png"]}
        opsi={[
          {
            text: "gue cuman ga seneng kalau ada yang ngejek temen gue!",
            action: handleOptionA,
            type: "positive",
          },
          {
            text: "Hah lu kali yang kesiangan. Hari gini masih ngejek orang, gapunya pikiran lu ya?",
            action: handleOptionB,
            type: "negative",
          },
          {
            text: "Gue ga ada maksud apa-apa cuma gue gasuka kalo ada seseorang yang ngatain orang lain yang lebih rendah darinya.",
            action: handleOptionC,
            type: "neutral",
          },
        ]}
        hari="Hari Ketiga"
        background="/DAY2/bgdialog1.jpg"
        status={{
          kesenangan,
          pertemanan,
        }}
        onCompleteClick={() => {
          whenComplete(
            `"Lah kan gue ngejek Dia kenapa lu yang jadi sewot?!"\nJawab Dian dengan dongkol.`,
            2
          );
        }}
      />
    );
  };

  const showDialogByPath = () => {
    if (pathCerita === 0 || pathCerita === 2) {
      return <div>{positivePath()}</div>;
    } else if (pathCerita === 1) {
      return <div>{negativePath()}</div>;
    }
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
          <SplashScreen day={"Hari Keempat"} />
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
              onComplete={() =>
                whenComplete("Eh liat guys ada anak tukang mabok Ahahahah.")
              }
            />
          ) : (
            <div className="">{showDialogByPath()}</div>
          )}
        </div>
      )}
    </>
  );
};

export default Dialog1;
