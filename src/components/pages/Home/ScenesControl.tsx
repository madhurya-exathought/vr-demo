import React, { useState } from 'react';
import SceneOne from './SceneOne';
import SceneTwo from './SceneTwo';
import { Scene } from 'aframe-react';
import VRSetup from './VRSetUp';
import Header from '../../common/Header';
import SceneThree from './SceneThree';
import { SceneDescription } from './SceneDescription';

const ScenesControl = () => {
  const [currentScene, setCurrentScene] = useState<'sceneOne' | 'sceneTwo' | 'sceneThree' | 'sceneDescription'>('sceneDescription');

  const handleSceneChange = () => {
    switch (currentScene) {
      case 'sceneOne':
        setCurrentScene('sceneTwo');
        break;
      case 'sceneTwo':
        setCurrentScene('sceneThree');
        break;
      case 'sceneThree':
        setCurrentScene('sceneDescription');
        break;

      case 'sceneDescription':
        setCurrentScene('sceneOne');
        break;

      default:
        setCurrentScene('sceneOne');
        break;
    }
  };
  return (
    <>
      <Header />
      <Scene vr-mode-ui="enabled: true">
        <a-assets>
          <img id="sky1" src={require('../../../assets/images/background1.jpg')} alt="sky1" />
          <img id="sky2" src={require('../../../assets/images/background2.jpg')} alt="sky2" />
          <img id="sky3" src={require('../../../assets/images/background7.jpg')} alt="sky3" />
          <img id="sky4" src={require('../../../assets/images/b3.jpeg')} alt="sky4" />
          <img id="image1" src={require('../../../assets/images/blorePoster.jpg')} alt="image1" />
          <img id="image2" src={require('../../../assets/images/chposter.jpg')} alt="image2" />
          <img id="image3" src={require('../../../assets/images/mumposter.jpg')} alt="image3" />

          <a-mixin
            id="ring"
            geometry="primitive: ring; width: 1.5; height: 1.5"
            material="color: teal; shader: flat"
            animation__scale="property: scale; to: 1.7 1.7 1.7; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1.3 1.3 1.3; dur: 200; startEvents: mouseleave"
          ></a-mixin>
        </a-assets>
        <SceneOne visible={currentScene === 'sceneOne'} onSceneChange={handleSceneChange} />
        <SceneTwo visible={currentScene === 'sceneTwo'} onSceneChange={handleSceneChange} />
        <SceneThree visible={currentScene === 'sceneThree'} onSceneChange={handleSceneChange} />
        <SceneDescription visible={currentScene === 'sceneDescription'} onSceneChange={handleSceneChange} />
        <VRSetup />
      </Scene>
    </>
  );
};

export default ScenesControl;
