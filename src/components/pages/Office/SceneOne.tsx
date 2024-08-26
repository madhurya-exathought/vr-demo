import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import ImageEntity from './ImageEntity';
import './aframe-components';
import SkyEntity from './SkyEntity';
import TextEntity from './TextEntity';
import PlaneEnity from './PlaneEntity';

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
      <SkyEntity src="#sky1" setRotation='0 50 0 ' />

    {/*   <PlaneEnity  id='sceneOne'  width={8} height={2} position='0 2 -6' visible={true}/>
 */}
      <Entity
        geometry={{ primitive: 'plane', width: 8, height: 2 }}
        material={{ src: '#plane'  ,  transparent: true,
          opacity: 1,
          color: '#000000',
          shader: 'standard',
          metalness: 1,
          roughness: 1}}
        position="0 2 -6"
        rotation="0 0 0"
      mixin='animation-easing-plane'     >

        <TextEntity setPosition='-3.5 0.8 0.01' text='Select City' color="#FEFEFE" align="left" width="4"/>

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

{/* <Entity
primitive="a-curvedimage"
src="#plane"
radius="5"
  theta-length="72"
  height="2"
  rotation="0 100 0"
 position="0 2 -4"
material={{
  transparent: true,
  opacity: 1,
  color: '#000000',
  shader: 'standard',
  metalness: 1,
  roughness: 1
}}
mixin='animation-easing-plane'
>

</Entity> */}
{/* 
      <Entity 
  primitive="a-curvedimage"
  src="#plane"
  height="2.0"
  /* width='8' *
  radius="4"
  theta-length="120"
  position="0 0 -3"
  rotation="0 120 0"
  scale="0.8 0.8 0.8" 
>

  </Entity> */}
   {/*    <a-curvedimage src="#my-image" height="2.0" radius="4" theta-length="120"   position="0 0 -3"
                 rotation="0 120 0" scale="0.8 0.8 0.8"></a-curvedimage>
  */}
    </Entity>
  );
};

export default SceneOne;
