import React, { useState } from 'react';
import HotspotEntity from '../../common/cta/HotspotEntity';
import { Entity } from 'aframe-react';
import { NavigationButton } from '../../common/cta/NavigationButton';
import NameTagEntity from '../../common/cta/TextEntity';
import SkyEntity from '../../common/cta/SkyEntity';
import { SceneNavProps } from './scenetype.type';

const SceneMeetingRoomBig2: React.FC<SceneNavProps> = ({ children, onSceneChange, onBack }) => {
  console.log('SceenMeetingRoomBig2 rendered');

  const [NameTag, setNameTag] = useState(false);

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
      <NavigationButton
        onBack={handleNavigation}
        setPosition="0 1 -2"
        setRotation="-70 0 90"
        events={{
          mouseenter: () => setNameTag(true),
          mouseleave: () => setNameTag(false),
        }}
      />
      {NameTag && <NameTagEntity text="Towards Hallway" width="3" setPosition="0 1 -2.75 " />}
      {children}
      {/* <HotspotEntity visible={false} hotspotPosition="0 3 -2.5" boxPosition="3.5 3 -5" /> */}
    </Entity>
  );
};

export default SceneMeetingRoomBig2;
