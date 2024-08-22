import React, { useState } from 'react';
import { Entity } from 'aframe-react';
import { NavigationButton } from './NavigationButton';
import NameTagEntity from './NameTagEntity';
import SkyEntity from './SkyEntity';
import { ScenesProps } from './scenetype.type';

const SceneInsidePathway: React.FC<ScenesProps> = ({ children,onSceneChange, onBack }) => {
  console.log('SceneInsidePathway rendered');

  const [forwardNameTag, setForwardNameTag] = useState(false);
  const [backwardNameTag, setBackwardNameTag] = useState(false);

  const handleNavigation = () => {
    console.log('Button clicked in SceneInsidePathway');
    onSceneChange();
  };

  return (
    <Entity>
      <SkyEntity src="#InsidePathway" setRotation="0 -90 0" />

      {/*  Back button */}

      <NavigationButton
        onBack={onBack}
        setPosition="0 0.05 1"
        setRotation="-90 0 -120"
        events={{
          mouseenter: () => setBackwardNameTag(true),
          mouseleave: () => setBackwardNameTag(false),
        }}
      />
      {backwardNameTag && <NameTagEntity setPosition="0 0 1.5" text="Towards Foyer" width="3" rotation="0 180 0" />}

      <NavigationButton
        onBack={handleNavigation}
        setPosition="0.5 0.05 -2"
        setRotation="-90 0 70"
        events={{
          mouseenter: () => setForwardNameTag(true),
          mouseleave: () => setForwardNameTag(false),
        }}
      />
      {forwardNameTag && <NameTagEntity text="Towards Cabin 1" setPosition="0.5 0 -2.5" width="2" />}

      {children}
    </Entity>
  );
};

export default SceneInsidePathway;
