import React, { useEffect, useState } from 'react';
import { Entity } from 'aframe-react';

const VRSetup = () => {
  const [isWebXRSupported, setIsWebXRSupported] = useState(false);
  const [isInVRMode, setIsInVRMode] = useState(false);


   // Check WebXR support on component mount
   useEffect(() => {
    checkWebXRSupport();
  }, []);


    // Event listeners to track VR session state
    useEffect(() => {
      if (!isWebXRSupported || !navigator.xr) return;

      const xr = navigator.xr as any; // Type assertion
      const onSessionStart = () => setIsInVRMode(true);
      const onSessionEnd = () => setIsInVRMode(false);

      xr.addEventListener('sessionstart', onSessionStart);
      xr.addEventListener('sessionend', onSessionEnd);

      // Cleanup event listeners on component unmount
      return () => {
        xr.removeEventListener('sessionstart', onSessionStart);
        xr.removeEventListener('sessionend', onSessionEnd);
      };
    }, [isWebXRSupported]);

// Function to check WebXR support
  const checkWebXRSupport = () => {
    if ('xr' in navigator) {
      const xr = (navigator as any).xr;
      xr.isSessionSupported('immersive-vr').then((supported: boolean) => {
        if (supported) {
          setIsWebXRSupported(supported);
          console.log('WebXR  supported,', supported);
        } else {
          setIsWebXRSupported(false);
          console.log('WebXR not supported');
        }
      });
    }
  };



 
  return (
    <>
      {/* Left and Right Controllers */}
      <Entity
        laser-controls="hand: left"
        line="color: red; opacity: 0.5;"
        raycaster="objects: .clickable"
        position="-0.5 1.5 0"
      />
      <Entity
        laser-controls="hand: right"
        line="color: blue; opacity: 0.5;"
        raycaster="objects: .clickable"
        position="0.5 1.5 0"
      />



       {isWebXRSupported && isInVRMode ?  (
  <Entity primitive="a-camera" position="0 4.6 0" rotation="0 50 0">
    <Entity
      primitive="a-cursor"
      position="1 1 1"
      raycaster="objects: .clickable"
    />
  </Entity>
) : (
  <Entity primitive="a-camera" position="0 1.6 0.55" rotation="0 150 0">
    <Entity
      primitive="a-cursor"
      raycaster="objects: .clickable"
      position="0 0 -1"
      geometry="primitive: ring; radiusInner: 0.001; radiusOuter: 0.002"
      material="color: white; shader: flat"
      cursor="fuse: false; rayOrigin: mouse"
    />
    
  </Entity>
)}
    </>
  );
};

export default VRSetup;
