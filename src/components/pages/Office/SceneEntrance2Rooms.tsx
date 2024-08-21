import React,{useState} from 'react';

import { Entity } from 'aframe-react';
import {NavigationButton} from './NavigationButton';

import SkyEntity from './SkyEntity';
import { SceneNavProps } from './scenetype.type';
import NameTagEntity from './NameTagEntity';

const SceneEntrance2Rooms: React.FC<SceneNavProps> = ({children, onSceneChange, onBack }) => {
  console.log('SceneEntrance2Rooms rendered');

  const [forwardNameTag, setForwardNameTag] = useState(true);
  const [backwardNameTag, setBackwardNameTag] = useState(true);
  const [LeftsideNameTag, setLeftSideNameTag] = useState(true);
  const [RightsideNameTag, setRightSideNameTag] = useState(true);



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

      <NavigationButton onBack={onBack} setPosition="2 -1 -0.5" setRotation="-90 0 -40"  events={{
            mouseenter: () => setBackwardNameTag(true),
            mouseleave: () => setBackwardNameTag(false),
          }}
        />
        {backwardNameTag && <NameTagEntity width="3" text="Towards Bay 3" setPosition="3.5 -2 -1"  rotation='0 -90 0'/>}
  

     {/*  Forward Button */}

      <NavigationButton setPosition="-0.5 -1 -2"  setRotation="-90 0 140" events={{
            mouseenter: () => setBackwardNameTag(true),
            mouseleave: () => setBackwardNameTag(false),
            click: handleNavigation1
          }}
        />
        {forwardNameTag && <NameTagEntity width="3" text="Towards Conference Room" setPosition="-1 0 -2"  rotation='0 90 0'/>}
  
    
    {/*  Right Button */}
      <NavigationButton setPosition="0 1 -1 " setRotation="-90 0 60"  events={{
            click: handleNavigation2 ,
            mouseenter: () => setBackwardNameTag(true),
            mouseleave: () => setBackwardNameTag(false),
          }}
        />
        {RightsideNameTag && <NameTagEntity width="2" text="Towards Cabin 2" setPosition="0 1 -1.5"  rotation='0 0 0'/>}
  

       {/*  Left Button */}
      <NavigationButton setPosition="0 0 1.5"  setRotation="-90 0 -110"  events={{
            click: handleNavigation3 ,
            mouseenter: () => setBackwardNameTag(true),
            mouseleave: () => setBackwardNameTag(false),
          }}
        />
        {LeftsideNameTag && <NameTagEntity width="3" text="Towards Cabin 3" setPosition="0 0 2"  rotation='0 180 0'/>}
  
   
      {children}
    </Entity>
  );
};

export default SceneEntrance2Rooms;
