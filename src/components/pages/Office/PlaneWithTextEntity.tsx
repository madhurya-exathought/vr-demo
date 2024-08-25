
import React from 'react';
import { Entity } from 'aframe-react';


type PlaneTextType={
   
    src?:string;
    Planeposition:string;
    textValue?:string;
    textPosition?:string;
    


}



const PlaneWithTextEntity: React.FC<PlaneTextType> = ({ src, Planeposition }) => (
    <Entity
    geometry={{ primitive: 'plane', width: 8, height:2 }}
    material={{src:{src}, color: 'black', opacity: 0.9 }}
    position={Planeposition}
    rotation="0 0 0"
    animation__scale="property: scale; from: 0 0 0; to: 1 1 1; dur: 1000; easing: easeInOutQuad; "
    
  >
  {/*   <Entity primitive="a-text" value={textValue}  color="#FEFEFE" 
            align="left" position={textPosition} width="4"
             /> */}
</Entity>
);

export default PlaneWithTextEntity;
