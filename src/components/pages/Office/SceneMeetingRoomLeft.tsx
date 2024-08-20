import React from 'react';

import { Entity } from 'aframe-react';
import NavigationButton from './NavigationButton';

import SkyEntity from './SkyEntity';

type SceneProps = {
  onBack: () => void;
};
const SceneMeetingRoomLeft: React.FC<SceneProps> = ({ onBack }) => {
  console.log('SceneMeetingRoomLeft rendered');

  return (
    <Entity>
      <SkyEntity src="#MeetingRoomLeft" setRotation="0 -50 0" />

      {/*  Back button */}

      <NavigationButton onBack={onBack} setPosition="2 0.5 -2" setRotation="0 0 90" />
    </Entity>
  );
};

export default SceneMeetingRoomLeft;
