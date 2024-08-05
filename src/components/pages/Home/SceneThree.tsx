import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

interface SceneThreeProps {
  onSceneChange: () => void;
  visible: boolean;
  
}

const SceneThree: React.FC<SceneThreeProps> = ({ onSceneChange, visible }) => {
  const handleImageClick = () => {
    console.log('Image clicked in scene 3');
    onSceneChange();
  };

  return (
    <Entity visible={visible}>
      <Entity primitive="a-sky" src="#sky3" />

      <Entity
        geometry={{ primitive: 'plane', width: 7, height: 2 }}
        material={{ color: 'white', opacity: 0.5 }}
        position="0 2 -3"
        rotation="0 0 0"
      >
        <Entity primitive="a-text" value="Select Number of Rooms" color="black" align="center" position="0 0.8 0.01" width="4" />

        <Entity
          geometry={{ primitive: 'plane', width: 0.9, height: 0.9 }}
          material={{ src: '#imageRooms' }}
          position="-2.5 0 0.01"
          rotation="0 0 0"
          className="clickable"
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
          events={{ click: handleImageClick, triggerdown: handleImageClick }}
        />

<Entity
          geometry={{ primitive: 'plane', width: 0.9, height: 0.9 }}
          material={{ src: '#imageRooms' }}
          position="-0.5 0 0.01"
          rotation="0 0 0"
          className="clickable"
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
          events={{ click: handleImageClick, triggerdown: handleImageClick }}
        />

<Entity
          geometry={{ primitive: 'plane', width: 0.9, height: 0.9 }}
          material={{ src: '#imageRooms' }}
          position="1.5 0 0.01"
          rotation="0 0 0"
          className="clickable"
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
          events={{ click: handleImageClick, triggerdown: handleImageClick }}
        />
      </Entity>
      {/*  Back button */}
      <Entity
          geometry={{ primitive: 'plane', width: 1, height: 0.25 }}
          material={{ color: 'black' }}
          position="-3 4 -4"
          className="clickable"
         
          text={{ value: 'Back', align: 'center', color: 'white', width: '3' }}
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
          
        />
    </Entity>
  );
};

export default SceneThree;