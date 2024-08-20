import React from 'react'
import './aframe-components';
import { Entity } from 'aframe-react';
import BackButton from './BackButton';
import { SceneType } from './scenetype.type';
import SkyEntity from './SkyEntity';

type SceneProps = {

  onBack: () => void;
};
const SceneMeetingRoomLeft: React.FC<SceneProps> = ({  onBack }) => {
  console.log('SceneMeetingRoomLeft rendered');

  
  return (
   <Entity>

<SkyEntity src='#MeetingRoomLeft' setRotation='0 -50 0' />
    


    {/*  Back button */}

    
    <BackButton onBack={onBack} setPosition="2 0.5 -2" setRotation='0 0 90'/>


    
   </Entity>
  )
}

export default SceneMeetingRoomLeft