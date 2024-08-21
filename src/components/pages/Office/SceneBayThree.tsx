import React from 'react';

import { Entity } from 'aframe-react';
import {NavigationButton} from './NavigationButton';
import SkyEntity from './SkyEntity';
import { ScenesProps } from './scenetype.type';


const SceneBayThree: React.FC<ScenesProps> = ({ onSceneChange,children, onBack }) => {
  console.log('SceneBayThree rendered');
  const handleNavigation = () => {
    console.log('Button clicked in SceneBayThree');
    onSceneChange();
  };
  return (
    <Entity>
      <SkyEntity src="#Bay3" setRotation="0 90 0" />

      {/*  Back button */}

      <NavigationButton onBack={onBack} setPosition="0 0.5 2" setRotation="-90 0 -110" />

<NavigationButton onBack={handleNavigation} setPosition="0 0.5 -1.25" setRotation="-90 0 70" />
{children}
    </Entity>
  );
};

export default SceneBayThree;
