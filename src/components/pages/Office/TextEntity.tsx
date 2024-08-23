import React from 'react';
import { Entity } from 'aframe-react';

type NameTagType = {
  setPosition: string;
  text: string;
  width: string;
  rotation?: string;
  align?:string
};

const TextEntity: React.FC<NameTagType> = ({ setPosition, text, width, rotation = '0 0 0' ,align='center'}) => {
  return <Entity primitive="a-text" value={text} color="#FEFEFE" align={align} position={setPosition} rotation={rotation} width={width} />;
};

export default TextEntity;
