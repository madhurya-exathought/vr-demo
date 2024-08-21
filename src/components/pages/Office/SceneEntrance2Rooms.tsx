import React from 'react';

import { Entity } from 'aframe-react';
import {NavigationButton} from './NavigationButton';
import { SceneType } from './scenetype.type';
import SkyEntity from './SkyEntity';
import { SceneNavProps } from './scenetype.type';

const SceneEntrance2Rooms: React.FC<SceneNavProps> = ({children, onSceneChange, onBack }) => {
  console.log('SceneEntrance2Rooms rendered');
  const handleNavigation1 = () => {
    console.log('Button1 clicked in SceneEntrance2Rooms');
    onSceneChange('sceneMeetingRoomBig1');
  };

  const handleNavigation2 = () => {
    console.log('Button2 clicked in SceneEntrance2Rooms');
    onSceneChange('sceneMeetingRoomRight');
  };
  const handleNavigation3 = () => {
    console.log('Button3 clicked in SceneEntrance2Rooms');
    onSceneChange('sceneMeetingRoomLeft');
  };

  return (
    <Entity>
      <SkyEntity src="#Entrance2Rooms" setRotation="0 0 0" />

      {/*  Back button */}

      <NavigationButton onBack={onBack} setPosition="2 -1 -0.5" setRotation="-90 0 -40" />

      <NavigationButton setPosition="-0.5 -1 -2" events={{ click: handleNavigation1 }} onBack={onBack} setRotation="-90 0 140"/>

      <NavigationButton setPosition="0 1 -1 " events={{ click: handleNavigation2 }} setRotation="-90 0 90" onBack={onBack} />

      <NavigationButton setPosition="0 0 1.5" events={{ click: handleNavigation3 }} setRotation="-90 0 -110" onBack={onBack} />
   
      {children}
    </Entity>
  );
};

export default SceneEntrance2Rooms;
