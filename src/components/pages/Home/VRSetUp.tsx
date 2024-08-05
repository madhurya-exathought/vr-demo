import React from 'react';
import 'aframe';
import { Entity} from 'aframe-react';

const VRSetup: React.FC = () => (
  <>
  
    <Entity
    laser-controls="hand: left"
    /*   oculus-touch-controls="hand: left" */
      line="color: red; opacity: 0.5;"
      raycaster="objects: .clickable"
      position="-0.5 1.5 0"
    />
    <Entity
       laser-controls="hand: right"
       /*   oculus-touch-controls="hand: right" */
      line="color: blue; opacity: 0.5;"
      raycaster="objects: .clickable"
      position="0.5 1.5 0"
    />

  
    <Entity primitive="a-camera">
      <Entity
        primitive="a-cursor"
        animation__click="property: scale; startEvents: click; from: 1 1 1; to: 0.1 0.1 0.1; dur: 150"
      />
    </Entity>
  </>
);

export default VRSetup;
