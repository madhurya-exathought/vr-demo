import React, { useState } from 'react';
import { Entity } from 'aframe-react';
import { NavigationButton } from './NavigationButton';
import SkyEntity from './SkyEntity';
import { SceneSpacesProps } from './scenetype.type';
import NameTagEntity from './TextEntity';
import HotspotEntity from './HotspotEntity';
import { Cabin3HotspotText } from './HotspotText';

const SceneMeetingRoomRight: React.FC<SceneSpacesProps> = ({ children, onBack }) => {
  console.log('SceneMeetingRoomRight rendered');

  const [NameTag, setNameTag] = useState(false);

  return (
    <Entity>
      <SkyEntity src="#MeetingRoomRight" setRotation="0 -130 0" />

      {/*  Back button */}

      <NavigationButton
        onBack={onBack}
        setPosition="-0.5 0.05 0.5"
        setRotation="-90 0 -140"
        events={{
          mouseenter: () => setNameTag(true),
          mouseleave: () => setNameTag(false),
        }}
      />
      {NameTag && <NameTagEntity text="Towards Hallway" width="2" setPosition="-0.75 0.5 1 " rotation="0 150 0" />}
      {children}

      <HotspotEntity visible={false} hotspotPosition="0 3 -2.5" boxPosition="3.5 3 -5" height='1.5' width='3.25' text={Cabin3HotspotText}/>
    </Entity>
  );
};

export default SceneMeetingRoomRight;
