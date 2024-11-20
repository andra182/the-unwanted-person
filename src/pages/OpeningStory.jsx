import React, { useState, useEffect } from "react";
import TypeIt from "typeit-react";

const OpeningStory = ({ onComplete, paragraphs, endText }) => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        if (isComplete) {
          handleSkip();
        } else {
          completeText();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isComplete]);

  useEffect(() => {
    if (currentParagraph >= paragraphs.length) {
      const timer = setTimeout(() => {
        onComplete();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentParagraph, paragraphs.length, onComplete]);

  const completeText = () => {
    setIsTyping(false);
    setIsComplete(true);
  };

  const handleSkip = () => {
    if (currentParagraph < paragraphs.length - 1) {
      setCurrentParagraph((prev) => prev + 1);
      setIsTyping(true);
      setIsComplete(false);
    } else {
      onComplete();
    }
  };

  return (
    <div className="bg-black text-white h-screen flex flex-col justify-center items-center overflow-y-hidden">
      <div className="w-3/4 p-4 text-lg">
        {currentParagraph < paragraphs.length ? (
          <div>
            {isTyping ? (
              <TypeIt
                key={currentParagraph}
                options={{
                  speed: 50,
                  cursor: true,
                  waitUntilVisible: true,
                  afterComplete: () => setIsComplete(true),
                }}
                getAfterInit={(instance) => {
                  instance
                    .type(paragraphs[currentParagraph])
                    .pause(1500)
                    .exec(() => setIsComplete(true))
                    .go();
                  return instance;
                }}
              />
            ) : (
              <p>{paragraphs[currentParagraph]}</p>
            )}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xl">{endText}</p>
          </div>
        )}
      </div>
      <button
        onClick={handleSkip}
        className="mt-4 font-semibold underline-offset-2 hover:underline text-white rounded fixed bottom-10 right-10"
      >
        Click Enter To Skip
      </button>
    </div>
  );
};

export default OpeningStory;
