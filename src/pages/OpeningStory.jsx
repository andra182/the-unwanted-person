import React, { useState, useEffect } from "react";
import TypeIt from "typeit-react";

const OpeningStory = ({ onComplete, paragraphs }) => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const [hasFinished, setHasFinished] = useState(false);

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
    if (currentParagraph === paragraphs.length && !hasFinished) {
      setHasFinished(true); // Tandai bahwa cerita selesai
      const timer = setTimeout(() => {
        onComplete(); // Pindah ke halaman berikutnya setelah jeda
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentParagraph, paragraphs.length, onComplete, hasFinished]);

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
        ) : hasFinished ? (
          <div className="text-center">
            <p className="text-xl">Cerita Selesai.</p>
          </div>
        ) : null}
      </div>
      {currentParagraph < paragraphs.length && (
        <button
          onClick={handleSkip}
          className="mt-4 font-semibold underline-offset-2 hover:underline text-white rounded fixed bottom-10 right-10"
        >
          Click Enter To Skip
        </button>
      )}
    </div>
  );
};

export default OpeningStory;
