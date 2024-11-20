import React from 'react';

const AudioPlayer = ({ src }) => {
  return (
    <audio src={src} autoPlay loop />
  );
};

export default AudioPlayer; 