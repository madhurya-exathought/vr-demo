import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import BackButton from './BackButton';
import { SceneTwoThreeProps } from './scenetype.type';
import ImageEntity from './ImageEntity';
import SkyEntity from '../../common/cta/SkyEntity';

const imagesSceneTwo = [
  { src: '#Villa', position: '-1.5 0 0.01' },
  { src: '#Apartment', position: '0 0 0.01' },
  { src: '#Studio', position: '1.5 0 0.01' },
];

const SceneTwo: React.FC<SceneTwoThreeProps> = ({ onSceneChange, onBack }) => {
  console.log('SceneTwo rendered');

  const handleImageClickSceneTwo = () => {
    console.log('Image clicked in scene 2');
    onSceneChange();
  };

  return (
    <Entity>
      <SkyEntity src="#sky1" />

      <Entity
        geometry={{ primitive: 'plane', width: 5, height: 2 }}
        material={{ color: 'beige', opacity: 1 }}
        position="0 2 -6"
        animation__scale="property: scale; from: 0 0 0; to: 1 1 1; dur: 1000; easing: easeInOutQuad; "
      >
        <Entity primitive="a-text" value="Select Property" color="black" align="center" position="0 0.8 0.01" width="4" />

        {/*  Back button */}

        <BackButton onBack={onBack} setPosition="-1 0.8 0.01" />

        {/* Images */}

        {imagesSceneTwo.map((image, index) => (
          <ImageEntity key={index} src={image.src} position={image.position} handleClick={handleImageClickSceneTwo} />
        ))}
      </Entity>
    </Entity>
  );
};

export default SceneTwo;
