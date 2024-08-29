import React from 'react';
import { Entity } from 'aframe-react';

const QuitButton = () => {
  const handleQuit = () => {
    // Exit immersive mode
    const scene = document.querySelector('a-scene');
    if (scene && scene.exitVR) {
      scene.exitVR();
    }
  };

  return (
    <Entity
      primitive="a-plane"
      position="0 1 -3" // Adjust the position as needed
      width="0.5"
      height="0.2"
      color="#FF0000"
      text={{ value: 'Quit VR', align: 'center', color: '#FFF' }}
      events={{ click: handleQuit }} // Trigger handleQuit on click
    />
  );
};

export default QuitButton;
