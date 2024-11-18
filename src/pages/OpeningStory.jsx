import React, { useState, useEffect } from "react";
import TypeIt from "typeit-react";

const OpeningStory = ({ onComplete }) => {
  const [currentParagraph, setCurrentParagraph] = useState(0);

  const paragraphs = [
    "Di daerah di Malang tepatnya di daerah Cemoro Kandang, hiduplah seorang perempuan cantik bernama Risa.",
    "Risa adalah seorang pelajar yang baru memasuki SMA di Sekolah Menengah Atas Negeri 1 CemoroKandang.",
    "Ia hidup sederhana bersama kedua orang tuanya. Ia merupakan seorang pindahan dari Kota Jakarta ke Malang, dikarenakan satu dan beberapa hal.",
    "Risa memasuki lingkungan baru di SMA dengan harapan bisa menjalani masa remaja yang penuh warna.",
    "Namun, sejak hari pertama, Risa merasa ada atmosfer yang aneh. Dia melihat seorang gadis duduk sendirian di pojok taman sekolah, wajahnya murung dan pandangannya kosong.",
    "Gadis itu bernama Aira. Risa merasa terpanggil untuk mengenalnya.",
  ];

  useEffect(() => {
    if (currentParagraph >= paragraphs.length) {
      const timer = setTimeout(() => {
        onComplete(); // Memanggil callback untuk menyelesaikan OpeningStory
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentParagraph, paragraphs.length, onComplete]);

  return (
    <div className="bg-black text-white h-screen flex flex-col justify-center items-center">
      <div className="w-3/4 p-4 text-lg">
        {currentParagraph < paragraphs.length ? (
          <TypeIt
            key={currentParagraph} // Re-render saat paragraf berubah
            options={{
              speed: 50,
              cursor: true,
              waitUntilVisible: true,
            }}
            getAfterInit={(instance) => {
              instance
                .type(paragraphs[currentParagraph])
                .pause(1500)
                .exec(() => setCurrentParagraph((prev) => prev + 1))
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
    </div>
  );
};

export default OpeningStory;
