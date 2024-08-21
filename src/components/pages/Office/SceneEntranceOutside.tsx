import React, { useState } from 'react';
import { Entity } from 'aframe-react';
import { NavigationButton, NavigationButton2 } from './NavigationButton';
import NameTagEntity from './NameTagEntity';
import SkyEntity from './SkyEntity';
import { ScenesProps } from './scenetype.type';

const SceneEntranceOutside: React.FC<ScenesProps> = ({ children, onSceneChange, onBack }) => {
  console.log('EntranceOutside rendered');

  const [forwardNameTag, setForwardNameTag] = useState(false);
  const handleNavigation = () => {
    console.log('Button clicked in EntranceOutside');
    onSceneChange();
  };

  return (
    <Entity>
      <SkyEntity src="#skyEntranceOutside" />

      {/*  Back button */}

      <NavigationButton2 onBack={onBack} setPosition="-2 3 -3" />

      <Entity>
        <NavigationButton
          onBack={handleNavigation}
          setPosition="0.75 1 -1.5"
          setRotation="-90 0 60"
          events={{
            mouseenter: () => setForwardNameTag(true),
            mouseleave: () => setForwardNameTag(false),
          }}
        />
        {forwardNameTag && <NameTagEntity setPosition="0.8 1 -2" text="Enter Office" width="2" />}
      </Entity>

      {children}
    </Entity>
  );
};

export default SceneEntranceOutside;
