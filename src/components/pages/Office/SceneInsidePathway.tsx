import React from 'react';
import { Entity } from 'aframe-react';
import NavigationButton from './NavigationButton';

import SkyEntity from './SkyEntity';
import { ScenesProps } from './scenetype.type';


const SceneInsidePathway: React.FC<ScenesProps> = ({ onSceneChange, onBack }) => {
  console.log('SceneInsidePathway rendered');

  const handleNavigation = () => {
    console.log('Button clicked in SceneInsidePathway');
    onSceneChange();
  };

  return (
    <Entity>
      <SkyEntity src="#InsidePathway" setRotation="0 -90 0" />

      {/*  Back button */}

      <NavigationButton onBack={onBack} setPosition="0 0.5 -2" setRotation="0 0 90" />

      <NavigationButton onBack={handleNavigation} setPosition="0 1 -2" setRotation="0 0 -90" />
    </Entity>
  );
};

export default SceneInsidePathway;
