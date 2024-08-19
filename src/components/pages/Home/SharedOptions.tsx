import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import { SceneType } from './scenetype.type';

import './aframe-components';

interface SharedOptionsProps {
  onSceneChange: (nextScene: SceneType) => void;
}



const SharedOptions: React.FC<SharedOptionsProps> = ({ onSceneChange }) => {
  const handleImageClickSceneGarden = () => {
    console.log('Image clicked in Garden');
    onSceneChange('sceneGarden');
  };

  const handleImageClickSceneLivingRoom = () => {
    console.log('Image clicked in LivingRoom');
    onSceneChange('sceneLivingRoom');
  };

  const handleImageClickSceneBathroom = () => {
    console.log('Image clicked in Bathroom');
    onSceneChange('sceneBathroom');
  };

  const handleImageClickSceneBedroom1 = () => {
    console.log('Image clicked in Bedroom1');
    onSceneChange('sceneBedroom1');
  };

  const handleImageClickSceneBedroom2 = () => {
    console.log('Image clicked in Bedroom2');
    onSceneChange('sceneBedroom2');
  };

  return (
    <Entity>
      {/* arrow */}

      <Entity
        geometry={{ primitive: 'plane', width: 0.5, height: 0.5 }}
        material={{ src: '#backButton2', color: 'black', opacity: 0.8 }}
        position="-4 -1.5 -4"
        rotation="0 0 -90"
        className="clickable "
        animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
        animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
        make-visible="target: #selectionPlane"
        move-and-rotate
      />
      {/* options  */}
      <Entity
        id="selectionPlane"
        visible={false}
        geometry={{ primitive: 'plane', width: 13, height: 2.25 }}
        material={{ color: 'beige', opacity: 1 }}
        position="2 0 -4.2"
        rotation="0 0 0"
        animation__scale="property: scale; from: 0 0 0; to: 1 1 1; dur: 1000; easing: easeInOutQuad; "
      >
        <Entity
          geometry={{ primitive: 'plane', width: 1.5, height: 1 }}
          material={{ src: '#imagelivingroom' }}
          position="-5 0 0.01"
          rotation="0 0 0"
          className="clickable"
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
          events={{
            click: handleImageClickSceneLivingRoom,
          }}
        >
          <Entity primitive="a-text" value="Living Room" color="black" align="center" position="0 -0.8 0.01" width="4" />
        </Entity>

        <Entity
          geometry={{ primitive: 'plane', width: 1.5, height: 1 }}
          material={{ src: '#imagebedroom1' }}
          position="-2.5 0 0.01"
          rotation="0 0 0"
          className="clickable"
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
          events={{
            click: handleImageClickSceneBedroom1,
          }}
        >
          <Entity primitive="a-text" value="Bedroom 1" color="black" align="center" position="0 -0.8 0.01" width="4" />
        </Entity>

        <Entity
          geometry={{ primitive: 'plane', width: 1.5, height: 1 }}
          material={{ src: '#imagebedroom2' }}
          position="0 0 0.01"
          rotation="0 0 0"
          className="clickable"
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
          events={{
            click: handleImageClickSceneBedroom2,
          }}
        >
          <Entity primitive="a-text" value="Bedroom 2" color="black" align="center" position="0 -0.8 0.01" width="4" />
        </Entity>

        <Entity
          geometry={{ primitive: 'plane', width: 1.5, height: 1 }}
          material={{ src: '#imagebathroom' }}
          position="2.5 0 0.01"
          rotation="0 0 0"
          className="clickable"
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
          events={{
            click: handleImageClickSceneBathroom,
          }}
        >
          <Entity primitive="a-text" value="Bathroom" color="black" align="center" position="0 -0.8 0.01" width="4" />
        </Entity>
        <Entity
          geometry={{ primitive: 'plane', width: 1.5, height: 1 }}
          material={{ src: '#imagegarden' }}
          position="5 0 0.01"
          rotation="0 0 0"
          className="clickable"
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
          events={{
            click: handleImageClickSceneGarden,
          }}
        >
          <Entity primitive="a-text" value="Garden" color="black" align="center" position="0 -0.8 0.01" width="4" />
        </Entity>
      </Entity>
    </Entity>
  );
};

export default SharedOptions;
