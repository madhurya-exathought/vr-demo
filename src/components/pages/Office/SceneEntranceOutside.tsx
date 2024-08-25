import React, { useState } from 'react';
import { Entity } from 'aframe-react';
import { NavigationButton, NavigationButton2 } from './NavigationButton';
import NameTagEntity from './TextEntity';
import SkyEntity from './SkyEntity';
import { ScenesProps } from './scenetype.type';
import HotspotEntity from './HotspotEntity';
import { Entrance } from './HotspotText';

const SceneEntranceOutside: React.FC<ScenesProps> = ({ children, onSceneChange, onBack }) => {
  console.log('EntranceOutside rendered');

  const [forwardNameTag, setForwardNameTag] = useState(false);
  const handleNavigation = () => {
    console.log('Button clicked in EntranceOutside');
    onSceneChange();
  };

  return (
    <Entity>
      <SkyEntity src="#skyEntranceOutside" setRotation='0 0 0'/>

      {/*  Back button */}

      <NavigationButton2 onBack={onBack} setPosition="-2 3 -3" />

      <Entity position="1.75 0 -3">
        <NavigationButton
          onBack={handleNavigation}
          setPosition="0 0 0"
          setRotation="-60 0 60"
          events={{
            mouseenter: () => setForwardNameTag(true),
            mouseleave: () => setForwardNameTag(false),
          }}
        />
        {forwardNameTag && <NameTagEntity setPosition="0 0.5 0" text="Enter Office" width="2" />}
      </Entity>

      {children}

      <HotspotEntity visible={false} hotspotPosition="0.5 3 -2.5" boxPosition="3.5 3 -5" text={Entrance} />
    </Entity>
  );
};

export default SceneEntranceOutside;
