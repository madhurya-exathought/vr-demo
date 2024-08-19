import React from 'react';
import 'aframe';

import Header from '../../common/Header';
import img from '../../../assets/images/sky/office.jpg';
import plant from '../../../assets/images/sky/one.glb'
import chair from '../../../assets/images/sky/office_chair.glb'

import './aframe-components';

const SceneABC: React.FC = () => {
  return (
    <>
      <Header />
      <a-scene >
        <a-assets timeout="10000">
          <img id="img" src="../../../assets/images/sky/office.jpg" />

          <a-asset-item id="sample-model" src="/models/one.glb"></a-asset-item>
             </a-assets>
        <a-sky src={img} rotation="0 0 0" position='0 -20 -20'></a-sky>

         <a-light type="ambient" color="#fff"  />

         

         <a-entity position="-1 0.5 -1 " gltf-model={plant} scale="1 1 1"  ></a-entity>

         <a-entity position="-50 -100 -450 " gltf-model={chair} scale="0.8 0.8 0.8" rotation='180 0 180' ></a-entity>

        {/* Invisible walls */}
        {/* Front wall */}
        <a-box position="1 2.55 -8" width="20" height="2.7" depth="0.1" material="opacity:0 "></a-box>

        {/* Back wall */}
        <a-box position="0 2.55 8" width="5" height="2.7" depth="0.1" material="opacity: 0"></a-box>

        {/* Left wall */}
        <a-box position="-8 0 0" width="0.1" height="8" depth="8" material="opacity: 0"></a-box>

        {/* Right wall */}
        <a-box position="6 1 0" width="0.1" height="7" depth="7" material="opacity: 0"></a-box>

        {/* Ceiling */}
        <a-box position="0 2.4 0" width="4" height="0.1" depth="10" material="opacity: 0"></a-box>

        {/* Floor */}
        <a-box position="0 0 0" width="5" height="0.1" depth="4" material="opacity: 0"></a-box>

        <a-sphere
          position="1 1.6 -7.9"
          radius="0.2"
          color="#00FF00"
          className="clickable"
          hotspot="target: front-room; label: Front Room"
          animation="property: scale; to: 1.2 1.2 1.2; dir: alternate; loop: true; dur: 1000"
          animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
          animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
        ></a-sphere>

        {/* Back wall hotspot */}
        <a-sphere
          position="0 1.6 7.9"
          radius="0.2"
          color="#FF0000"
          hotspot="target: back-room; label: Back Room"
          animation="property: scale; to: 1.2 1.2 1.2; dir: alternate; loop: true; dur: 1000"
        ></a-sphere>

        {/* Left wall hotspot */}
        <a-sphere
          position="-7.9 1.6 0"
          radius="0.2"
          color="#0000FF"
          hotspot="target: left-room; label: Left Room"
          animation="property: scale; to: 1.2 1.2 1.2; dir: alternate; loop: true; dur: 1000"
        ></a-sphere>

        {/* Right wall hotspot */}
        <a-sphere
          position="5.9 1.6 0"
          radius="0.2"
          color="#FFFF00"
          hotspot="target: right-room; label: Right Room"
          animation="property: scale; to: 1.2 1.2 1.2; dir: alternate; loop: true; dur: 1000"
        ></a-sphere>

        <a-entity position="1 2 -7.9" text="value: Front ; align: center; width: 2"></a-entity> 

      

        
        <a-entity id="rig" movement-controls>
          <a-entity camera position="0 1.6 0" fov="70" look-controls></a-entity>
          <a-entity cursor="rayOrigin: mouse"></a-entity>
          <a-entity laser-controls="hand: right"></a-entity>
          <a-entity laser-controls="hand: left"></a-entity>
        </a-entity>
      </a-scene>
    </>
  );
};

export default SceneABC;
