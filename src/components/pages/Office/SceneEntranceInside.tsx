import React, { useState } from 'react';
import { Entity } from 'aframe-react';
import { NavigationButton } from '../../common/cta/NavigationButton';
import NameTagEntity from '../../common/cta/TextEntity';
import SkyEntity from '../../common/cta/SkyEntity';
import HotspotEntity from '../../common/cta/HotspotEntity';
import { SceneNavProps } from './scenetype.type';
import { FoyerHotspotText } from '../../../constants/HotspotText';

const SceneEntranceInside: React.FC<SceneNavProps> = ({ children, onSceneChange, onBack }) => {
 /*  console.log('EntranceInside rendered');
 */
  const [forwardNameTag, setForwardNameTag] = useState(false);
  const [backwardNameTag, setbackwardNameTag] = useState(false);
  const [sideNameTag, setsideNameTag] = useState(false);

  const handleNavigation = () => {
   /*  console.log('Button clicked in EntranceInside');
    */ onSceneChange('sceneBay1');
  };

  const handleNavigation1 = () => {
   /*  console.log('Button clicked in EntranceInside');
    */ onSceneChange('sceneInsidePathway');
  };

  return (
    <Entity>
      <SkyEntity src="#skyEntranceInside" setRotation="0 -90 0" />

      {/*  Back button */}
      <Entity>
        <NavigationButton
          onBack={onBack}
          setPosition="0 0 2"
          setRotation="-90 0 -110"
          events={{
            mouseenter: () => setbackwardNameTag(false),
            mouseleave: () => setbackwardNameTag(false),
          }}
        />
        {backwardNameTag && <NameTagEntity width="3" text="Towards Exit" setPosition="0 0.5 2.5" rotation="0 180 0" />}
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
          setPosition="0.5 0.5 -0.5"
          setRotation="-90 0 -30"
          events={{
            mouseenter: () => setsideNameTag(true),
            mouseleave: () => setsideNameTag(false),
          }}
        />
        {sideNameTag && <NameTagEntity width="2" text="Towards Hallway 1" setPosition="1 0.5 -.75" rotation="0 -90 0" />}
      </Entity>

      {children}

      <HotspotEntity visible={false} hotspotPosition="1.75 -.5 -4.3" boxPosition=" -0.25 0 -4.3" text={FoyerHotspotText} />
    </Entity>
  );
};

export default SceneEntranceInside;
