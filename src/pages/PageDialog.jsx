import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TypeIt from "typeit-react";
import "./style.css";
import StatusBar from "../components/StatusBar";
import AlertMessage from "../components/AlertMessage";
import { useGameContext } from "../context/GameContext";

const PageDialog = ({
    NamaKarakter,
    Dialog,
    gambarkarakter,
    opsi,
    hari,
    background,
    onCompleteNavigate,
    DelayTyping,
    onComplete,
    onCompleteClick
}) => {
    const { kesenangan, pertemanan } = useGameContext()
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");
    const [disabledOption, setDisabledOption] = useState(null);
    const [showButtons, setShowButtons] = useState(false);
    const [animateClass, setAnimateClass] = useState(""); // State untuk animasi

    const navigate = useNavigate();

    // Trigger animasi saat komponen dimuat
    useEffect(() => {
        const timer = setTimeout(() => setAnimateClass("animate-grow-center"), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        console.log("Kesenangan dari konteks:", kesenangan);
        console.log("Pertemanan dari konteks:", pertemanan);
    }, [kesenangan, pertemanan]);

    const handleOptionClick = async (option, index) => {
        setAlertVisible(true);
        setAlertMessage(option.message);
        setAlertType(option.type);
        setDisabledOption(index);
    
        // Panggil fungsi action jika ada
        if (option.action) {
            option.action();
        }
    
        await new Promise((resolve) => {
            setTimeout(() => {
                setAlertVisible(false);
                resolve();
            }, 3000);
        });
    
        // Navigasi dan callback
        navigate(onCompleteNavigate);
        if (onCompleteClick) {
            onCompleteClick(true);
        }
    };
    

    return (
        <div className="justify-center items-center">
            <img
                src={background}
                alt=""
                className="h-full w-screen fixed opacity-80"
            />
            <div className="relative z-10 flex justify-between">
                <p className="p-10 fixed text-xl font-bold text-white">{hari}</p>
                <div className="flex right-0 z-10 fixed m-10">
                    <StatusBar
                        kesenangan={kesenangan}
                        pertemanan={pertemanan}
                    />
                </div>
            </div>
            <div
                className={`relative ${gambarkarakter && gambarkarakter.length > 0
                    ? "mt-20"
                    : "flex items-center justify-center min-h-screen"
                }`}
            >
                <div className="h-fit relative flex justify-evenly items-center">
                    {Array.isArray(gambarkarakter) && gambarkarakter.map((src, index) => (
                        <img className="w-96" key={index} src={src} alt={`Gambar ${index + 1}`} />
                    ))}
                </div>

                {/* Animated Component */}
                <div
                    className={`Component-1 relative bg-[#ffe680] shadow-multi-outline p-5 ${gambarkarakter && gambarkarakter.length > 0
                        ? "mx-36 rounded-2xl"
                        : "rounded-xl"
                    } ${animateClass}`} // Terapkan kelas animasi
                >
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
                                startDelay: DelayTyping,
                                afterComplete: () => {
                                    setShowButtons(true);
                                    if (onComplete) {
                                        onComplete();
                                    }
                                },
                            }}
                        >
                            {Dialog}
                        </TypeIt>
                    </p>

                    <div className="relative z-10 flex gap-10 mt-10 comic">
                        {showButtons &&
                            opsi &&
                            opsi.length > 0 &&
                            opsi.map((option, index) => (
                                <button
                                    key={index}
                                    className={`button-56 button-fade-in ${showButtons ? "show" : ""
                                        }`}
                                    role="button"
                                    onClick={() => handleOptionClick(option, index)}
                                    disabled={disabledOption !== null && disabledOption !== index}
                                >
                                    {option.text}
                                </button>
                            ))}
                    </div>
                </div>

                {alertVisible && <AlertMessage message={alertMessage} type={alertType} />}
            </div>
        </div>
    );
};

export default PageDialog;
