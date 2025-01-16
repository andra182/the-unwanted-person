import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const [backgroundPosition, setBackgroundPosition] = useState({
        x: 50,
        y: 50,
    });
    const [showGlitch, setShowGlitch] = useState(false);
    const navigate = useNavigate();

    const bgMusicRef = useRef(null);

    useEffect(() => {
        if (bgMusicRef.current) {
            bgMusicRef.current.volume = 0.5;
            bgMusicRef.current.loop = true;
            bgMusicRef.current.play();
        }

        return () => {
            if (bgMusicRef.current) bgMusicRef.current.pause();
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth) * 100;
            const y = (e.clientY / innerHeight) * 100;
            setBackgroundPosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // useEffect(() => {
    //     const toggleGlitch = () => {
    //         setShowGlitch((prev) => !prev);
    //     };

    //     const interval = setInterval(toggleGlitch, Math.random() * 3000 + 2000);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="relative select-none cursor-default bg-black h-screen w-screen flex items-center overflow-hidden justify-center">
            <audio ref={bgMusicRef} src="./audio/credit.mp3" />
            <div
                className="absolute top-0 left-0 w-screen h-screen bg-no-repeat opacity-90 rounded-[2%]"
                style={{
                    backgroundImage: "url('/home-bg.jpg')",
                    backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
                    backgroundSize: "102%",
                    transition: "background-position 0.1s ease-out",
                }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
            {showGlitch && (
                <div className="absolute top-0 left-0 w-full h-full glitch-overlay pointer-events-none"></div>
            )}
            <div className="relative w-full h-full z-10 text-white overflow-hidden">
                {/* Container teks dibuat scrollable */}
                <div className="absolute inset-0 overflow-y-scroll p-28 pr-96">
                    {/* Isi teks */}
                    <div className="relative text-lg w-full text-justify">
                        <h1 className="text-3xl mb-5 text-center font-bold">Tentang Game ini</h1>
                        <p className="indent-20">
                            <strong>"The Unwanted Person"</strong> adalah sebuah
                            game naratif yang menggambarkan perjalanan emosional
                            seorang remaja SMA bernama Risa dan sahabatnya,
                            Aira, yang berjuang melawan perasaan terasing dan
                            intimidasi dari geng sekolah. Dalam dunia yang penuh
                            tantangan ini, pemain akan diajak untuk membantu
                            Risa menemukan tempatnya dan mengatasi berbagai
                            rintangan sosial.
                        </p>
                        <br />
                        <p className="indent-20">
                            Di sepanjang cerita, pemain akan membuat keputusan
                            penting setiap harinya yang akan membentuk jalannya
                            alur cerita dan menentukan akhir dari kisah mereka.
                            Dengan alur cerita bercabang selama lima hari,
                            pilihan-pilihan pemain akan membawa Risa ke berbagai
                            kemungkinan akhir yang bisa bersifat positif,
                            netral, atau negatif.
                        </p>
                        <br /><br />

                        <h2 className="text-2xl mb-2 font-bold">Fitur Utama:</h2>
                        <ul className="list-disc">
                            <li>
                                <strong>Narasi Mendalam:</strong> Setiap hari
                                menawarkan tiga pilihan dialog yang memengaruhi
                                hubungan dan perkembangan cerita.
                            </li>
                            <br />
                            <li>
                                <strong>Akhir yang Beragam:</strong> Tiga
                                kemungkinan akhir (positif, netral, atau
                                negatif) yang mencerminkan perjalanan emosional
                                Risa berdasarkan keputusan pemain.
                            </li>
                            <br />
                            <li>
                                <strong>Tema Relatable:</strong> Fokus pada
                                isu-isu remaja seperti perasaan terasing,
                                persahabatan, dan kekuatan untuk melawan
                                intimidasi.
                            </li>
                            <br />
                            <li>
                                <strong>Alur Cerita Bercabang:</strong> Setiap
                                keputusan membuka jalur cerita yang unik,
                                menciptakan pengalaman bermain yang berbeda
                                setiap kali.
                            </li>
                        </ul>
                        <br />
                        <br />
                        <p className="indent-20">
                            Apakah Anda akan membantu Risa dan Aira menghadapi
                            rasa keterasingan mereka dan menemukan harapan, atau
                            akankah mereka terjebak dalam keputusasaan? Semua
                            tergantung pada pilihan Anda.
                        </p>
                        <br />
                        <p className="indent-20">
                            <strong>
                                Selamat datang di "The Unwanted Person" – sebuah
                                kisah yang mendalam tentang perjuangan, harapan,
                                dan pentingnya membuat keputusan yang tepat.
                            </strong>
                        </p>
                    </div>
                </div>
                <p
                    className="absolute bottom-5 -right-12 transform -translate-x-1/2 text-xl font-mono p-1 w-60 text-center cursor-default group"
                    onClick={() => navigate("/")}
                >
                    BACK TO HOME
                    <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#FFFFFF80] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#FFFFFF80] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </p>
            </div>
        </div>
    );
};

export default About;
