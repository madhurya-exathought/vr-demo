import React from 'react'
import './aframe-components';
import { Entity } from 'aframe-react';
import BackButton from './BackButton';
import { SceneType } from './scenetype.type';
import SkyEntity from './SkyEntity';


type SceneProps = {
  onSceneChange: (nextScene: SceneType) => void;
  onBack: () => void;
};

const SceneEntrance2Rooms: React.FC<SceneProps> = ({ onSceneChange, onBack }) => {

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
       <SkyEntity src='#Entrance2Rooms' setRotation='0 -40 0' />
   
    {/*  Back button */}

    <BackButton onBack={onBack} setPosition="1.5 0.5 -2" setRotation='0 0 180'/>


    <BackButton setPosition='1 1 -2' events={{click: handleNavigation1}} onBack={onBack} />

    <BackButton setPosition='1.5 1 -2' events={{click: handleNavigation2}} setRotation='0 0 -90' onBack={onBack} />

    <BackButton setPosition='2 1 -2' events={{click: handleNavigation3}} setRotation='0 0 90' onBack={onBack} />

  
  </Entity>
  )
}

export default SceneEntrance2Rooms
