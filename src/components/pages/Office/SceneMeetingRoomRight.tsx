import React from 'react';
import { Entity } from 'aframe-react';
import {NavigationButton} from './NavigationButton';
import SkyEntity from './SkyEntity';
import { SceneSpacesProps } from './scenetype.type';


const SceneMeetingRoomRight: React.FC<SceneSpacesProps> = ({ children,onBack }) => {
  console.log('SceneMeetingRoomRight rendered');

  return (
    <Entity>
      <SkyEntity src="#MeetingRoomRight" setRotation="0 -120 0" />

      {/*  Back button */}

      <NavigationButton onBack={onBack} setPosition="-0.5 0.05 0.5" setRotation="-90 0 -140" />
      {children}
    </Entity>
  );
};

export default SceneMeetingRoomRight;
