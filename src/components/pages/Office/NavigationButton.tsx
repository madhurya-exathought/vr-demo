import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import { NavigationButtonProps } from './scenetype.type';


const NavigationButton: React.FC<NavigationButtonProps> = ({ onBack,setPosition,setRotation='0 0 0',events }) => {

  const handleNavigationButton = () => {
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
      events={{ click: handleNavigationButton , ...events}}
    />
  );
};

export default NavigationButton;
