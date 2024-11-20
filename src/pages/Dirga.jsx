import React from "react";
import mySong from "/audio/home.mp3";

const Dirga = () => {
  return (
    <div>
      <audio src={mySong} autoPlay loop />
      <h1>Welcome to My App!</h1>
    </div>
  );
};

export default Dirga;
