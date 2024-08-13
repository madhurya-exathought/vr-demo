import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

const VRSetup: React.FC = () => (
  <>
    <Entity laser-controls="hand: left" line="color: red; opacity: 0.5;" raycaster="objects: .clickable" position="-0.5 1.5 0" />
    <Entity laser-controls="hand: right" line="color: blue; opacity: 0.5;" raycaster="objects: .clickable" position="0.5 1.5 0" />


{/*     <Entity
    hand-tracking-controls="hand: left"
    laser-controls="hand: left"
    oculus-touch-controls="hand: left"
    raycaster="objects: .clickable"
    line="color: red; opacity: 0.5"
    
  />

  {/* Right hand /}
  <Entity
    hand-tracking-controls="hand: right"
    laser-controls="hand: right"
    oculus-touch-controls="hand: right"
    raycaster="objects: .clickable"
    line="color: blue; opacity: 0.5"
  /> */}

  
    <Entity primitive="a-camera">
      <Entity primitive="a-cursor" raycaster="objects: .clickable" />
    </Entity>
  </>
);

export default VRSetup;
