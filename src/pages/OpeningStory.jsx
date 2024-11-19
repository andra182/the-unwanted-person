import React, { useState, useEffect } from "react";
import TypeIt from "typeit-react";

const OpeningStory = ({ onComplete }) => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const paragraphs = [
    "Di daerah di Malang tepatnya di daerah Cemoro Kandang, hiduplah seorang perempuan cantik bernama Risa.",
    "Risa adalah seorang pelajar yang baru memasuki SMA di Sekolah Menengah Atas Negeri 1 CemoroKandang.",
    "Ia hidup sederhana bersama kedua orang tuanya. Ia merupakan seorang pindahan dari Kota Jakarta ke Malang, dikarenakan satu dan beberapa hal.",
    "Risa memasuki lingkungan baru di SMA dengan harapan bisa menjalani masa remaja yang penuh warna.",
    "Namun, sejak hari pertama, Risa merasa ada atmosfer yang aneh. Dia melihat seorang gadis duduk sendirian di pojok taman sekolah, wajahnya murung dan pandangannya kosong.",
    "Gadis itu bernama Aira. Risa merasa terpanggil untuk mengenalnya.",
  ];

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        if (isComplete) {
          handleSkip(); // Panggil fungsi handleSkip jika teks sudah lengkap
        } else {
          completeText(); // Lengkapi teks jika belum lengkap
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isComplete]);

  useEffect(() => {
    if (currentParagraph >= paragraphs.length) {
      const timer = setTimeout(() => {
        onComplete(); // Memanggil callback untuk menyelesaikan OpeningStory
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentParagraph, paragraphs.length, onComplete]);

  const completeText = () => {
    setIsComplete(true); // Tandai teks sebagai lengkap
    setCurrentParagraph((prev) => prev + 1); // Lompat ke paragraf berikutnya
  };

  const handleSkip = () => {
    if (currentParagraph < paragraphs.length - 1) {
      setCurrentParagraph((prev) => prev + 1); // Lompat ke paragraf berikutnya
      setIsComplete(false); // Reset status lengkap
    } else {
      onComplete(); // Jika sudah di paragraf terakhir, panggil onComplete
    }
  };

  return (
    <div className="bg-black text-white h-screen flex flex-col justify-center items-center overflow-y-hidden">
      <div className="w-3/4 p-4 text-lg">
        {currentParagraph < paragraphs.length ? (
          <TypeIt
            key={currentParagraph} // Re-render saat paragraf berubah
            options={{
              speed: 50,
              cursor: true,
              waitUntilVisible: true,
              afterComplete: () => setIsComplete(true), // Tandai teks sebagai lengkap setelah selesai
            }}
            getAfterInit={(instance) => {
              instance
                .type(paragraphs[currentParagraph])
                .pause(1500)
                .exec(() => setIsComplete(true)) // Tandai teks sebagai lengkap setelah jeda
                .go();
              return instance;
            }}
          />
        ) : (
          <div className="text-center">
            <p className="text-xl">Cerita dimulai.</p>
          </div>
        )}
      </div>
      <button onClick={handleSkip} className="mt-4 font-semibold underline-offset-2 hover:underline text-white rounded fixed bottom-10 right-10">
       Click
        Enter To Skip
      </button>
    </div>
  );
};

export default OpeningStory;
