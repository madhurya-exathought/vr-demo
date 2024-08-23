import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import ImageEntity from './ImageEntity';
import './aframe-components';
import SkyEntity from './SkyEntity';

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
      <SkyEntity src="#sky1" />

      <Entity
        geometry={{ primitive: 'plane', width: 8, height: 2 }}
        material={{ src: '#plane', color: 'black', opacity: 0.9 }}
        position="0 2 -6"
        rotation="0 0 0"
        animation__scale="property: scale; from: 0 0 0; to: 1 1 1; dur: 1000; easing: easeInOutQuad; "
      >
        <Entity primitive="a-text" value="Select City" color="#FEFEFE" align="left" position="-3.5 0.8 0.01" width="4" />

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

      {/*  <Entity
        geometry={{ primitive: 'plane', width: 8, height: 2 }}
        material={{src:'#plane', color: 'grey', opacity: 0.8 }}
        position="0 0 -6"
        rotation="0 0 0"
        animation__scale="property: scale; from: 0 0 0; to: 1 1 1; dur: 1000; easing: easeInOutQuad; "
        
      >
        <Entity primitive="a-text" value="Select City" color="white" align="left" position="-3.5 0.8 0.01" width="4" />
</Entity> */}

      {/* 

      <a-curvedimage src="#my-image" height="2.0" radius="5" theta-length="120"   position="0 0 0"
                 rotation="0 100 0" scale="0.8 0.8 0.8"></a-curvedimage>
 */}
    </Entity>
  );
};

export default SceneOne;
