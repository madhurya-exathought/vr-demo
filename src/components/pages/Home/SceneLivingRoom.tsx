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
        <Entity primitive="a-sky" src="#skyLivingRoom" rotation="0 0 0" />
        {/*  Dots */}
        <Entity
          primitive="a-ring"
          color="blue"
          position="2 2 -3.5"
          radius-inner="0.13"
          radius-outer="0.2"
          mixin="ring"
          className="clickable"
          make-visible="target: #descriptionBox1"
        />
        <Entity id="descriptionBox1" visible={false} position="2.5 3.5 -4">
          <Entity primitive="a-plane" width="3" height="2" material="color: beige; opacity: 0.5" />
          <Entity primitive="a-text" value="This is a window!" color="black" width="6" position="-1.3 0.5 0.01" />
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

        <Entity id="descriptionBox2" visible={false} position="-1 3 -5">
          {/*         <Entity
    geometry={{ primitive: 'plane', width: 4  , height: 3 }}
    material={{src :"#WallDetails"}}
    position="-1.3 0.5 0.01"
    rotation="0 0 0"
  
  /> */}

          <Entity primitive="a-plane" width="3" height="2" material="color: beige; opacity: 0.5" />
          <Entity primitive="a-text" value="This is a Wall!" color="black" width="6" position="-1.3 0.5 0.01" />
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
