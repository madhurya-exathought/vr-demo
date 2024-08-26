import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import {NavigationButton2} from './NavigationButton';
import { ScenesProps } from './scenetype.type';
import ImageEntity from './ImageEntity';
import SkyEntity from './SkyEntity';
import TextEntity from './TextEntity';

const imagesSceneThree = [
  { src: '#1BHK', position: '-1.5 0 0.01' ,text:'1 Floor'},
  { src: '#2BHK', position: '0 0 0.01' ,text:'2 Floors'},
  { src: '#3BHK', position: '1.5 0 0.01',text:'3 Floors' },
];

const SceneThree: React.FC<ScenesProps> = ({ onSceneChange, onBack }) => {
  console.log('SceneThree rendered');

  const handleImageClickSceneThree = () => {
    console.log('Image clicked in scene 3');
    onSceneChange();
  };

  return (
    <Entity>
      <SkyEntity src="#sky1" setRotation='0 50 0 ' />

      <Entity
        geometry={{ primitive: 'plane', width: 5, height: 2. }}
        material={{src:'#plane', color: 'black', opacity: 0.9 }}
        position="0 2 -6"
        rotation="0 0 0"
        mixin='animation-easing-plane'    >

<TextEntity setPosition='-0.75 0.8 0.01' text='Select Number of Floors' color="#FEFEFE" align="center" width="4"/>

      

        {/*  Back button */}

        <NavigationButton2 onBack={onBack} setPosition="-2 0.8 0.01" />

        {/* Images */}

        {imagesSceneThree.map((image, index) => (
          <ImageEntity key={index} src={image.src} position={image.position} handleClick={handleImageClickSceneThree} imageText={image.text}/>
          
        ))}
      </Entity>
    </Entity>
  );
};

export default SceneThree;
