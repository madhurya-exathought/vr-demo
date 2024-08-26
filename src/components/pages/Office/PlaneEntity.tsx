
import React from 'react';
import { Entity } from 'aframe-react';


type PlaneType={
   
    id:string
   /*  src:string; */
    position:string;
    rotation?:string;
    visible:boolean
    width:number
    height:number


}



const PlaneEnity: React.FC<PlaneType> = ({id,rotation='0 0 0', visible,width,height, position }) => (

    
    <Entity
    id={id}
    visible={visible}
    geometry={{ primitive: 'plane', width: width, height: height}}
    material={{src: '#plane',
      transparent: true,
      opacity: 1,
      color: '#1b1111',
      shader: 'standard',
      metalness: 1,
      roughness: 1}}
    position={position}
    rotation={rotation}
   mixin='animation-easing-plane' >

  
</Entity>
);

export default PlaneEnity;
