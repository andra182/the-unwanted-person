import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [isPressed, setIsPressed] = useState(false);
    const [backgroundPosition, setBackgroundPosition] = useState({
        x: 50,
        y: 50,
    });
    const [showGlitch, setShowGlitch] = useState(false);
    const navigate = useNavigate();

    const bgMusicRef = useRef(null);
    const glitchSFXRef = useRef(null);
    const startSFXRef = useRef(null);

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
            setShowGlitch((prev) => {
                if (!prev && glitchSFXRef.current) {
                    glitchSFXRef.current.volume = 0.7; 
                    glitchSFXRef.current.play(); 
                }
                return !prev;
            });
        };

        const interval = setInterval(toggleGlitch, Math.random() * 3000 + 2000);
        return () => clearInterval(interval);
    }, []);

    const handlePress = () => {
        setIsPressed(true);
        setShowGlitch(true);

        if (startSFXRef.current) {
            startSFXRef.current.volume = 0.5;
            startSFXRef.current.play();
        }

        setTimeout(() => {
            navigate("/day1/dialog1");
        }, 2000);
    };

    return (
        <div className="relative bg-black h-screen w-screen overflow-hidden flex items-center justify-center">
            <audio ref={bgMusicRef} src="./audio/home.mp3" />
            <audio ref={startSFXRef} src="./audio/start.mp3" />
            {/* Optional */}
            <audio ref={glitchSFXRef} src="/glitch-sfx.mp3" />

            <div
                className="absolute top-0 left-0 w-screen h-screen bg-no-repeat opacity-90 rounded-[2%] filter grayscale"
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

            <div className="relative flex flex-col items-center z-10 text-center select-none cursor-default text-white">
                <h1 className="text-9xl font-medium text-gray-200 glitch relative mb-6 font-sour-gummy">
                    The Unwanted Person
                </h1>
                <p
                    className={`text-xl font-mono p-1 w-60 relative tracking-wide group ${
                        isPressed ? "animate-pressed" : "animate-pulse"
                    }`}
                    onClick={handlePress}
                >
                    PRESS START
                    <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#FFFFFF80] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#FFFFFF80] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </p>
                <div
                    className="text-xl p-1 w-60 my-6 rounded-md font-mono relative group"
                    onClick={() => navigate("/credit")}
                >
                    CREDITS
                    <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#FFFFFF80] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#FFFFFF80] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
            </div>

            <div
                className="absolute left-5 bottom-5 w-24 h-24 bg-cover bg-center"
                style={{ backgroundImage: "url(/logo.png)" }}
            ></div>

            <style>{`
                .glitch {
                    position: relative;
                    color: white;
                    font-size: 5rem;
                    animation: glitch 0.4s infinite;
                }

                @keyframes glitch {
                    0% {
                        text-shadow: 2px 2px red, -2px -2px blue;
                    }
                    20% {
                        text-shadow: 2px -2px red, -2px 2px blue;
                    }
                    40% {
                        text-shadow: -2px 2px red, 2px -2px blue;
                    }
                    60% {
                        text-shadow: 2px 2px red, -2px -2px blue;
                    }
                    100% {
                        text-shadow: 0px 0px red, 0px 0px blue;
                    }
                }

                .glitch-overlay {
                    background: repeating-linear-gradient(
                        transparent 0%,
                        rgb(255, 255, 255, 60) 1%,
                        transparent 2%
                    );
                    animation: glitch-overlay 0.5s steps(5) infinite; /* Increased steps for more intense effect */
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

                .animate-pulse {
                    animation: pulse 1.5s infinite;
                }

                @keyframes pulse {
                    0% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                    100% {
                        opacity: 1;
                    }
                }

                .animate-pressed {
                    animation: pressed 1.5s infinite;
                }

                @keyframes pressed {
                    0% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default HomePage;
