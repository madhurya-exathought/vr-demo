import React from 'react';

import { Entity } from 'aframe-react';
import {NavigationButton} from './NavigationButton';
import SkyEntity from './SkyEntity';
import { ScenesProps } from './scenetype.type';


const SceneBayOne: React.FC<ScenesProps> = ({ onSceneChange, onBack }) => {
  console.log('SceneBayOne rendered');
  const handleNavigation = () => {
    console.log('Button clicked in SceneBayOne');
    onSceneChange();
  };
  return (
    <Entity>
      <SkyEntity src="#Bay1" setRotation="0 110 0" />

      {/*  Back button */}

      <NavigationButton onBack={onBack} setPosition="1 0.5 -2" setRotation="0 0 90" />

      <NavigationButton onBack={handleNavigation} setPosition="1 1 -2" setRotation="0 0 -90" />
    </Entity>
  );
};

export default SceneBayOne;
