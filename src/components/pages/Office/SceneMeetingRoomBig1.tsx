import React from 'react';

import { Entity } from 'aframe-react';
import NavigationButton from './NavigationButton';

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

      <NavigationButton onBack={onBack} setPosition="-2 3 -3" />

      <NavigationButton setPosition="1 1 -2" onBack={handleNavigation} />
    </Entity>
  );
};

export default SceneMeetingRoomBig1;
