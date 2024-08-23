import React from 'react';
import { Entity } from 'aframe-react';
import './aframe-components';
import TextEntity from './TextEntity';

type hotspotType = {
  visible: boolean;
  hotspotPosition: string;
  boxPosition:string;
  rotation?: string;
};

const RandomText = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi quis quas corporis esse earum fugit quae maxime iusto similique laudantium impedit repellat possimus, dignissimos cumque qui laborum neque non!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos odio aperiam fugit eaque id officia placeat reprehenderit. Ea ducimus molestiae quis voluptatibus eveniet non iste porro aliquam vero, voluptates hic.`;

const HotspotEntity: React.FC<hotspotType> = ({ visible, hotspotPosition, rotation = '0 0 0', boxPosition }) => {
  return (
    <Entity>
      <Entity
        geometry={{ primitive: 'plane', width: 0.2, height: 0.2 }}
        material={{ src: '#hotspot', color: 'black', opacity: 0.99 }}
        position={hotspotPosition}
        rotation={rotation}
        className="clickable"
        animation="property: scale; to: 1.2 1.2 1.2; dir: alternate; loop: true; dur: 1000"
        animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
        animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
        make-visible="target: #descriptionBox"
      />

      <Entity id="descriptionBox" visible={visible} position={boxPosition}>

        <Entity 
            geometry={{primitive:"plane" ,width:3 ,height:2}}
             material={{src: '#box', color: 'grey', opacity: 0.5}} />
     <TextEntity text={RandomText} width='3' setPosition='0 0 0.01' />
    
      </Entity>
    </Entity>
  );
};

export default HotspotEntity;
