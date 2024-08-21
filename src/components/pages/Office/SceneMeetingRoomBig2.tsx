import React from 'react';

import { Entity } from 'aframe-react';
import {NavigationButton} from './NavigationButton';
import { SceneType } from './scenetype.type';
import SkyEntity from './SkyEntity';
import { SceneNavProps } from './scenetype.type';


const SceneMeetingRoomBig2: React.FC<SceneNavProps> = ({ children,onSceneChange, onBack }) => {
  console.log('SceenMeetingRoomBig2 rendered');
  const handleNavigation = () => {
    console.log('button pressed in sceneMeetingRoomBig2');
    onSceneChange('sceneMeetingRoomBig1');
  };
  return (
    <Entity>
      <SkyEntity src="#MeetingRoomBig2" setRotation="0 -50 0" />

      {/*  Back button */}

     {/*  <NavigationButton onBack={onBack} setPosition="-2 3 -3" />
 */}
      <NavigationButton onBack={handleNavigation} setPosition="0 1 -2" setRotation="-70 0 90" />
      {children}
    </Entity>
  );
};

export default SceneMeetingRoomBig2;
