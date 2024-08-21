import React, { useState } from 'react';
import { Entity } from 'aframe-react';
import { NavigationButton } from './NavigationButton';
import NameTagEntity from './NameTagEntity';
import SkyEntity from './SkyEntity';

import { SceneNavProps } from './scenetype.type';

const SceneEntranceInside: React.FC<SceneNavProps> = ({ children, onSceneChange, onBack }) => {
  console.log('EntranceInside rendered');

  const [forwardNameTag, setForwardNameTag] = useState(false);
  const [backwardNameTag, setbackwardNameTag] = useState(false);
  const [sideNameTag, setsideNameTag] = useState(false);

  const handleNavigation = () => {
    console.log('Button clicked in EntranceInside');
    onSceneChange('sceneBay1');
  };

  const handleNavigation1 = () => {
    console.log('Button clicked in EntranceInside');
    onSceneChange('sceneInsidePathway');
  };

  return (
    <Entity>
      <SkyEntity src="#skyEntranceInside" setRotation="0 -90 0" />

      {/*  Back button */}
      <Entity>
        <NavigationButton
          onBack={onBack}
          setPosition="0 0.5 1.25"
          setRotation="-90 0 -120"
          events={{
            mouseenter: () => setbackwardNameTag(true),
            mouseleave: () => setbackwardNameTag(false),
          }}
        />
        {backwardNameTag && <NameTagEntity width="3" text="Towards Exit" setPosition="0 0.5 1.75" rotation="0 180 0" />}
      </Entity>

      {/*  Forward Button */}
      <Entity>
        <NavigationButton
          onBack={handleNavigation}
          setPosition="0 1 -2"
          setRotation="-90 0 90"
          events={{
            mouseenter: () => setForwardNameTag(true),
            mouseleave: () => setForwardNameTag(false),
          }}
        />
        {forwardNameTag && <NameTagEntity width="3" text="Towards Bay 1" setPosition="-0.5 1 -2.75" />}
      </Entity>

      {/* Side Button*/}
      <Entity>
        <NavigationButton
          onBack={handleNavigation1}
          setPosition="0.5 1 -1.2"
          setRotation="-90 0 -60"
          events={{
            mouseenter: () => setsideNameTag(true),
            mouseleave: () => setsideNameTag(false),
          }}
        />
        {sideNameTag && <NameTagEntity width="2" text="Towards Hallway 1" setPosition="1.5 1 -1.75" rotation="0 -90 0" />}
      </Entity>

      {children}
    </Entity>
  );
};

export default SceneEntranceInside;
