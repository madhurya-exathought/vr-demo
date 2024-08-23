import React, { useState } from 'react';
import NameTagEntity from './TextEntity';
import { Entity } from 'aframe-react';
import { NavigationButton } from './NavigationButton';
import SkyEntity from './SkyEntity';
import { ScenesProps } from './scenetype.type';
import HotspotEntity from './HotspotEntity';

const SceneBayThree: React.FC<ScenesProps> = ({ onSceneChange, children, onBack }) => {
  console.log('SceneBayThree rendered');

  const [forwardNameTag, setForwardNameTag] = useState(false);
  const [backwardNameTag, setBackwardNameTag] = useState(false);

  const handleNavigation = () => {
    console.log('Button clicked in SceneBayThree');
    onSceneChange();
  };
  return (
    <Entity>
      <SkyEntity src="#Bay3" setRotation="0 90 0" />

      {/*  Back button */}
      <Entity>
        <NavigationButton
          onBack={onBack}
          setPosition="0 0.5 2"
          setRotation="-90 0 -110"
          events={{
            mouseenter: () => setBackwardNameTag(true),
            mouseleave: () => setBackwardNameTag(false),
          }}
        />

        {backwardNameTag && <NameTagEntity setPosition="0 0.5 2.75" text="Towards Bay 2" width="3" rotation="0 180 0" />}
      </Entity>
      {/* Forward button */}

      <Entity>
        <NavigationButton
          onBack={handleNavigation}
          setPosition="0 0.5 -1.25"
          setRotation="-90 0 70"
          events={{
            mouseenter: () => setForwardNameTag(true),
            mouseleave: () => setForwardNameTag(false),
          }}
        />
        {forwardNameTag && <NameTagEntity setPosition="0 0.5 -2" text="Towards Meeting Rooms" width="2" />}
      </Entity>

      {children}

      <HotspotEntity visible={false} hotspotPosition="0 3 -2.5" boxPosition="3.5 3 -5" />
    </Entity>
  );
};

export default SceneBayThree;
