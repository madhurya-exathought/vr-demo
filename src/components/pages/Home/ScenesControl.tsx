import React, { useState } from 'react';
import SceneOne from './SceneOne';
import SceneTwo from './SceneTwo';
import SceneThree from './SceneThree';
import SceneFour from './SceneFour';
import { SceneDescription } from './SceneDescription';
import { Scene } from 'aframe-react';
import VRSetup from './VRSetUp';
import Header from '../../common/Header';



type SceneType = 'sceneOne' | 'sceneTwo' | 'sceneThree' | 'sceneFour'|'sceneDescription'

const ScenesControl = () => {
  const [currentScene, setCurrentScene] = useState<SceneType>('sceneOne');

  const handleSceneChange = (nextScene: SceneType) => {
    console.log('Changing scene from', currentScene, 'to', nextScene);
  setCurrentScene(nextScene);
  };

 
  
  return (
    <>
      <Header />
      <Scene vr-mode-ui="enabled: true">
        <a-assets>
        <img id="sky1" src={require('../../../assets/images/background1.jpg')} alt="sky1" />
          <img id="sky2" src={require('../../../assets/images/background2.jpg')} alt="sky2" />
          <img id="sky3" src={require('../../../assets/images/background3.jpg')} alt="sky3" />
          <img id="sky4" src={require('../../../assets/images/b3.jpeg')} alt="sky4" />
          <img id="sky5" src={require('../../../assets/images/background4.jpg')} alt="sky5" />


          <img id="image1" src={require('../../../assets/images/blorePoster.jpg')} alt="image1" />
          <img id="image2" src={require('../../../assets/images/chposter.jpg')} alt="image2" />
          <img id="image3" src={require('../../../assets/images/mumposter.jpg')} alt="image3" />
          <img id='image4' src={require('../../../assets/images/hydposter.jpg')} alt='image4' />
          <img id='image5' src={require('../../../assets/images/delhiposter.jpg')} alt='image5' />

          <img id='imageProperty' src={require('../../../assets/images/property.jpg')} alt='imageProperty' />
          <img id='imageRooms' src={require('../../../assets/images/rooms.jpg')} alt='imageRooms' />
 

          <a-mixin
            id="ring"
            geometry="primitive: ring; width: 1.5; height: 1.5"
            material="color: teal; shader: flat"
            animation__scale="property: scale; to: 1.7 1.7 1.7; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1.3 1.3 1.3; dur: 200; startEvents: mouseleave"
          ></a-mixin>
        </a-assets>


        {currentScene === 'sceneOne' && (
          <SceneOne onSceneChange={() => handleSceneChange('sceneTwo')} />
        )}
        {currentScene === 'sceneTwo' && (
          <SceneTwo onSceneChange={() => handleSceneChange('sceneThree')} />
        )}
        {currentScene === 'sceneThree' && (
          <SceneThree onSceneChange={() => handleSceneChange('sceneFour')} />
        )}
         {currentScene === 'sceneFour' && (
          <SceneFour onSceneChange={() => handleSceneChange('sceneDescription')} />
        )}

        {currentScene ==='sceneDescription' && (<SceneDescription />)}
        <VRSetup />
      </Scene>
    </>
  );
};

export default ScenesControl;
