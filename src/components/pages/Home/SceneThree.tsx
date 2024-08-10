import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import BackButton from './BackButton';
import { SceneTwoThreeProps } from './scenetype.type';



const SceneThree: React.FC<SceneTwoThreeProps> = ({ onSceneChange ,onBack}) => {
  console.log('SceneThree rendered');

  const handleImageClickSceneThree = () => {
    console.log('Image clicked in scene 3');
    onSceneChange();
  };




  return (
    <Entity>
      <Entity primitive="a-sky" src="#sky1" />

      <Entity
        geometry={{ primitive: 'plane', width: 5, height: 2 }}
        material={{ color: 'beige', opacity: 0.5 }}
        position="0 2 -3"
        rotation="0 0 0"
      >
        <Entity primitive="a-text" value="Select Number of Rooms" color="black" align="center" position="0 0.8 0.01" width="4" />


             {/*  Back button */}

             <BackButton onBack={onBack} />
       

        <Entity
          geometry={{ primitive: 'plane', width: 0.9, height: 0.9 }}
          material={{ src: '#1BHK' }}
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
          material={{ src: '#2BHK' }}
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
          material={{ src: '#3BHK' }}
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
    
    </Entity>
  );
};

export default SceneThree;