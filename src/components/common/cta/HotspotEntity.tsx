import React from 'react';
import { Entity } from 'aframe-react';
import '../../pages/Office/aframe-components';
import TextEntity from './TextEntity';

type hotspotType = {
  visible: boolean;
  hotspotPosition: string;
  boxPosition: string;
  rotation?: string;
  text?: string;
  width?: string;
  height?: string;
  textPosition?: string;
};

const RandomText = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi quis quas corporis esse earum fugit quae maxime iusto similique laudantium impedit repellat possimus, dignissimos cumque qui laborum neque non!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos odio aperiam fugit eaque id officia placeat reprehenderit. Ea ducimus molestiae quis voluptatibus eveniet non iste porro aliquam vero, voluptates hic.`;

const HotspotEntity: React.FC<hotspotType> = ({
  visible,
  hotspotPosition,
  rotation = '0 0 0',
  boxPosition,
  text = ``,
  width = '3',
  height = '1',
  textPosition = '-1.4 0 0.01',
}) => {
  return (
    <Entity>
      <Entity
        geometry={{ primitive: 'plane', width: 0.2, height: 0.2 }}
        material={{ src: '#hotspot', color: 'black', opacity: 0.99 }}
        position={hotspotPosition}
        rotation={rotation}
        className="clickable"
        mixin="animation-scale-on-hover " /*  animation-loop */
        make-visible="target: #descriptionBox"
      />

      <Entity id="descriptionBox" visible={visible} position={boxPosition}>
        <Entity
          geometry={{ primitive: 'plane', width: width, height: height }}
          material={{ src: '#box', color: 'grey', opacity: 0.99 }}
          rotation={rotation}
        />
        <TextEntity rotation={rotation} text={text} width="3" setPosition={textPosition} color="#FEFEFE" align="left" />
      </Entity>
    </Entity>
  );
};

export default HotspotEntity;
