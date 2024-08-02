import React  from 'react';
import Header from '../../common/Header';
import 'aframe';
import backgroundImg from '../../../assets/images/b3.jpeg';
import './aframe-components'

const SceneInWorks: React.FC = () => {

  return (
    <>
      <Header />
      <a-scene vr-mode-ui="enabled: true" cursor="rayOrigin: mouse">
        <a-assets>
        
          <img id="backgroundImage" src={backgroundImg} alt="img" />
          <a-mixin
              id="ring"
              geometry="primitive: ring; width: 1.5; height: 1.5"
              material="color: teal; shader: flat"
              animation__scale="property: scale; to: 1.7 1.7 1.7; dur: 200; startEvents: mouseenter"
              animation__scale_reverse="property: scale; to: 1.3 1.3 1.3; dur: 200; startEvents: mouseleave"
            ></a-mixin>
       
        
        </a-assets>

        <a-entity position="0 0 6" rotation="0 0 0">
          <a-camera position="0 0 0" near="0.1"></a-camera>
        </a-entity>

        
          <a-sky src="#backgroundImage"></a-sky>
           
            <a-entity id="leftHand" laser-controls="hand: left" raycaster="objects: .clickable" line="color: #FF0000">
            {/*   <a-entity oculus-touch-controls="hand: left"></a-entity> */}
            </a-entity>
            <a-entity id="rightHand" laser-controls="hand: right" raycaster="objects: .clickable" line="color: #118A7E">
             {/*  <a-entity oculus-touch-controls="hand: right"></a-entity> */}
            </a-entity>

            <a-ring color="teal"  position='-2.6 -0.5 -3.5' radius-inner="0.001" radius-outer="0.3" mixin='ring' class='clickable' make-visible="target: #descriptionBox1"></a-ring>
            <a-ring color="teal"  position='1.4 -2 -3.5' radius-inner="0.001" radius-outer="0.3" mixin='ring' class='clickable' make-visible='target : #descriptionBox2'></a-ring>

            <a-entity id="descriptionBox1" visible="false" position="-1.5 2 0">
        <a-plane width="3" height="2" material="color: beige; opacity: 0.5;"></a-plane>
        <a-text value="This is a chair!" color="black" width="6" position="-1.3 0.5 0.01"></a-text>
      </a-entity>

      <a-entity id="descriptionBox2" visible="false" position="1.5 1 0">
        <a-plane width="3" height="2" material="color: beige; opacity: 0.5;"></a-plane>
        <a-text value="This is a bag!" color="black" width="6" position="-1.3 0.5 0.01"></a-text>
      </a-entity>
            
      </a-scene>
    </>
  );
};

export { SceneInWorks };
