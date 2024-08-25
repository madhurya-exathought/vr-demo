import React from 'react';
import { Entity } from 'aframe-react';
import { SceneType } from './scenetype.type';

interface SharedEntityProps {
  image: string;
  setPosition: string;
  textValue: string;
  onSceneChange: (nextScene: SceneType) => void;
  nextScene: SceneType;
  isSelectionPlaneVisible:  boolean;
}

const SharedEntity: React.FC<SharedEntityProps> = ({
  image,
  setPosition,
  textValue,
  onSceneChange,
  nextScene,
  isSelectionPlaneVisible,
}) => {
  const NavigationHandler = () => {

    console.log(isSelectionPlaneVisible)
  
 
      console.log('Image clicked in ', textValue);
      onSceneChange(nextScene);
    
  };

  return (
    <Entity
      geometry={{ primitive: 'plane', width: 1.5, height: 1 }}
      material={{ src: image, color: 'beige' }}
      position={setPosition}
      rotation="0 0 0"
      className="clickable"
      mixin="animation-scale-on-hover "
      
      events={{
        click: NavigationHandler,
      }}
    >
      <Entity primitive="a-text" value={textValue} color="black" align="center" position="0 -0.8 0.01" width="4" />
    </Entity>
  );
};

export default SharedEntity;
