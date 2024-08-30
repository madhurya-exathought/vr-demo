import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import ImageEntity from '../../common/cta/ImageEntity';
import './aframe-components';
import SkyEntity from '../../common/cta/SkyEntity';
import TextEntity from '../../common/cta/TextEntity';
import PlaneEnity from '../../common/cta/PlaneEntity';

type SceneOneProps = {
  onSceneChange: () => void;
};

const imagesSceneOne = [
  { src: '#Bengaluru', position: '-3 0 0.01', text: 'Bengaluru' },
  { src: '#Chennai', position: '-1.5 0 0.01', text: 'Chennai' },
  { src: '#Mumbai', position: '0 0 0.01', text: 'Mumbai' },
  { src: '#Hyderabad', position: '1.5 0 0.01', text: 'Hyderabad' },
  { src: '#NewDelhi', position: '3 0 0.01', text: 'New Delhi' },
];

const SceneOne: React.FC<SceneOneProps> = ({ onSceneChange }) => {
  const handleImageClickSceneOne = () => {
    console.log('Image clicked in scene 1');
    onSceneChange();
  };

  return (
    <Entity>
      <SkyEntity src="#sky1" setRotation="0 50 0 " />

     <Entity
        geometry={{ primitive: 'plane', width: 8, height: 2 }}
        material={{ src: '#plane', transparent: true, opacity: 1, color: '#000000', shader: 'standard', metalness: 1, roughness: 1 }}
        position="0 1 -6"
        rotation="0 0 0"
        mixin="animation-easing-plane"
      >
        <TextEntity setPosition="-3.5 0.8 0.01" text="Select City" color="#FEFEFE" align="left" width="4" />

        {/*  images */}

        {imagesSceneOne.map((image, index) => (
          <ImageEntity
            key={index}
            src={image.src}
            position={image.position}
            handleClick={handleImageClickSceneOne}
            imageText={image.text}
          />
        ))}
      </Entity>


    </Entity>
  );
};

export default SceneOne;
