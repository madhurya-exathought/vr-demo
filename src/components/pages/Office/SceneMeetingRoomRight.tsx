import React from 'react';
import { Entity } from 'aframe-react';
import {NavigationButton} from './NavigationButton';
import SkyEntity from './SkyEntity';

type SceneProps = {
  onBack: () => void;
};
const SceneMeetingRoomRight: React.FC<SceneProps> = ({ onBack }) => {
  console.log('SceneMeetingRoomRight rendered');

  return (
    <Entity>
      <SkyEntity src="#MeetingRoomRight" setRotation="0 -120 0" />

      {/*  Back button */}

      <NavigationButton onBack={onBack} setPosition="1 1 -2" setRotation="0 0 90" />
    </Entity>
  );
};

export default SceneMeetingRoomRight;
