import React from 'react';
import { Entity } from 'aframe-react';

type NameTagType = {
  setPosition: string;
  text: string;
  width: string;
  rotation?: string;
};

const NameTagEntity: React.FC<NameTagType> = ({ setPosition, text, width, rotation = '0 0 0' }) => {
  return <Entity primitive="a-text" value={text} color="black" align="center" position={setPosition} rotation={rotation} width={width} />;
};

export default NameTagEntity;
