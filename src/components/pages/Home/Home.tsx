import React, { useState } from 'react';
import Header from '../../common/Header';
import 'aframe';
import backgroundImg from '../../../assets/images/b3.jpeg';
import backgroundImg2 from '../../../assets/images/background1.jpg';
import bloreposter from '../../../assets/images/blorePoster.jpg';
import chposter from '../../../assets/images/chposter.jpg';

const Home: React.FC = () => {
  const [scene, setScene] = useState('initial');

  const handleClick = () => {
    setScene('scene1');
  };

  const handleClick2=() =>{
      setScene('initial')
  }

  return (
    <>
      <Header />
      <a-scene vr-mode-ui="enabled: true" cursor="rayOrigin: mouse">
        <a-assets>
          <img id="backgroundImage2" src={backgroundImg2} alt="img" />
          <img id="bloreposter" src={bloreposter} alt="img" />
          <img id="backgroundImage" src={backgroundImg} alt="img" />
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

        

        {scene === 'initial' ? (
          <>
            <a-sky src="#backgroundImage2"></a-sky>
            <a-plane position="0 1.5 -4" rotation="0 0 0" width="14" height="4" material="color: beige; opacity: 0.5;"></a-plane>

            <a-entity id="leftHand" laser-controls="hand: left" raycaster="objects: .clickable" line="color: #FF0000">
              <a-entity oculus-touch-controls="hand: left"></a-entity>
            </a-entity>
            <a-entity id="rightHand" laser-controls="hand: right" raycaster="objects: .clickable" line="color: #118A7E">
              <a-entity oculus-touch-controls="hand: right"></a-entity>
            </a-entity>

            <a-entity position="-5.5 3 -4" 
                  text="color: black; align: center; value: Select City ; width: 7;  "></a-entity>

            <a-image id='poster5' position="-4.5 1.5 -3.5" src="#bloreposter" class='clickable' mixin='frame' onClick={handleClick} />
            <a-image id='poster1' position="-2.3 1.5 -3.5" src="#bloreposter" class='clickable' mixin='frame' onClick={handleClick} />
            <a-image id='poster2' position="0 1.5 -3.5" src="#bloreposter" class='clickable' mixin='frame' onClick={handleClick} />
            <a-image id='poster3' position="2.5 1.5 -3.5" src="#chposter" class='clickable' mixin='frame' onClick={handleClick} />
            <a-image id='poster4' position="5 1.5 -3.5" src="#chposter" class='clickable' mixin='frame' onClick={handleClick} />
          </>
        ) : (
          <>

   
            <a-sky src={backgroundImg}></a-sky>
            <a-plane position="0 1.5 -4" rotation="0 0 0" width="14" height="4" material="color: beige; opacity: 0.5;"></a-plane>

          {/*   <a-entity id="leftHand" laser-controls="hand: left" raycaster="objects: .clickable" line="color: #FF0000">
              <a-entity oculus-touch-controls="hand: left"></a-entity>
            </a-entity>
            <a-entity id="rightHand" laser-controls="hand: right" raycaster="objects: .clickable" line="color: #118A7E">
              <a-entity oculus-touch-controls="hand: right"></a-entity>
            </a-entity>

            <a-entity position="-5.5 3 -4" 
                  text="color: black; align: center; value: Select Property ; width: 7;  "></a-entity>

            <a-image id='posterx' position="-2.3 1.5 -3.5" src="#bloreposter" mixin='frame' onClick={handleClick2}/>
            <a-image id='posterx1' position="0 1.5 -3.5" src="#bloreposter" class='clickable' mixin='frame' onClick={handleClick2}/> */}
          </>
        )}
      </a-scene>
    </>
  );
};

export { Home };
