import React from 'react';

import { Entity } from 'aframe-react';
import {NavigationButton} from './NavigationButton';

import SkyEntity from './SkyEntity';
import { SceneSpacesProps } from './scenetype.type';


const SceneMeetingRoomLeft: React.FC<SceneSpacesProps> = ({ children,onBack }) => {
  console.log('SceneMeetingRoomLeft rendered');

  return (
    <Entity>
      <SkyEntity src="#MeetingRoomLeft" setRotation="0 -50 0" />

      {/*  Back button */}

      <NavigationButton onBack={onBack} setPosition="0.7 0.05 1" setRotation="-90 0 -60" />

      {children}
    </Entity>
  );
};

export default SceneMeetingRoomLeft;
