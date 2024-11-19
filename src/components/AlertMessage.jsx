import React, { useEffect, useState } from "react";
import "./AlertMessage.css";

const AlertMessage = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  let bgColor = "";
  switch (type) {
    case "positive":
      bgColor = "bg-green-500";
      break;
    case "neutral":
      bgColor = "bg-yellow-500";
      break;
    case "negative":
      bgColor = "bg-red-500";
      break;
    default:
      bgColor = "bg-gray-500"; // Default case
  }

  return (
    <div className={`fixed top-20 left-5 ${bgColor} text-white p-4 rounded-lg transition-transform flex items-center gap-3 ${isVisible ? 'slide-in' : 'slide-out'}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M12 3l9 17h-18l9-17Z" />
        </g>
      </svg>
      {message}
    </div>
  );
};

export default AlertMessage; 

