import React, { useState } from "react";
import TypeIt from "typeit-react";
import "./style.css";

const PageDialog = ({ NamaKarakter, Dialog, gambarkarakter, opsi, hari, background, alert }) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertClass, setAlertClass] = useState("");
  const [alertType, setAlertType] = useState(false);
  const [disabledOption, setDisabledOption] = useState(null); // State untuk menonaktifkan tombol

  const handleOptionClick = (option, index) => {
    setAlertVisible(true);
    setAlertType(option.type);
    setAlertClass("animate-slide-in");

    option.action(); // Jalankan logika opsi

    setDisabledOption(index); // Menonaktifkan tombol yang dipilih

    setTimeout(() => {
      setAlertClass("animate-slide-out");
      setTimeout(() => {
        setAlertVisible(false);
        setAlertClass(""); // Reset class after hiding
      }, 500); // Durasi animasi keluar
    }, 3000); // Menyembunyikan alert setelah 3 detik
  };

  return (
    <div className="bg-black">
      <img
        src={background}
        alt=""
        className="absolute opacity-80 w-screen h-screen overflow-y-hidden"
      />
      <p className="p-10 relative text-xl font-bold text-white">{hari}</p>
      <div className="relative bottom-14">
        <div className="bottom-20 h-screen relative flex justify-center items-center">
          <img className="w-80" src={gambarkarakter} alt="" />
        </div>

        <div className="relative bottom-56 bg-[#ffe680] shadow-multi-outline p-5 mx-36 rounded-2xl">
          <div className="top-[-4vh] border-4 border-black absolute rounded-xl px-5 py-1 bg-[#fffaad]">
            <p className="font-semibold">{NamaKarakter}</p>
          </div>

          <p className="text-black text-xl font-medium">
            <TypeIt
              options={{
                speed: 50,
                waitUntilVisible: true,
              }}
            >
              {Dialog}
            </TypeIt>
          </p>

          <div className="relative z-10 flex gap-10 mt-10">
            {opsi.map((option, index) => (
              <button
                key={index}
                className="button-56"
                role="button"
                onClick={() => handleOptionClick(option, index)}
                disabled={disabledOption !== null && disabledOption !== index} // Nonaktifkan tombol selain yang dipilih
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>

        {alertVisible && (
          <div
            className={`fixed top-20 left-5 ${alertType ? "bg-green-500" : "bg-red-500"} text-white p-4 rounded-lg transition-transform flex items-center gap-3 ${alertClass}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path
                  strokeDasharray="64"
                  strokeDashoffset="64"
                  d="M12 3l9 17h-18l9-17Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="64;0"
                  />
                </path>
              </g>
            </svg>
            {alert}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageDialog;
