import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TypeIt from "typeit-react";
import "./style.css";
import StatusBar from "../components/StatusBar";
import AlertMessage from "../components/AlertMessage";

const PageDialog = ({
    NamaKarakter,
    Dialog,
    gambarkarakter,
    opsi,
    hari,
    background,
    status,
    onCompleteNavigate,
    onComplete,
}) => {
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");
    const [disabledOption, setDisabledOption] = useState(null);
    const [showButtons, setShowButtons] = useState(false);

    const navigate = useNavigate();

    const handleOptionClick = async (option, index) => {
        setAlertVisible(true);
        setAlertMessage(option.message);
        setAlertType(option.type);
        setDisabledOption(index);

        await new Promise((resolve) => {
            setTimeout(() => {
                setAlertVisible(false);
                resolve();
            }, 3000);
        });

        navigate(onCompleteNavigate);
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
                        kesenangan={status.kesenangan}
                        pertemanan={status.pertemanan}
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
                    {gambarkarakter && gambarkarakter.length > 0 && (
                        <img className="w-96" src={gambarkarakter} alt="" />
                    )}
                </div>

                <div
                    className={` relative bg-[#ffe680] shadow-multi-outline p-5 ${gambarkarakter && gambarkarakter.length > 0
                        ? "mx-36 rounded-2xl"
                        : "rounded-xl"
                        }`}
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
                                startDelay: 1000,
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

                    <div className="relative z-10 flex gap-10 mt-10">
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
