import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import { NavigationButton2 } from '../../common/cta/NavigationButton';
import { ScenesProps } from './scenetype.type';
import ImageEntity from '../../common/cta/ImageEntity';
import SkyEntity from '../../common/cta/SkyEntity';
import TextEntity from '../../common/cta/TextEntity';
import { imagesSceneTwo } from '../../../constants/Imageloops';



const SceneTwo: React.FC<ScenesProps> = ({ onSceneChange, onBack }) => {
  /* console.log('SceneTwo rendered');
 */
  const handleImageClickSceneTwo = () => {
   /*  console.log('Image clicked in scene 2');
    */ onSceneChange();
  };

  return (
    <Entity>
      <SkyEntity src="#sky1" setRotation="0 50 0 " />

      <Entity
        geometry={{ primitive: 'plane', width: 3.2, height: 2 }}
        material={{ src: '#plane', color: 'black', opacity: 0.9 }}
        position="0 1 -6"
        mixin="animation-easing-plane"
      >
        <TextEntity setPosition="-1 0.8 0.01" text="Select Property" color="#FEFEFE" align="left" width="4" />

        {/*  Back button */}

        <NavigationButton2 onBack={onBack} setPosition="-1.25 0.8 0.01" />

        {/* Images */}

        {imagesSceneTwo.map((image, index) => (
          <ImageEntity
            key={index}
            src={image.src}
            position={image.position}
            handleClick={handleImageClickSceneTwo}
            imageText={image.text}
          />
        ))}
      </Entity>
    </Entity>
  );
};

export default SceneTwo;
