import React from 'react';

import { Entity } from 'aframe-react';
import {NavigationButton} from './NavigationButton';

import SkyEntity from './SkyEntity';

type SceneProps = {
  onBack: () => void;
};
const SceneMeetingRoomAtEntrance: React.FC<SceneProps> = ({ onBack }) => {
  console.log('MeetingRoomAtEntrance rendered');

  return (
    <Entity>
      <SkyEntity src="#MeetingRoomAtEntrance" setRotation="0 -100 0" />

      {/*  Back button */}

      <NavigationButton onBack={onBack} setPosition="-1.5 0.5 -2" setRotation="0 0 -90" />
    </Entity>
  );
};

export default SceneMeetingRoomAtEntrance;
