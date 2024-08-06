import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

interface SceneOneProps {
  onSceneChange: () => void;
  
}

const SceneOne: React.FC<SceneOneProps> = ({ onSceneChange}) => {
  const handleImageClickSceneOne = () => {
   
      console.log('Image clicked in scene 1');
      onSceneChange();
    
  };

  
  return (
    <Entity >
      <Entity primitive="a-sky" src="#sky1" />

      <Entity
        geometry={{ primitive: 'plane', width: 8, height: 2 }}
        material={{ color: 'white', opacity: 0.5 }}
        position="0 2 -3"
        rotation="0 0 0"
      >
        <Entity primitive="a-text" value="Select City" color="black" align="center" position="0 0.8 0.01" width="4" />
        <Entity
          geometry={{ primitive: 'plane', width: 0.9, height: 0.9 }}
          material={{ src: '#image1' }}
          position="-3 0 0.01"
          rotation="0 0 0"
          className="clickable"
          events={{
            click: handleImageClickSceneOne
          }}
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
        />
    {/* Image 2 */}
<Entity
          geometry={{ primitive: 'plane', width: 0.9, height: 0.9 }}
          material={{ src: '#image2' }}
          position="-1.5 0 0.01"
          rotation="0 0 0"
          className="clickable"
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
          events={{
            click: handleImageClickSceneOne
          }}
        />
{/* Image 3 */}
<Entity
          geometry={{ primitive: 'plane', width: 0.9, height: 0.9 }}
          material={{ src: '#image3' }}
          position="0 0 0.01"
          rotation="0 0 0"
          className="clickable"
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
          events={{
            click: handleImageClickSceneOne
          }}
        />

{/* Image 4 */}
<Entity
          geometry={{ primitive: 'plane', width: 0.9, height: 0.9 }}
          material={{ src: '#image4' }}
          position="1.5 0 0.01"
          rotation="0 0 0"
          className="clickable"
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
          events={{
            click: handleImageClickSceneOne
          }} />

        {/* Image 5 */}
<Entity
          geometry={{ primitive: 'plane', width: 0.9, height: 0.9 }}
          material={{ src: '#image5' }}
          position="3 0 0.01"
          rotation="0 0 0"
          className="clickable"
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
          events={{
            click: handleImageClickSceneOne
          }}
        />
      </Entity>

     
    </Entity>
  );
};

export default SceneOne;