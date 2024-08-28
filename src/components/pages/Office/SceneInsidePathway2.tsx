import React, { useState } from 'react';
import { Entity } from 'aframe-react';
import { NavigationButton } from '../../common/cta/NavigationButton';
import NameTagEntity from '../../common/cta/TextEntity';
import SkyEntity from '../../common/cta/SkyEntity';
import { ScenesProps } from './scenetype.type';
import HotspotEntity from '../../common/cta/HotspotEntity';
import { InsidePathwayHotspotText } from '../../../constants/HotspotText';

const SceneInsidePathway2: React.FC<ScenesProps> = ({ children, onSceneChange, onBack }) => {
  console.log('SceneInsidePathway rendered');

  const [forwardNameTag, setForwardNameTag] = useState(false);
  const [backwardNameTag, setBackwardNameTag] = useState(false);

  const handleNavigation = () => {
    console.log('Button clicked in SceneInsidePathway');
    onSceneChange();
  };

  return (
    <Entity>
      <SkyEntity src="#InsidePathway" setRotation="0 90 0" />

      {/*  Back button */}

      <NavigationButton
        onBack={handleNavigation}
        setPosition="0 0.05 1"
        setRotation="-90 0 -120"
        events={{
          mouseenter: () => setBackwardNameTag(true),
          mouseleave: () => setBackwardNameTag(false),
        }}
      />
      {backwardNameTag && <NameTagEntity setPosition="0 0 1.5" text="Towards Cabin 1" width="3" rotation="0 180 0" />}

      <NavigationButton
        onBack={onBack}
        setPosition="0 0.05 -1.5"
        setRotation="-90 0 110"
        events={{
          mouseenter: () => setForwardNameTag(true),
          mouseleave: () => setForwardNameTag(false),
        }}
      />
      {forwardNameTag && <NameTagEntity text="Towards Foyer" setPosition="-0.25 0 -2" width="2" />}

      {children}

      <HotspotEntity visible={false} hotspotPosition="0.5 3 -2.5" boxPosition="3.5 3 -5" text={InsidePathwayHotspotText} />
    </Entity>
  );
};

export default SceneInsidePathway2;
