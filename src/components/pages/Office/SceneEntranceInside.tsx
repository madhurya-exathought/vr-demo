import React from 'react';
import { Entity } from 'aframe-react';
import NavigationButton from './NavigationButton';

import SkyEntity from './SkyEntity';

import { SceneNavProps } from './scenetype.type';


const SceneEntranceInside: React.FC<SceneNavProps> = ({ onSceneChange, onBack }) => {
  console.log('EntranceInside rendered');
  const handleNavigation = () => {
    console.log('Button clicked in EntranceInside');
    onSceneChange('sceneBay1');
  };

  const handleNavigation1 = () => {
    console.log('Button clicked in EntranceInside');
    onSceneChange('sceneInsidePathway');
  };

  return (
    <Entity>
      <SkyEntity src="#skyEntranceInside" setRotation="0 -90 0" />

      {/*  Back button */}

      <NavigationButton onBack={onBack} setPosition="0 0.5 -2" setRotation="0 0 90" />

      <NavigationButton onBack={handleNavigation} setPosition="0 1 -2" setRotation="0 0 -90" />

      <NavigationButton onBack={handleNavigation1} setPosition="0.5 1 -1.2" setRotation="0 0 135" />
    </Entity>
  );
};

export default SceneEntranceInside;
