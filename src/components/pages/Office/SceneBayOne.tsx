import React, { useState } from 'react';
import TextEntity from '../../common/cta/TextEntity';
import { Entity } from 'aframe-react';
import { NavigationButton } from '../../common/cta/NavigationButton';
import SkyEntity from '../../common/cta/SkyEntity';
import { ScenesProps } from './scenetype.type';


const SceneBayOne: React.FC<ScenesProps> = ({ children, onSceneChange, onBack }) => {
  const [forwardNameTag, setForwardNameTag] = useState(false);
  const [backwardNameTag, setBackwardNameTag] = useState(false);

  console.log('SceneBayOne rendered');

  const handleNavigation = () => {
    console.log('Button clicked in SceneBayOne');
    onSceneChange();
  };

  return (
    <Entity>
      <SkyEntity src="#Bay1" setRotation="0 110 0" />

      {/*  Back button */}
      <Entity>
        <NavigationButton
          onBack={onBack}
          setPosition="1 0.5 2"
          setRotation="-90 0 -110"
          events={{
            mouseenter: () => setBackwardNameTag(true),
            mouseleave: () => setBackwardNameTag(false),
          }}
        />
        {backwardNameTag && <TextEntity setPosition="1 0.5 2.75" text="Towards Foyer" width="3" rotation="0 180 0" />}
      </Entity>

      {/*  Forward Button */}
      <Entity>
        <NavigationButton
          onBack={handleNavigation}
          setPosition="0 0.05 -1.15"
          setRotation="-90 0 70"
          events={{
            mouseenter: () => setForwardNameTag(true),
            mouseleave: () => setForwardNameTag(false),
          }}
        />

        {forwardNameTag && <TextEntity setPosition="0 0.5 -1.25" text="Towards Bay 2" width="2" />}
      </Entity>

      {children}
    </Entity>
  );
};

export default SceneBayOne;
