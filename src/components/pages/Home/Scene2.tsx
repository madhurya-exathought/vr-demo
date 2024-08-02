import React, { useState } from 'react';
import Header from '../../common/Header';
import 'aframe';
import backgroundImg from '../../../assets/images/b3.jpeg';
import backgroundImg1 from '../../../assets/images/background1.jpg';
import backgroundImg2 from '../../../assets/images/background2.jpg'
import bloreposter from '../../../assets/images/blorePoster.jpg';
import chposter from '../../../assets/images/chposter.jpg';

const Scenes: React.FC = () => {
  const [scene, setScene] = useState('sceneCity');

  const handleClick = () => {
    setScene('sceneProperty');
  };

  const handleClick2 = () => {
    setScene('sceneNoRooms');
  };

  const handleClick3 = () => {
    setScene('sceneCity');
  };

  const sceneCity = () => {
    return (
      <>
        <Header />

        <a-scene id="sceneCity" vr-mode-ui="enabled: true" cursor="rayOrigin: mouse">
          <a-assets>
            <img id="backgroundImage1" src={backgroundImg1} alt="img" />
            <img id="bloreposter" src={bloreposter} alt="img" />

            <a-mixin
              id="frame"
              geometry="primitive: plane; width: 1.5; height: 1.5"
              material="color: #ffffef; shader: flat"
              animation__scale="property: scale; to: 1.7 1.7 1.7; dur: 200; startEvents: mouseenter"
              animation__scale_reverse="property: scale; to: 1.3 1.3 1.3; dur: 200; startEvents: mouseleave"
            ></a-mixin>
          </a-assets>

          <a-entity position="0 0 6" rotation="0 0 0">
            <a-camera position="0 0 0" near="0.1"></a-camera>
          </a-entity>
          <a-sky src="#backgroundImage1"></a-sky>
          <a-plane position="0 1.5 -4" rotation="0 0 0" width="14" height="4" material="color: beige; opacity: 0.5;"></a-plane>

          <a-entity position="-5.5 3 -4" 
                  text="color: black; align: center; value: Select City ; width: 7;  ">
        </a-entity>
          <a-entity id="leftHand" laser-controls="hand: left" raycaster="objects: .clickable" line="color: #FF0000">
            <a-entity oculus-touch-controls="hand: left"></a-entity>
          </a-entity>
          <a-entity id="rightHand" laser-controls="hand: right" raycaster="objects: .clickable" line="color: #118A7E">
            <a-entity oculus-touch-controls="hand: right"></a-entity>
          </a-entity>

          <a-image id="sceneCity-1" position="-4.5 1.5 -3.5" src="#bloreposter" class="clickable" mixin="frame" onClick={handleClick} />
          <a-image id="sceneCity-2" position="-2.3 1.5 -3.5" src="#bloreposter" class="clickable" mixin="frame" onClick={handleClick} />
          <a-image id="sceneCity-3" position="0 1.5 -3.5" src="#bloreposter" class="clickable" mixin="frame" onClick={handleClick} />
          <a-image id="sceneCity-4" position="2.5 1.5 -3.5" src="#bloreposter" class="clickable" mixin="frame" onClick={handleClick} />
          <a-image id="sceneCity-5" position="5 1.5 -3.5" src="#bloreposter" class="clickable" mixin="frame" onClick={handleClick} />
        </a-scene>
      </>
    );
  };

  const sceneProperty = () => {
    return (
      <>
        <Header />
        <a-scene id="sceneProperty" vr-mode-ui="enabled: true" cursor="rayOrigin: mouse">
          <a-assets>
            <img id="backgroundImage2" src={backgroundImg} alt="img" />
            <img id="chposter" src={chposter} alt="img" />

            <a-mixin
              id="frame"
              geometry="primitive: plane; width: 1.5; height: 1.5"
              material="color: #ffffef; shader: flat"
              animation__scale="property: scale; to: 1.7 1.7 1.7; dur: 200; startEvents: mouseenter"
              animation__scale_reverse="property: scale; to: 1.3 1.3 1.3; dur: 200; startEvents: mouseleave"
            ></a-mixin>
          </a-assets>

          <a-entity position="0 0 6" rotation="0 0 0">
            <a-camera position="0 0 0" near="0.1"></a-camera>
          </a-entity>

          <a-entity id="leftHand" laser-controls="hand: left" raycaster="objects: .clickable" line="color: #FF0000">
          {/*   <a-entity oculus-touch-controls="hand: left"></a-entity> */}
          </a-entity>
          <a-entity id="rightHand" laser-controls="hand: right" raycaster="objects: .clickable" line="color: #118A7E">
          {/*   <a-entity oculus-touch-controls="hand: right"></a-entity> */}
          </a-entity>

          <a-sky src="#backgroundImage2"></a-sky>
          <a-plane position="0 1.5 -4" rotation="0 0 0" width="14" height="4" material="color: beige; opacity: 0.5;"></a-plane>

          <a-entity position="-5 3 -4" 
                  text="color: black; align: center; value: Select Property ; width: 7;  "></a-entity>
          <a-image id="sceneProperty-1" position="-2.3 1.5 -3.5" src="#chposter" class='clickable' mixin="frame" onClick={handleClick2} />
          <a-image id="sceneProperty-2" position="0 1.5 -3.5" src="#chposter" class="clickable" mixin="frame" onClick={handleClick2} />
          <a-image id="sceneProperty-3" position="2.5 1.5 -3.5" src="#chposter" class="clickable" mixin="frame" onClick={handleClick2} />
        
      
        </a-scene>
      </>
    );
  };

  const sceneNoRooms =() =>{
    return(
      <>
      <Header />
      
        <a-scene id="sceneNoRooms" vr-mode-ui="enabled: true" cursor="rayOrigin: mouse">
          <a-assets>

          <img id="backgroundImage3" src={backgroundImg2} alt="img" />
            <img id="chposter" src={chposter} alt="img" />


            <a-mixin
              id="frame"
              geometry="primitive: plane; width: 1.5; height: 1.5"
              material="color: #ffffef; shader: flat"
              animation__scale="property: scale; to: 1.7 1.7 1.7; dur: 200; startEvents: mouseenter"
              animation__scale_reverse="property: scale; to: 1.3 1.3 1.3; dur: 200; startEvents: mouseleave"
            ></a-mixin>
          </a-assets>

          <a-entity position="0 0 6" rotation="0 0 0">
            <a-camera position="0 0 0" near="0.1"></a-camera>
          </a-entity>

          <a-entity id="leftHand" laser-controls="hand: left" raycaster="objects: .clickable" line="color: #FF0000">
            <a-entity oculus-touch-controls="hand: left"></a-entity>
          </a-entity>
          <a-entity id="rightHand" laser-controls="hand: right" raycaster="objects: .clickable" line="color: #118A7E">
            <a-entity oculus-touch-controls="hand: right"></a-entity>
          </a-entity>

          <a-sky src="#backgroundImage3"></a-sky>
          <a-plane position="0 1.5 -4" rotation="0 0 0" width="14" height="4" material="color: beige; opacity: 0.5;"></a-plane>

          <a-entity position="-5 3 -4" 
                  text="color: black; align: center; value: Select Number of Rooms; width: 7;  "></a-entity>

          <a-image id="sceneNoRooms-1" position="-2.3 1.5 -3.5" src="#chposter" class='clickable' mixin="frame" onClick={handleClick3} />
          <a-image id="sceneNoRooms-2" position="0 1.5 -3.5" src="#chposter" class="clickable" mixin="frame" onClick={handleClick3} />
          <a-image id="sceneNoRooms-3" position="2.5 1.5 -3.5" src="#chposter" class="clickable" mixin="frame" onClick={handleClick3} />
        



            
        </a-scene>

        </>
    )
  }

  switch (scene) {
    case 'sceneCity':
      return sceneCity();
    case 'sceneProperty':
      return sceneProperty();
    case 'sceneNoRooms':
        return sceneNoRooms();
    default:
      return <Header />;
  }
};

export { Scenes };
