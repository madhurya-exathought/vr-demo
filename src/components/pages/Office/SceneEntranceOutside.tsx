import React from 'react';
import { Entity } from 'aframe-react';
import NavigationButton from './NavigationButton';
import './aframe-components';
import SkyEntity from './SkyEntity';

type SceneProps = {
  onSceneChange: () => void;
  onBack: () => void;
};

const SceneEntranceOutside: React.FC<SceneProps> = ({ onSceneChange, onBack }) => {
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

      <NavigationButton onBack={handleNavigation} setPosition="1 1 -2" setRotation="0 0 -90" />
    </Entity>
  );
};

export default SceneEntranceOutside;
