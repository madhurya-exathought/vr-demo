import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

const VRSetup: React.FC = () => (
  <>
    <Entity laser-controls="hand: left" line="color: red; opacity: 0.5;" raycaster="objects: .clickable" position="-0.5 1.5 0" />
    <Entity laser-controls="hand: right" line="color: blue; opacity: 0.5;" raycaster="objects: .clickable" position="0.5 1.5 0" />

    <Entity primitive="a-camera">
      <Entity primitive="a-cursor" />
    </Entity>
  </>
);

export default VRSetup;
