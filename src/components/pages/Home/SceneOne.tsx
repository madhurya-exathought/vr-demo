import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import ImageEntity from './ImageEntity';

type SceneOneProps = {
  onSceneChange: () => void;
};

const imagesSceneOne = [
  { src: '#Bengaluru', position: '-3 0 0.01' },
  { src: '#Chennai', position: '-1.5 0 0.01' },
  { src: '#Mumbai', position: '0 0 0.01' },
  { src: '#Hyderabad', position: '1.5 0 0.01' },
  { src: '#NewDelhi', position: '3 0 0.01' },
];

const SceneOne: React.FC<SceneOneProps> = ({ onSceneChange }) => {
  const handleImageClickSceneOne = () => {
    console.log('Image clicked in scene 1');
    onSceneChange();
  };

  return (
    <Entity>
      <Entity primitive="a-sky" src="#sky1" />

      <Entity
        geometry={{ primitive: 'plane', width: 8, height: 2 }}
        material={{ color: 'beige', opacity: 1 }}
        position="0 2 -3"
        rotation="0 0 0"
      >
        <Entity primitive="a-text" value="Select City" color="black" align="center" position="0 0.8 0.01" width="4" />

        {/*  image1 */}

        {imagesSceneOne.map((image, index) => (
          <ImageEntity key={index} src={image.src} position={image.position} handleClick={handleImageClickSceneOne} />
        ))}
      </Entity>


      
    </Entity>
  );
};

export default SceneOne;
