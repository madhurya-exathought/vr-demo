import React from 'react';
import { Entity } from 'aframe-react';

type HoverName = {
  setPosition: string;
  text: string;
  width: string;
  rotation?: string;
};

const RoomNameEntity: React.FC<HoverName> = ({ setPosition, text, width, rotation = '0 0 0' }) => {
  return <Entity primitive="a-text" value={text} color="black" align="center" position={setPosition} rotation={rotation} width={width} />;
};

export default RoomNameEntity;
