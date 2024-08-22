
import React from 'react';
import { Entity } from 'aframe-react';
import { ImageEntityProps } from './scenetype.type';



const ImageEntity: React.FC<ImageEntityProps> = ({ src, position, handleClick,imageText }) => (
  <Entity
    geometry={{ primitive: 'plane', width: 0.9, height: 0.9 }}
    material={{ src, transparent: true,alphaTest: 0.9}}
    position={position}
    rotation="0 0 0"
    className="clickable"
    events={{ click: handleClick }}
    animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
    animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
  >
    
    {imageText &&  <Entity primitive="a-text" value={imageText} color="white" align="center" position="0 0 0.01" width="4" />}
    </Entity>
);

export default ImageEntity;
