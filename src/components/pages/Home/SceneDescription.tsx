import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import Header from '../../common/Header';

import './aframe-components';

interface SceneDescriptionProps {
  onSceneChange: () => void;
  visible: boolean;
}

const SceneDescription: React.FC<SceneDescriptionProps> = ({ onSceneChange, visible }) => {
  const handleClick = () => {
    console.log(' clicked or trigger pressed');
    onSceneChange();
  };

  return (
    <>
      <Header />

      <Entity visible={visible}>
        <Entity primitive="a-sky" src="#sky4" />

        <Entity
          primitive="a-ring"
          color="teal"
          position="-2.6 -0.5 -3.5"
          radius-inner="0.001"
          radius-outer="0.3"
          mixin="ring"
          className="clickable"
          make-visible="target: #descriptionBox1"
        />
        <Entity
          primitive="a-ring"
          color="teal"
          position="1.4 -2 -7.5"
          radius-inner="0.001"
          radius-outer="0.3"
          mixin="ring"
          className="clickable"
          make-visible="target: #descriptionBox2"
        />

        <Entity id="descriptionBox1" visible="false" position="-1.5 2 -4">
          <Entity primitive="a-plane" width="3" height="2" material="color: beige; opacity: 0.5" />
          <Entity primitive="a-text" value="This is a chair!" color="black" width="6" position="-1.3 0.5 0.01" />
        </Entity>

        <Entity id="descriptionBox2" visible="false" position="1.5 1 -4">
          <Entity primitive="a-plane" width="3" height="2" material="color: beige; opacity: 0.5" />
          <Entity primitive="a-text" value="This is a bag!" color="black" width="6" position="-1.3 0.5 0.01" />
        </Entity>

        {/* Back Button */}
        <Entity
          geometry={{ primitive: 'plane', width: 1, height: 0.25 }}
          material={{ color: 'black' }}
          position="-3 4 -4"
          className="clickable"
         
          text={{ value: 'Back', align: 'center', color: 'white', width: '3' }}
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
          events={{ click: handleClick, triggerdown: handleClick }}
        />
      </Entity>
    </>
  );
};
export { SceneDescription };
