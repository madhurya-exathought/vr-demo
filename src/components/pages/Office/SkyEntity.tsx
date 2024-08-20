
import React from 'react';
import { Entity } from 'aframe-react';
import { SkyEntityProps } from './scenetype.type';
import './aframe-components'



const SkyEntity: React.FC<SkyEntityProps> = ({ src, setRotation='0 0 0' }) => (


    <Entity
    primitive="a-sky"
    src={src}
    material="opacity: 1"
    rotation={setRotation}
    animation__fade={{
      property: 'material.opacity',
      from: 0.5,
      to: 1,
      dur: 1000,
      easing: 'easeInOutQuad',
      startEvents: 'loaded',
    }}
    dynamic-sky
  />
 
);

export default SkyEntity;
