import React, { useState } from 'react';
import HotspotEntity from './HotspotEntity';
import { Entity } from 'aframe-react';
import { NavigationButton } from './NavigationButton';

import SkyEntity from './SkyEntity';
import { SceneNavProps } from './scenetype.type';
import NameTagEntity from './TextEntity';

const SceneEntrance2Rooms: React.FC<SceneNavProps> = ({ children, onSceneChange, onBack }) => {
  console.log('SceneEntrance2Rooms rendered');

  const [forwardNameTag, setForwardNameTag] = useState(false);
  const [backwardNameTag, setBackwardNameTag] = useState(false);
  const [LeftsideNameTag, setLeftSideNameTag] = useState(false);
  const [RightsideNameTag, setRightSideNameTag] = useState(false);

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
      <SkyEntity src="#Entrance2Rooms" setRotation="0 -30 0" />

      {/*  Back button */}

      <NavigationButton
        onBack={onBack}
        setPosition="3 -2.5 1.5"
        setRotation="-90 0 -60"
        events={{
          mouseenter: () => setBackwardNameTag(true),
          mouseleave: () => setBackwardNameTag(false),
        }}
      />
      {backwardNameTag && <NameTagEntity width="3" text="Towards Bay 3" setPosition="3 -2 1.5" rotation="0 -120 0" />}

      {/*  Forward Button */}

      <NavigationButton
        setPosition="0 0 -1"
        setRotation="-90 0 110"
        events={{
          mouseenter: () => setForwardNameTag(true),
          mouseleave: () => setForwardNameTag(false),
          click: handleNavigation1,
        }}
      />
      {forwardNameTag && <NameTagEntity width="3" text="Towards Conference Room" setPosition="0 0 -1.5" rotation="0 60 0" />}

      {/*  Right Button */}
      <NavigationButton
        setPosition="0.7 0 -1 "
        setRotation="-90 0 30"
        events={{
          click: handleNavigation2,
          mouseenter: () => setRightSideNameTag(true),
          mouseleave: () => setRightSideNameTag(false),
        }}
      />
      {RightsideNameTag && <NameTagEntity width="2" text="Towards Cabin 3" setPosition="1 0 -1.5" rotation="0 -30 0" />}

      {/*  Left Button */}
      <NavigationButton
        setPosition="-0.25 0.5 1"
        setRotation="-90 0 -140"
        events={{
          click: handleNavigation3,
          mouseenter: () => setLeftSideNameTag(true),
          mouseleave: () => setLeftSideNameTag(false),
        }}
      />
      {LeftsideNameTag && <NameTagEntity width="3" text="Towards Cabin 2" setPosition="-1 0 2" rotation="0 150 0" />}

      {children}

   
    </Entity>
  );
};

export default SceneEntrance2Rooms;
