import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isPressed, setIsPressed] = useState(false);
  const navigate = useNavigate();

  const handlePress = () => {
    setIsPressed(true);
    setTimeout(() => {
      navigate("/day1");
    }, 2000); // Menunggu animasi selesai sebelum berpindah route
  };

  return (
    <div
      className="relative bg-black h-screen w-screen overflow-hidden flex items-center justify-center"
      onClick={handlePress} // Menambahkan event klik
    >
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-90 filter grayscale"
        style={{ backgroundImage: "url('/home-bg.jpg')" }} // Path ke gambar latar
      />

      {/* Overlay effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />

      {/* Main Content */}
      <div className="relative z-10 text-center select-none cursor-default text-white">
        <h1 className="text-9xl font-extrabold text-gray-200 glitch relative mb-6 font-sour-gummy">
          The Unwanted Person
        </h1>
        <p
          className={`text-xl font-mono tracking-wide ${isPressed ? 'animate-pressed' : 'animate-pulse'}`} // Menambahkan animasi berkedip
        >
          PRESS START
        </p>
      </div>

      {/* Glitch effect styles */}
      <style>{`
        .glitch {
          position: relative;
          color: white;
          font-size: 5rem;
          animation: glitch 1.5s infinite;
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

        /* Pulse animation for PRESS START */
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
          animation: pressed 1.5s infinite ;
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
