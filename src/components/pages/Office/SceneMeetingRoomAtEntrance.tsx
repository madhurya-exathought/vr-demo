import React, { useState } from 'react';
import HotspotEntity from '../../common/cta/HotspotEntity';
import { Entity } from 'aframe-react';
import { NavigationButton } from '../../common/cta/NavigationButton';
import { SceneSpacesProps } from './scenetype.type';
import SkyEntity from '../../common/cta/SkyEntity';
import NameTagEntity from '../../common/cta/TextEntity';
import { Cabin1HotspotText } from '../../../constants/HotspotText';

const SceneMeetingRoomAtEntrance: React.FC<SceneSpacesProps> = ({ children, onBack }) => {
  /* console.log('MeetingRoomAtEntrance rendered');
 */
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
      {NameTag && <NameTagEntity text="Towards Hallway 1" width="2" setPosition="-1.7 0.5 -2.5 " />}

      {children}

      <HotspotEntity
        visible={false}
        hotspotPosition="0.5 3 -2.5"
        boxPosition="3.5 3 -5"
        height="1.5"
        width="3.35"
        text={Cabin1HotspotText}
      />
    </Entity>
  );
};

export default SceneMeetingRoomAtEntrance;
