import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TypeIt from "typeit-react";
import "./style.css";
import StatusBar from "../components/StatusBar";

const PageDialog = ({
  NamaKarakter,
  Dialog,
  gambarkarakter,
  opsi,
  hari,
  background,
  alert,
  status,
  onCompleteNavigate,
}) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertClass, setAlertClass] = useState("");
  const [alertType, setAlertType] = useState(false);
  const [disabledOption, setDisabledOption] = useState(null);
  const [showButtons, setShowButtons] = useState(false);

  const navigate = useNavigate();

  const handleOptionClick = async (option, index) => {
    setAlertVisible(true);
    setAlertType(option.type);
    setAlertClass("animate-slide-in");

    option.action(); // Memanggil fungsi aksi

    setDisabledOption(index);

    // Menunggu animasi "slide-in" selesai
    await new Promise((resolve) => {
      setTimeout(() => {
        setAlertClass("animate-slide-out"); // Memulai animasi "slide-out"
        setTimeout(() => {
          setAlertVisible(false); // Menyembunyikan alert
          setAlertClass(""); // Reset animasi
          resolve(); // Selesai menunggu
        }, 500); // Durasi "slide-out"
      }, 3000); // Durasi "slide-in"
    });

    // Setelah alert selesai, baru navigasi
    navigate(onCompleteNavigate);
  };

  return (
    <div className="">
      <img
        src={background}
        alt=""
        className="h-full w-screen fixed opacity-80"
      />
      <div className="relative z-10 flex justify-between">
        <p className="p-10 fixed text-xl font-bold text-white">{hari}</p>
        <div className="flex right-0 z-10 fixed m-10">
          {/* Menggunakan nilai status terkini */}
          <StatusBar
            kesenangan={status.kesenangan}
            pertemanan={status.pertemanan}
          />
        </div>
      </div>
      <div className="relative mt-20">
        <div className="h-fit relative flex justify-evenly items-center">
          {gambarkarakter && gambarkarakter.length > 0 && (
            <img className="w-96" src={gambarkarakter} alt="" />
          )}
        </div>

        <div className="relative bg-[#ffe680] shadow-multi-outline p-5 mx-36 rounded-2xl">
          {NamaKarakter && (
            <div className="top-[-4vh] border-4 border-black absolute rounded-xl px-5 py-1 bg-[#fffaad]">
              <p className="font-semibold">{NamaKarakter}</p>
            </div>
          )}

          <p className="text-black text-xl font-medium whitespace-pre-line">
            <TypeIt
              options={{
                speed: 50,
                waitUntilVisible: true,
                startDelay: 4500,
                afterComplete: () => setShowButtons(true),
              }}
            >
              {Dialog}
            </TypeIt>
          </p>

          <div className="relative z-10 flex gap-10 mt-10">
            {showButtons && opsi && opsi.length > 0 && opsi.map((option, index) => (
              <button
                key={index}
                className={`button-56 button-fade-in ${showButtons ? 'show' : ''}`}
                role="button"
                onClick={() => handleOptionClick(option, index)}
                disabled={disabledOption !== null && disabledOption !== index}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>

        {alertVisible && (
          <div
            className={`fixed top-20 left-5 ${
              alertType ? "bg-green-500" : "bg-red-500"
            } text-white p-4 rounded-lg transition-transform flex items-center gap-3 ${alertClass}`}
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