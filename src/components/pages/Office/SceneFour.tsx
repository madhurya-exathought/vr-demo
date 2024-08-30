import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import { NavigationButton2 } from '../../common/cta/NavigationButton';
import { ScenesProps } from './scenetype.type';
import ImageEntity from '../../common/cta/ImageEntity';
import SkyEntity from '../../common/cta/SkyEntity';
import TextEntity from '../../common/cta/TextEntity';
import { imagesSceneFour } from '../../../constants/Imageloops';


const SceneFour: React.FC<ScenesProps> = ({ onSceneChange, onBack }) => {
  console.log('SceneFour rendered');

  const handleImageClickSceneFour = () => {
    console.log('Image clicked in scene 4');
    onSceneChange();
  };

  return (
    <Entity>
      <SkyEntity src="#sky1" setRotation="0 50 0 " />

      <Entity
        geometry={{ primitive: 'plane', width: 6.4, height: 2 }}
        material={{ src: '#plane', color: 'black', opacity: 0.9 }}
        position="0 1 -6"
        rotation="0 0 0"
        mixin="animation-easing-plane"
      >
        <TextEntity setPosition="-1.25 0.8 0.01" text="Select Commercial Property" color="#FEFEFE" align="center" width="4" />

        {/*  Back button */}

        <NavigationButton2 onBack={onBack} setPosition="-2.75 0.8 0.01" />

        {/* Images */}

        {imagesSceneFour.map((image, index) => (
          <ImageEntity
            key={index}
            src={image.src}
            position={image.position}
            handleClick={handleImageClickSceneFour}
            imageText={image.text}
            

          />
        ))}
      </Entity>
    </Entity>
  );
};

export default SceneFour;
