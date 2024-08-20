import React from 'react'
import './aframe-components';
import { Entity } from 'aframe-react';
import BackButton from './BackButton';
import { SceneType } from './scenetype.type';
import SkyEntity from './SkyEntity';

type SceneProps = {
  onSceneChange: () => void;
  onBack: () => void;
};
const SceneMeetingRoomBig1: React.FC<SceneProps> = ({ onSceneChange, onBack }) => {

  console.log('SceneMeetingRoomBig1 rendered');
  const handleNavigation = () => {
    console.log('Button1 clicked in SceneMeetingRoomBig1');
    onSceneChange();
  };


  return (
   <Entity>
    <SkyEntity  src="#MeetingRoomBig1" setRotation='0 -120 0' />


    {/*  Back button */}

    <BackButton onBack={onBack} setPosition="-2 3 -3" />


    <BackButton setPosition='1 1 -2'  onBack={handleNavigation} />




   </Entity>
  )
}

export default SceneMeetingRoomBig1
