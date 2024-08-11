import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

interface BackButtonProps {
  onBack: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onBack }) => {
  const handleBackButton = () => {
    console.log('back button press on scene 3');
    onBack();
  };

  return (
    <Entity
      geometry={{ primitive: 'plane', width: 0.4, height: 0.4 }}
      material={{ src: '#backButton', color: 'beige', opacity: 0.99 }}
      position="-3 4 -3"
      className="clickable "
      animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
      animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
      events={{ click: handleBackButton }}
    />
  );
};

export default BackButton;
