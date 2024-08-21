import React, { useState } from 'react';

import { Entity } from 'aframe-react';
import { NavigationButton } from './NavigationButton';
import { SceneSpacesProps } from './scenetype.type';
import SkyEntity from './SkyEntity';
import NameTagEntity from './NameTagEntity';

const SceneMeetingRoomAtEntrance: React.FC<SceneSpacesProps> = ({ children, onBack }) => {
  console.log('MeetingRoomAtEntrance rendered');

  const [NameTag, setNameTag] = useState(false);

  return (
    <Entity>
      <SkyEntity src="#MeetingRoomAtEntrance" setRotation="0 -100 0" />

      {/*  Back button */}

      <NavigationButton
        onBack={onBack}
        setPosition="-1.3 0.5 -2"
        setRotation="-60 0 90"
        events={{
          mouseenter: () => setNameTag(true),
          mouseleave: () => setNameTag(false),
        }}
      />
      {NameTag && <NameTagEntity text="Towards Foyer" width="2" setPosition="-1.7 0.5 -2.5 " />}

      {children}
    </Entity>
  );
};

export default SceneMeetingRoomAtEntrance;
