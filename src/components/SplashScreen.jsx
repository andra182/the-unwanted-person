import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ day }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`splash-screen flex flex-col ${
        visible ? "fade-in" : "fade-out"
      }`}
    >
      <h1 className="splash-text font-bold ">
        THE UNWANTED{" "}
        <span className="neon-light border-2 border-black border-solid">
          PERSON
        </span>
      </h1>
      <p className="splash-text text-3xl mt-20">{day}</p>
      <p className="splash-text text-xl mt-20 pepek flex items-center">
        BY SINGA.CO
        <img src="/logo.png" alt="" srcset="" className="w-10" />
      </p>
    </div>
  );
};

export default SplashScreen;
