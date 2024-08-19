import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import BackButton from './BackButton';
import { SceneSpacesProps } from './scenetype.type';

import './aframe-components';

const SceneLivingRoom: React.FC<SceneSpacesProps> = ({ children, onBack }) => {
  return (
    <>
      <Entity>
        <Entity primitive="a-sky" src="#skyroom" rotation="0 -130 0" dynamic-sky />
        {/*  Dots */}

        <Entity primitive='a-sphere' radius='0.15' position='-2 1.8 -4'  color='pink' className="clickable"
          make-visible="target: #descriptionBox3"
          /* animation="property: scale; to: 1.2 1.2 1.2; dir: alternate; loop: true; dur: 1000"  *//>


<Entity id="descriptionBox3" visible={true} position="-2.5 3.5 -5">
        <Entity primitive="a-plane" width="2" height="1" material="color: beige; opacity: 0.5" />
          <Entity primitive="a-text" value="This is the TV!" color="black" width="6" position="-1 0 0.01" 
          font="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json"/>
        </Entity>


        <Entity
          primitive="a-ring"
          color="blue"
          position="2 2 -3.5"
          radius-inner="0.0013"
          radius-outer="0.2"
          mixin="ring"
          className="clickable"
          make-visible="target: #descriptionBox1"
        />
        <Entity id="descriptionBox1" visible={false} position="2.5 3.5 -4">
          <Entity primitive="a-plane" width="1.8" height="1" material="color: beige; opacity: 0.5" />
          <Entity primitive="a-text" value="This is a Wall!" color="black" width="6" position="-.9 0 0.01" />
        </Entity>



        <Entity
          primitive="a-ring"
          position="0.5 2 -8.5"
          radius-inner="0.001"
          radius-outer="0.5"
          mixin="ring"
          className="clickable"
          make-visible="target: #descriptionBox2"
        />

        <Entity id="descriptionBox2" visible={false} position="0 3 -5">
        <Entity primitive="a-plane" width="2.25" height="1" material="color: beige; opacity: 0.5" />
          <Entity primitive="a-text" value="This is a Window!" color="black" width="6" position="-1 0 0.01" />
        </Entity>
    

        {/*  Back button */}
        <BackButton onBack={onBack} setPosition="-2 3 -2" />
        {/*  Shared options */}
        {children}







      </Entity>
    </>
  );
};

export default SceneLivingRoom;
