
import React from 'react';
import { Entity } from 'aframe-react';
import { ImageEntityProps } from './scenetype.type';



const ImageEntity: React.FC<ImageEntityProps> = ({ src, position, handleClick }) => (
  <Entity
    geometry={{ primitive: 'plane', width: 0.9, height: 0.9 }}
    material={{ src, color: 'beige'}}
    position={position}
    rotation="0 0 0"
    className="clickable"
    events={{ click: handleClick }}
    animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
    animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
  />
);

export default ImageEntity;
