import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import {NavigationButton2} from './NavigationButton';
import { ScenesProps } from './scenetype.type';
import ImageEntity from './ImageEntity';
import SkyEntity from './SkyEntity';
import { THREE } from 'aframe';


const imagesSceneTwo = [
  { src: '#Villa', position: '-0.75 0 0.01' ,text:'Residential'},
  { src: '#Apartment', position: '0.75 0 0.01' ,text:'Commercial'},
 
];

const SceneTwo: React.FC<ScenesProps> = ({ onSceneChange, onBack }) => {
  console.log('SceneTwo rendered');

  const handleImageClickSceneTwo = () => {
    console.log('Image clicked in scene 2');
    onSceneChange();
  };

  return (
    <Entity>
      <SkyEntity src="#sky1" />

      <Entity
        geometry={{ primitive: 'plane', width: 3, height: 2 }}
        material={{src:'#plane', color: 'black', opacity: 0.9 }}
        position="0 2 -6"
        animation__scale="property: scale; from: 0 0 0; to: 1 1 1; dur: 1000; easing: easeInOutQuad; "
      >

{/* <Entity
  geometry={{ primitive: 'plane', width: 7.6, height: 4.54 }} // Adjusted to match width/height in meters
  material={{
    color: 'black',
    opacity: 1,
    shader: 'flat', // Ensures the color stays consistent without lighting
    side: 'double', // Makes the plane visible from both sides if needed
  }}
  position="0 2 -6"
  animation__scale="property: scale; from: 0 0 0; to: 1 1 1; dur: 1000; easing: easeInOutQuad;"
  shader="customShader"
  customShader={{
    uniforms: {
      borderRadius: { type: 'f', value: 40.0 }, // Custom shader for border-radius
      borderWidth: { type: 'f', value: 0.01 }, // Simulated border thickness
      borderColor: { type: 'v3', value: new THREE.Color(0xffffff) }, // Border color
      boxShadow: { type: 'v4', value: new THREE.Vector4(-1, 0, 4, 0.25) }, // Simulated box-shadow (requires shader adjustments)
      blurAmount: { type: 'f', value: 67.95 }, // Simulated blur
    },
  }}
> */}

        <Entity primitive="a-text" value="Select Property" color="white" align="center" position="0 0.8 0.01" width="4" />

        {/*  Back button */}

        <NavigationButton2 onBack={onBack} setPosition="-1 0.8 0.01" />

        {/* Images */}

        {imagesSceneTwo.map((image, index) => (
          <ImageEntity key={index} src={image.src} position={image.position} handleClick={handleImageClickSceneTwo} imageText={image.text}/>
        ))}
      </Entity>
    </Entity>
  );
};

export default SceneTwo;
