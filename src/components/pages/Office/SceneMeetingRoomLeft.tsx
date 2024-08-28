import React, { useState } from 'react';
import HotspotEntity from '../../common/cta/HotspotEntity';
import { Entity } from 'aframe-react';
import { NavigationButton } from '../../common/cta/NavigationButton';
import NameTagEntity from '../../common/cta/TextEntity';
import SkyEntity from '../../common/cta/SkyEntity';
import { SceneSpacesProps } from './scenetype.type';
import { Cabin2HotspotText } from '../../../constants/HotspotText';

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
      <HotspotEntity visible={false} hotspotPosition="0 3 -2.5" boxPosition="3.5 3 -5" height="1.5" width="3.25" text={Cabin2HotspotText} />
    </Entity>
  );
};

export default SceneMeetingRoomLeft;
