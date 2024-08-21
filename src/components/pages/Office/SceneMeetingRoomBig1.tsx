import React from 'react';

import { Entity } from 'aframe-react';
import {NavigationButton} from './NavigationButton';

import SkyEntity from './SkyEntity';
import { ScenesProps } from './scenetype.type';


const SceneMeetingRoomBig1: React.FC<ScenesProps> = ({ onSceneChange, onBack }) => {
  console.log('SceneMeetingRoomBig1 rendered');
  const handleNavigation = () => {
    console.log('Button1 clicked in SceneMeetingRoomBig1');
    onSceneChange();
  };

  return (
    <Entity>
      <SkyEntity src="#MeetingRoomBig1" setRotation="0 -120 0" />

      {/*  Back button */}

      <NavigationButton onBack={onBack} setPosition="-1 0.05 1" setRotation="-90 0 -140" />

      <NavigationButton setPosition="0 0.05 -1" onBack={handleNavigation} setRotation="-90 0 70"  />
    </Entity>
  );
};

export default SceneMeetingRoomBig1;
