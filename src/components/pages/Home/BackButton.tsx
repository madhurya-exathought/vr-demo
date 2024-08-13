import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

interface BackButtonProps {
  onBack: () => void;
  setPosition :string
}

const BackButton: React.FC<BackButtonProps> = ({ onBack,setPosition }) => {
  const handleBackButton = () => {
    console.log('back button press on scene 3');
    onBack();
  };

  return (
    <Entity
      geometry={{ primitive: 'plane', width: 0.2, height: 0.2 }}
      material={{ src: '#backButton2', color: 'black', opacity: 0.99 }}
      position={setPosition}/* "-3 4 -3" */
      className="clickable "
      animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
      animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
      events={{ click: handleBackButton }}
    />
  );
};

export default BackButton;
