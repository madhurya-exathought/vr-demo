import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import BackButton from './BackButton';
import { SceneTwoThreeProps } from './scenetype.type';
import ImageEntity from './ImageEntity';

const imagesSceneThree = [
  { src: '#1BHK', position: '-1.5 0 0.01' },
  { src: '#2BHK', position: '0 0 0.01' },
  { src: '#3BHK', position: '1.5 0 0.01' },
];

const SceneThree: React.FC<SceneTwoThreeProps> = ({ onSceneChange, onBack }) => {
  console.log('SceneThree rendered');

  const handleImageClickSceneThree = () => {
    console.log('Image clicked in scene 3');
    onSceneChange();
  };

  return (
    <Entity>
      <Entity primitive="a-sky" src="#sky1" />

      <Entity
        geometry={{ primitive: 'plane', width: 5, height: 2 }}
        material={{ color: 'beige', opacity: 1 }}
        position="0 2 -3"
        rotation="0 0 0"
      >
        <Entity primitive="a-text" value="Select Number of Rooms" color="black" align="center" position="0 0.8 0.01" width="4" />

        {/*  Back button */}

        <BackButton onBack={onBack} setPosition="-1.3 0.8 0.01"/>

        {/* Images */}

        {imagesSceneThree.map((image, index) => (
          <ImageEntity key={index} src={image.src} position={image.position} handleClick={handleImageClickSceneThree} />
        ))}
      </Entity>
    </Entity>
  );
};

export default SceneThree;
