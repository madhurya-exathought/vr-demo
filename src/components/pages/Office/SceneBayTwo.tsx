import React, { useState } from 'react';

import { Entity } from 'aframe-react';
import { NavigationButton } from '../../common/cta/NavigationButton';
import SkyEntity from '../../common/cta/SkyEntity';
import { ScenesProps } from './scenetype.type';
import NameTagEntity from '../../common/cta/TextEntity';


const SceneBayTwo: React.FC<ScenesProps> = ({ onSceneChange, children, onBack }) => {
 /*  console.log('SceneBayThree rendered');
 */
  const [forwardNameTag, setForwardNameTag] = useState(false);
  const [backwardNameTag, setBackwardNameTag] = useState(false);

  const handleNavigation = () => {
  /*   console.log('Button clicked in SceneBayThree');
    */ onSceneChange();
  };

  return (
    <Entity>
      <SkyEntity src="#Bay2" setRotation="0 110 0" />

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
        {backwardNameTag && <NameTagEntity setPosition="0 0.5 2.75" text="Towards Bay 1" width="3" rotation="0 180 0" />}
      </Entity>
      {/*  Forward Button */}
      <Entity>
        <NavigationButton
          onBack={handleNavigation}
          setPosition="0 0.05 -1.1"
          setRotation="-90 0 70"
          events={{
            mouseenter: () => setForwardNameTag(true),
            mouseleave: () => setForwardNameTag(false),
          }}
        />

        {forwardNameTag && <NameTagEntity setPosition="0 0.5 -1.1" text="Towards Bay 3" width="2" />}
      </Entity>

      {children}
    </Entity>
  );
};

export default SceneBayTwo;
