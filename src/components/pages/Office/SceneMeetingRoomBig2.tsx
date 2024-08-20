import React from 'react';
import './aframe-components';
import { Entity } from 'aframe-react';
import NavigationButton from './NavigationButton';
import { SceneType } from './scenetype.type';
import SkyEntity from './SkyEntity';

type SceneProps = {
  onSceneChange: (nextScene: SceneType) => void;
  onBack: () => void;
};
const SceneMeetingRoomBig2: React.FC<SceneProps> = ({ onSceneChange, onBack }) => {
  console.log('SceenMeetingRoomBig2 rendered');
  const handleNavigation = () => {
    console.log('button pressed in sceneMeetingRoomBig2');
    onSceneChange('sceneEntrance2Rooms');
  };
  return (
    <Entity>
      <SkyEntity src="#MeetingRoomBig2" setRotation="0 -50 0" />

      {/*  Back button */}

      <NavigationButton onBack={onBack} setPosition="-2 3 -3" />

      <NavigationButton onBack={handleNavigation} setPosition="0 1 -2" setRotation="0 0 -90" />
    </Entity>
  );
};

export default SceneMeetingRoomBig2;
