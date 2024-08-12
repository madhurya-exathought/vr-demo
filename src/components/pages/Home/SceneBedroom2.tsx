import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import BackButton from './BackButton';
import { SceneSpacesProps } from './scenetype.type';

const SceneBedroom2: React.FC<SceneSpacesProps> = ({ children, onBack }) => {
  return (
    <Entity>
      <Entity primitive="a-sky" src="#skyBedroom2" />

      <Entity
        geometry={{ primitive: 'plane', width: 1, height: 0.2 }}
        material={{ color: 'white', opacity: 0.5 }}
        position="0 2 -3"
        rotation="0 0 0"
      >
        <Entity primitive="a-text" value="Bedroom2" color="black" align="center" position="0 0 0.01" width="4" />
      </Entity>

      {/*  Back button */}
      <BackButton onBack={onBack} setPosition="-3 4 -3"/>
      {/*  Shared Options */}
      {children}
    </Entity>
  );
};

export default SceneBedroom2;
