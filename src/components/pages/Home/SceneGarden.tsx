import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import BackButton from './BackButton';
import { SceneSpacesProps } from './scenetype.type';

const SceneGarden: React.FC<SceneSpacesProps> = ({ children, onBack }) => {
  return (
    <Entity>
      <Entity primitive="a-sky" src="#skyGarden" rotation="0 -180 0" />

      <Entity
        geometry={{ primitive: 'plane', width: 0.6, height: 0.2 }}
        material={{ color: 'white', opacity: 0.5 }}
        position="0 2 -3"
        rotation="0 0 0"
      >
        <Entity primitive="a-text" value="Garden" color="black" align="center" position="0 0 0.01" width="4" />
      </Entity>
      {children}

      {/*  Back button */}
      <BackButton onBack={onBack} />
    </Entity>
  );
};

export default SceneGarden;
