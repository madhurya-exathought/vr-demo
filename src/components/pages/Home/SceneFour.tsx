import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

interface SceneFourProps {
  onSceneChange: () => void;
 
}

const SceneFour: React.FC<SceneFourProps> = ({ onSceneChange }) => {


  
  const handleImageClickSceneFour = () => {
    console.log('Image clicked in scene 4');
    
    onSceneChange();
  };

  return (
    <Entity >
      <Entity primitive="a-sky" src="#sky5" />
      <Entity
        geometry={{ primitive: 'plane', width: 2, height: 1 }}
        material={{ color: 'white', opacity: 0.7 }}
        position="0 2 -3"
        rotation="0 0 0"
        className="clickable"
          events={{
            click: handleImageClickSceneFour
          }}
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
      >
          <Entity primitive="a-text" value="Enter the Office" color="black" align="center" position="0 0 0.01" width="4" />
   

     </Entity>

     
    </Entity>
  );
};

export default SceneFour;