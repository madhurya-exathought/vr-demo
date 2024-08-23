import React, { useState } from 'react';
import { Entity } from 'aframe-react';
import { NavigationButton } from './NavigationButton';
import NameTagEntity from './TextEntity';
import SkyEntity from './SkyEntity';
import HotspotEntity from './HotspotEntity';
import { SceneNavProps } from './scenetype.type';

const SceneEntranceInside: React.FC<SceneNavProps> = ({ children, onSceneChange, onBack }) => {
  console.log('EntranceInside rendered');

  const [forwardNameTag, setForwardNameTag] = useState(false);
  const [backwardNameTag, setbackwardNameTag] = useState(false);
  const [sideNameTag, setsideNameTag] = useState(true);

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
          setPosition="1 0.5 2"
          setRotation="-90 0 -110"
          events={{
            mouseenter: () => setbackwardNameTag(true),
            mouseleave: () => setbackwardNameTag(false),
          }}
        />
        {backwardNameTag && <NameTagEntity width="3" text="Towards Exit" setPosition="1 0.5 2.75" rotation="0 180 0" />}
      </Entity>

      {/*  Forward Button */}
      <Entity>
        <NavigationButton
          onBack={handleNavigation}
          setPosition="0 0.05 -1.25"
          setRotation="-90 0 70"
          events={{
            mouseenter: () => setForwardNameTag(true),
            mouseleave: () => setForwardNameTag(false),
          }}
        />
        {forwardNameTag && <NameTagEntity width="3" text="Towards Bay 1" setPosition="0 0.5 -2" />}
      </Entity>

      {/* Side Button*/}
      <Entity>
        <NavigationButton
          onBack={handleNavigation1}
          setPosition="0.5 0.5 -.5"
          setRotation="-90 0 -30"
          events={{
            mouseenter: () => setsideNameTag(true),
            mouseleave: () => setsideNameTag(false),
          }}
        />
        {sideNameTag && <NameTagEntity width="2" text="Towards Hallway 1" setPosition="1 0.5 -.75" rotation="0 -90 0" />}
      </Entity>

      {children}

      <HotspotEntity visible={false} hotspotPosition="0.5 3 -2.5" boxPosition="3.5 3 -5" />
    </Entity>
  );
};

export default SceneEntranceInside;
