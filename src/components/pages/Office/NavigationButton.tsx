import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import { NavigationButtonProps } from './scenetype.type';


const NavigationButton: React.FC<NavigationButtonProps> = ({ onBack,setPosition,setRotation='0 0 0',events,scale='1 1 1' }) => {
  

  const handleNavigationButton = () => {
    console.log('back button pressed');
    if (onBack){
      onBack();
    }
    
  };

  return (
    <Entity
      geometry={{ primitive: 'plane', width: 0.3, height: 0.3 }}
      material={{ src: '#backButton2', color: 'black', opacity: 0.99 }}
      position={setPosition}/* "-3 4 -3" */
      className="clickable "
      rotation={setRotation}
      scale={scale}
      mixin="animation-scale-on-hover "
       events={{ click: handleNavigationButton , 
              ...events}}
    />
  );
};



const NavigationButton2: React.FC<NavigationButtonProps> = ({ onBack,setPosition,setRotation='0 0 0',events }) => {

  const handleNavigationButton = () => {
    console.log('back button pressed');
    if (onBack){
      onBack();
    }
  };

  return (
    <Entity
      geometry={{ primitive: 'plane', width: 0.2, height: 0.2 }}
      material={{ src: '#backButton', color: ' grey', opacity: 0.99 }}
      position={setPosition}
      className="clickable "
      rotation={setRotation}
      mixin="animation-scale-on-hover"
       events={{ click: handleNavigationButton , ...events}}
    />
  );
};

export {NavigationButton, NavigationButton2} ;
