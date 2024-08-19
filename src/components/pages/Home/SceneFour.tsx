import React, { useState } from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import BackButton from './BackButton';
import { SceneTwoThreeProps } from './scenetype.type';
import './aframe-components'

import plant from '../../../assets/images/sky/one.glb'





const imageUrl= '#officeEntry'
const SceneFour: React.FC<SceneTwoThreeProps> = ({ onSceneChange, onBack }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [isVisible2, setIsVisible2] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true)
  }


  const handleMouseLeave = () => {
    setIsVisible(false)
  }


  const handleMouseEnter2 = () => {
    setIsVisible2(true)
  }


  const handleMouseLeave2 = () => {
    setIsVisible2(false)
  }


  const handleImageClickSceneFour = () => {
    console.log('Image clicked in scene 4');
    onSceneChange();
  };

  return (
    <Entity>



{/* <SkySphere imageUrl='../../../assets/images/sky/officeEntry1.jpg'
  /> */}

{/* <Entity primitive="a-sphere" radius="1000" segments-height="64" segments-width="64" position="0 0 0">
<Entity primitive="a-image" src="#officeEntry" scale="1000 1000 1000" />

</Entity> */}

{/* <Entity primitive="a-sphere" material={`src: url(${imageUrl});`} radius="1000" segments-height="64" segments-width="64" />
 */}
    <Entity primitive="a-sky" dynamic-sky
       src="#officeEntry"
      position="0 0 0"
        rotation='0 30 0' 

        material="opacity: 1"
  animation__fade={{
    property: 'material.opacity',
    from: 0.5,
    to: 1,
    dur: 1000,
    easing: 'easeInOutQuad',
    startEvents: 'loaded'
  }}
         /> 


<Entity position="-1 -.5 -5 " gltf-model={plant} scale="2 2 2"  ></Entity>


{/* <Entity
        primitive="a-sphere"
        radius="400"
        position="0 0 0"
        material={{
          shader: 'flat',
          src: '#officeEntry',
          side: 'back' 
        }}
      /> */}

      <Entity position='1.5 0 -5 ' 
       animation="property: scale; to: 1.2 1.2 1.2; dir: alternate; loop: true; dur: 1000">
      
     {/*  <Entity primitive='a-box' color="beige" depth="0.5" height="0.5" width="0.5"  rotation='0 -10 0'></Entity>
      */} <Entity primitive='a-sphere' color="beige" radius='0.25' rotation='0 -10 0'></Entity>
     
      <Entity
        geometry={{ primitive: 'plane', width: 0.4, height: 0.4 }}
        material={{ src: '#backButton', color: 'beige', opacity: 0.8 }}
        position="-0.09 0.11 0.3"
        rotation="0 0 -90"
        className="clickable"
        
        animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
        animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
        events={{
          click: handleImageClickSceneFour,
          mouseenter: handleMouseEnter,
          mouseleave: handleMouseLeave,
        }}
      />
       </Entity>

      {isVisible && (
        <Entity
          geometry={{ primitive: 'plane', width: 1, height: 0.5 }}
          material={{ color: 'white', opacity: 0.7 }}
          position="0.5 0.5 -3"
        >
          <Entity primitive="a-text" value="Enter Office" color="black" align="center" position="0 0 0.01" width="4" />
        </Entity>
      )}


<Entity
        geometry={{ primitive: 'plane', width: 0.2, height: 0.2 }}
        material={{ src: '#info'}}
        position="3 2 -2"
        rotation="0 -70 0"
        className="clickable"
        animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
        animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
        events={{
       
          mouseenter: handleMouseEnter2,
          mouseleave: handleMouseLeave2,
        }}
      />

{isVisible2 && (
        <Entity
          geometry={{ primitive: 'plane', width: 3, height: 0.5 }}
          material={{ color: 'white', opacity: 0.7 }}
          position="5 2 -2"
          rotation="0 -70 0"
        >
          <Entity primitive="a-text" value="Welcome to Exathought office tour " color="black" align="center" position="0 0 0.01" width="4" />
        </Entity>
      )}



      {/* Back button */}
      <BackButton onBack={onBack} setPosition="-2 3 -3"/>
    </Entity>
  );
};

export default SceneFour;
