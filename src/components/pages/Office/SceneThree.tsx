import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import {NavigationButton2} from './NavigationButton';
import { ScenesProps } from './scenetype.type';
import ImageEntity from './ImageEntity';
import SkyEntity from './SkyEntity';

const imagesSceneThree = [
  { src: '#1BHK', position: '-1.5 0 0.01' },
  { src: '#2BHK', position: '0 0 0.01' },
  { src: '#3BHK', position: '1.5 0 0.01' },
];

const SceneThree: React.FC<ScenesProps> = ({ onSceneChange, onBack }) => {
  console.log('SceneThree rendered');

  const handleImageClickSceneThree = () => {
    console.log('Image clicked in scene 3');
    onSceneChange();
  };

  return (
    <Entity>
      <SkyEntity src="#sky1" />

      <Entity
        geometry={{ primitive: 'plane', width: 5, height: 2 }}
        material={{ color: 'beige', opacity: 1 }}
        position="0 2 -6"
        rotation="0 0 0"
        animation__scale="property: scale; from: 0 0 0; to: 1 1 1; dur: 1000; easing: easeInOutQuad; "
      >
        <Entity primitive="a-text" value="Select Number of Floors" color="black" align="center" position="0 0.8 0.01" width="4" />

        {/*  Back button */}

        <NavigationButton2 onBack={onBack} setPosition="-1.3 0.8 0.01" />

        {/* Images */}

        {imagesSceneThree.map((image, index) => (
          <ImageEntity key={index} src={image.src} position={image.position} handleClick={handleImageClickSceneThree} />
        ))}
      </Entity>
    </Entity>
  );
};

export default SceneThree;
