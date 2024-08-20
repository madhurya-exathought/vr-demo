import React from 'react';
import { Entity } from 'aframe-react';
import {NavigationButton} from './NavigationButton';

import SkyEntity from './SkyEntity';
import { ScenesProps } from './scenetype.type';



const SceneEntranceOutside: React.FC<ScenesProps> = ({children, onSceneChange, onBack }) => {
  console.log('EntranceOutside rendered');
  const handleNavigation = () => {
    console.log('Button clicked in EntranceOutside');
    onSceneChange();
  };

  return (
    <Entity>
      <SkyEntity src="#skyEntranceOutside" />

      {/*  Back button */}

      <NavigationButton onBack={onBack} setPosition="-2 3 -3" />

      <NavigationButton onBack={handleNavigation} setPosition="0.75 1 -1.5" setRotation="0 0 90" />
    
      {children}    
    </Entity>
  );
};

export default SceneEntranceOutside;
