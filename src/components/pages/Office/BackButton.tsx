import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

interface BackButtonProps {
  onBack: () => void;
  setPosition :string;
  setRotation?:string;
  events?:object;
}

const BackButton: React.FC<BackButtonProps> = ({ onBack,setPosition,setRotation='0 0 0',events }) => {

  const handleBackButton = () => {
    console.log('back button pressed');
    onBack();
  };

  return (
    <Entity
      geometry={{ primitive: 'plane', width: 0.2, height: 0.2 }}
      material={{ src: '#backButton2', color: 'black', opacity: 0.99 }}
      position={setPosition}/* "-3 4 -3" */
      className="clickable "
      rotation={setRotation}
      animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
      animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
      events={{ click: handleBackButton , ...events}}
    />
  );
};

export default BackButton;
