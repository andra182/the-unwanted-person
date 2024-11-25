import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../../context/GameContext";
import PageDialog from "../PageDialog";

const Dialog2 = () => {
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
      return 'Dian membalas "Helloow kamu siapa Nona sok baik hati??"';
    } else if (pathCerita === 1) {
      ('Dian membalas "Hah maksud lu apa? Lu mau sok jadi pahlawan kesiangan?"');
    }
  };

  const [dialog, setDialog] = useState(dialogByPathCerita());
  const [showDialog, setShowDialog] = useState(1);

  const whenComplete = (param, nextDialog) => {
    console.log("Mengubah ke dialog:", nextDialog); // Debug
    setTimeout(() => {
      setShowDialog(nextDialog);
      setDialog(param);
    }, 2500);
  };

  const positivePath = () => {
    const handleOptionA = () => {
      updateKesenangan(5);
      updatePertemanan(5);
      updateFeedback("Hati Aira lebih tenang karena ada yang membelanya.");
    };

    const handleOptionB = () => {
      updateKesenangan(-5);
      updatePertemanan(-5);
      updateFeedback(
        "Kamu tersulut emosi! ini akan memperkeruh situasi kedepannya."
      );
    };

    const handleOptionC = () => {
      updateKesenangan(2);
      updatePertemanan(2);
      updateFeedback("Hati Aira lebih tenang karena ada yang membelanya.");
    };

    return (
      <PageDialog
        key={"dadsfasdfasd"}
        NamaKarakter="Dian"
        Dialog={dialog}
        gambarkarakter={[
          "/DAY3/risadanairadialog2.png",
          "/DAY2/diandialog1.png",
        ]}
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

  const endDialog = () => {
    const handleOptionA = () => {
      updateKesenangan(5);
      updatePertemanan(4);
      updateFeedback("Situasi tampak panas tetapi masih bisa dikendalikan.");
    };

    const handleOptionB = () => {
      updateKesenangan(2);
      updatePertemanan(1);
      updateFeedback(
        "Kamu tersulut emosi! Ini akan memperkeruh situasi kedepannya!"
      );
    };

    const handleOptionC = () => {
      updateKesenangan(1);
      updatePertemanan(0);
      updateFeedback("Dian semakin emosi dan geram.");
    };

    return (
      <PageDialog
        NamaKarakter="Dian"
        Dialog={dialog}
        gambarkarakter={[
          "/DAY3/risadanairadialog2.png",
          "/DAY3/diandialog2.png",
        ]}
        opsi={[
          {
            text: "Lah, ga salah kan gue? gue yang harusnya nanya kenapa lu ngejek dia?",
            action: handleOptionA,
            type: "neutral", // Netral
          },
          {
            text: "Kalau lu bisa jadi brengsek kenapa gue nggak?",
            action: handleOptionB,
            type: "negative", // Negatif
          },
          {
            text: "Wajar dong! orang lu nya brengsek kayak begini!",
            action: handleOptionC,
            type: "negative", // Negatif
          },
        ]}
        hari="Hari Ketiga"
        background="/DAY2/bgdialog1.jpg"
        status={{
          kesenangan,
          pertemanan,
        }}
        onCompleteClick={() => {
          console.log("Navigasi ke /day3/dialog3"); // Debug
          navigate("/day3/dialog3");
        }}
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

export default Dialog2;
