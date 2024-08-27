import React, { useState } from 'react';
import { Entity } from 'aframe-react';
import { NavigationButton, NavigationButton2 } from '../../common/cta/NavigationButton';
import NameTagEntity from '../../common/cta/TextEntity';
import SkyEntity from '../../common/cta/SkyEntity';
import { ScenesProps } from './scenetype.type';
import HotspotEntity from '../../common/cta/HotspotEntity';
import { Entrance } from '../../../constants/HotspotText';

const SceneEntranceOutside: React.FC<ScenesProps> = ({ children, onSceneChange, onBack }) => {
  console.log('EntranceOutside rendered');

  const [forwardNameTag, setForwardNameTag] = useState(false);
  const handleNavigation = () => {
    console.log('Button clicked in EntranceOutside');
    onSceneChange();
  };

  return (
    <Entity>
      <SkyEntity src="#skyEntranceOutside" setRotation="0 0 0" />

      {/*  Back button */}

      <NavigationButton2 onBack={onBack} setPosition="-2 3 -3" />

      <Entity position="1.75 0 -3">
        <NavigationButton
          onBack={handleNavigation}
          setPosition="1.2 0 -1.6"
          setRotation="-60 0 60"
          scale="2 2 2"
          events={{
            mouseenter: () => setForwardNameTag(true),
            mouseleave: () => setForwardNameTag(false),
          }}
        />
        {forwardNameTag && <NameTagEntity setPosition="-0.4 0.5 -0.25" text="Enter Office" width="3" />}
      </Entity>

      {children}

      <HotspotEntity visible={false} hotspotPosition="0.5 3 -2.5" boxPosition="3.5 3 -5" text={Entrance} />

      <Entity primitive="a-sound" id="intro" src="#intro" autoplay={true} />
      {/*  <Entity sound="src: #intro; autoplay: true; " /> */}
    </Entity>
  );
};

export default SceneEntranceOutside;
