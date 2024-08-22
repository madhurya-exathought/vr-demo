import React, { useState } from 'react';
import HotspotEntity from './HotspotEntity';
import { Entity } from 'aframe-react';
import { NavigationButton } from './NavigationButton';
import NameTagEntity from './NameTagEntity';
import SkyEntity from './SkyEntity';
import { SceneSpacesProps } from './scenetype.type';

const SceneMeetingRoomLeft: React.FC<SceneSpacesProps> = ({ children, onBack }) => {
  console.log('SceneMeetingRoomLeft rendered');

  const [NameTag, setNameTag] = useState(false);

  return (
    <Entity>
      <SkyEntity src="#MeetingRoomLeft" setRotation="0 -50 0" />

      {/*  Back button */}

      <NavigationButton
        onBack={onBack}
        setPosition="0.7 0.05 1"
        setRotation="-90 0 -60"
        events={{
          mouseenter: () => setNameTag(true),
          mouseleave: () => setNameTag(false),
        }}
      />
      {NameTag && <NameTagEntity text="Towards Hallway" width="2" setPosition="0.75 0.5 1 " rotation="0 220 0" />}

      {children}
      <HotspotEntity visible={false} hotspotPosition='0 3 -2.5' boxPosition="3.5 3 -5" />
    </Entity>
  );
};

export default SceneMeetingRoomLeft;
