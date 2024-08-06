import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

interface SceneThree {
  onSceneChange: () => void;
}

const SceneThree: React.FC<SceneThree> = ({ onSceneChange }) => {
  console.log('SceneThree rendered');

  const handleImageClickSceneThree = () => {
    console.log('Image clicked in scene 2');
    onSceneChange();
  };

  return (
    <Entity>
      <Entity primitive="a-sky" src="#sky3" />

      <Entity
        geometry={{ primitive: 'plane', width: 5, height: 2 }}
        material={{ color: 'beige', opacity: 0.5 }}
        position="0 2 -3"
        rotation="0 0 0"
      >
        <Entity primitive="a-text" value="Select Number of Rooms" color="black" align="center" position="0 0.8 0.01" width="4" />

        <Entity
          geometry={{ primitive: 'plane', width: 0.9, height: 0.9 }}
          material={{ src: '#imageRooms' }}
          position="-1.5 0 0.01"
          rotation="0 0 0"
          className="clickable"
          events={{
            click: handleImageClickSceneThree
          }}
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
        />
        <Entity
          geometry={{ primitive: 'plane', width: 0.9, height: 0.9 }}
          material={{ src: '#imageRooms' }}
          position="0 0 0.01"
          rotation="0 0 0"
          className="clickable"
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
          events={{
            click: handleImageClickSceneThree
          }}
        />

<Entity
          geometry={{ primitive: 'plane', width: 0.9, height: 0.9 }}
          material={{ src: '#imageRooms' }}
          position="1.5 0 0.01"
          rotation="0 0 0"
          className="clickable"
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
          events={{
            click: handleImageClickSceneThree
          }}
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