import React from 'react';

import { Entity } from 'aframe-react';
import {NavigationButton} from './NavigationButton';
import { SceneSpacesProps } from './scenetype.type';
import SkyEntity from './SkyEntity';


const SceneMeetingRoomAtEntrance: React.FC<SceneSpacesProps> = ({ children,onBack }) => {
  console.log('MeetingRoomAtEntrance rendered');

  return (
    <Entity>
      <SkyEntity src="#MeetingRoomAtEntrance" setRotation="0 -100 0" />

      {/*  Back button */}

      <NavigationButton onBack={onBack} setPosition="-1.5 0.5 -2" setRotation="-60 0 90" />

      {children}
    </Entity>
  );
};

export default SceneMeetingRoomAtEntrance;
