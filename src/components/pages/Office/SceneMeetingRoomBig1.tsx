import React, { useState } from 'react';
import HotspotEntity from './HotspotEntity';
import { Entity } from 'aframe-react';
import { NavigationButton } from './NavigationButton';
import NameTagEntity from './TextEntity';
import SkyEntity from './SkyEntity';
import { ScenesProps } from './scenetype.type';
import { ConferanceRoomHotspotText } from './HotspotText';

const SceneMeetingRoomBig1: React.FC<ScenesProps> = ({ onSceneChange, onBack }) => {
  console.log('SceneMeetingRoomBig1 rendered');

  const [forwardNameTag, setForwardNameTag] = useState(true);
  const [backwardNameTag, setBackwardNameTag] = useState(false);

  const handleNavigation = () => {
    console.log('Button1 clicked in SceneMeetingRoomBig1');
    onSceneChange();
  };

  return (
    <Entity>
      <SkyEntity src="#MeetingRoomBig1" setRotation="0 -120 0" />

      {/*  Back button */}

      <NavigationButton
        onBack={onBack}
        setPosition="-1 0.05 1"
        setRotation="-90 0 -140"
        events={{
          mouseenter: () => setBackwardNameTag(true),
          mouseleave: () => setBackwardNameTag(false),
        }}
      />
      {backwardNameTag && <NameTagEntity setPosition="-1.5 0 1.5" text="Towards Hallway" width="3" rotation="0 150 0" />}

      {/*  Forward Button */}
      <NavigationButton
        setPosition="0 0.05 -1"
        onBack={handleNavigation}
        setRotation="-90 0 70"
        events={{
          mouseenter: () => setForwardNameTag(true),
          mouseleave: () => setForwardNameTag(false),
        }}
      />

      {forwardNameTag && <NameTagEntity setPosition="0 0 -1.75" text="Inside Conference Room" width="2" />}
      <HotspotEntity visible={false} hotspotPosition="0 3 -2.5" boxPosition="3.5 3 -5" height='1.5' width='3.25' text={ConferanceRoomHotspotText}/>
    </Entity>
  );
};

export default SceneMeetingRoomBig1;
