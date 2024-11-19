import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Credit = () => {
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


    useEffect(() => {
        const toggleGlitch = () => {
            setShowGlitch((prev) => !prev);
        };

        const interval = setInterval(toggleGlitch, Math.random() * 3000 + 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-black h-screen w-screen overflow-hidden flex items-center justify-center">
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
            <div className="relative w-full h-full z-10 text-white">
                <div className="absolute bottom-0 w-full h-full overflow-hidden">
                    <div className="absolute w-full text-center animate-scroll">
                        <p>Director: John Doe</p>
                        <p>Producer: Lorem Ipsum</p>
                        <p>Script Writer: Alice Johnson</p>
                        <br />
                        <p>Lead Developer: Your Name</p>
                        <p>UI/UX Designer: Verify</p>
                        <p>Frontend Developer: Shit</p>
                        <p>Backend Developer: WTF</p>
                        <br />
                        <p>Art Director: TT</p>
                        <p>Music Composer: HH</p>
                        <p>Sound Engineer: OOH</p>
                        <br />
                        <p>Special Thanks: All Supporters</p>
                        <p>SMKN 1 Cibinong</p>
                        <p>Game Subject Teacher</p>
                        <br />
                        <p>© 2024 SingaCo</p>
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
            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateY(200%);
                    }
                    100% {
                        transform: translateY(40%);
                    }
                }

                .animate-scroll {
                    animation: scroll 20s forwards linear;
                }

                .glitch-overlay {
                    background: repeating-linear-gradient(
                        transparent 0%,
                        rgb(255, 255, 255, 60) 1%,
                        transparent 2%
                    );
                    animation: glitch-overlay 0.5s steps(5);
                    mix-blend-mode: overlay;
                    opacity: 0.3;
                }

                @keyframes glitch-overlay {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    20% {
                        transform: translate(-2px, 2px);
                    }
                    40% {
                        transform: translate(2px, -2px);
                    }
                    60% {
                        transform: translate(-3px, 3px);
                    }
                    80% {
                        transform: translate(3px, -3px);
                    }
                }
            `}</style>
        </div>
    );
};

export default Credit;
