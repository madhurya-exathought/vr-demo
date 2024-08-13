import React, { useState } from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import BackButton from './BackButton';
import { SceneTwoThreeProps } from './scenetype.type';

const SceneFour: React.FC<SceneTwoThreeProps> = ({ onSceneChange, onBack }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [isVisible2, setIsVisible2] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true)
  }


  const handleMouseLeave = () => {
    setIsVisible(false)
  }


  const handleMouseEnter2 = () => {
    setIsVisible2(true)
  }


  const handleMouseLeave2 = () => {
    setIsVisible2(false)
  }


  const handleImageClickSceneFour = () => {
    console.log('Image clicked in scene 4');
    onSceneChange();
  };

  return (
    <Entity>
      <Entity primitive="a-sky" src="#officeEntry" rotation='0 30 0' />

      <Entity
        geometry={{ primitive: 'plane', width: 0.4, height: 0.4 }}
        material={{ src: '#backButton', color: 'beige', opacity: 0.8 }}
        position="-0.25 0.5 -3"
        rotation="0 0 -90"
        className="clickable"
        animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
        animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
        events={{
          click: handleImageClickSceneFour,
          mouseenter: handleMouseEnter,
          mouseleave: handleMouseLeave,
        }}
      />

      {isVisible && (
        <Entity
          geometry={{ primitive: 'plane', width: 1, height: 0.5 }}
          material={{ color: 'white', opacity: 0.7 }}
          position="0.5 0.5 -3"
        >
          <Entity primitive="a-text" value="Enter Office" color="black" align="center" position="0 0 0.01" width="4" />
        </Entity>
      )}


<Entity
        geometry={{ primitive: 'plane', width: 0.2, height: 0.2 }}
        material={{ src: '#info'}}
        position="3 2 -3"
        rotation="0 -70 0"
        className="clickable"
        animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
        animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
        events={{
       
          mouseenter: handleMouseEnter2,
          mouseleave: handleMouseLeave2,
        }}
      />

{isVisible2 && (
        <Entity
          geometry={{ primitive: 'plane', width: 3, height: 0.5 }}
          material={{ color: 'white', opacity: 0.7 }}
          position="5 2 -3"
          rotation="0 -70 0"
        >
          <Entity primitive="a-text" value="Welcome to Exathought office tour " color="black" align="center" position="0 0 0.01" width="4" />
        </Entity>
      )}



      {/* Back button */}
      <BackButton onBack={onBack} setPosition="-2 3 -3"/>
    </Entity>
  );
};

export default SceneFour;
