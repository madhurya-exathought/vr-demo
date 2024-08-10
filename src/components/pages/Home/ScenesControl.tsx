import React, { useState } from 'react';
import SceneOne from './SceneOne';
import SceneTwo from './SceneTwo';
import SceneThree from './SceneThree';
import SceneFour from './SceneFour';
import SceneLivingRoom from './SceneLivingRoom';
import { Scene } from 'aframe-react';
import VRSetup from './VRSetUp';
import Header from '../../common/Header';
import SceneBedroom1 from './SceneBedroom1';
import SceneBedroom2 from './SceneBedroom2';
import SceneBathroom from './SceneBathroom';
import SceneGarden from './SceneGarden';
import SharedOptions from './SharedOptions';
import { SceneType } from './scenetype.type';

/* type SceneType =
  | 'sceneOne'
  | 'sceneTwo'
  | 'sceneThree'
  | 'sceneFour'
  | 'sceneLivingRoom'
  | 'sceneBedroom1'
  | 'sceneBedroom2'
  | 'sceneBathroom'
  | 'sceneGarden';
 */
const ScenesControl = () => {
  const [currentScene, setCurrentScene] = useState<SceneType>('sceneOne');
 

  const handleSceneChange = (nextScene: SceneType) => {
    console.log('Changing scene from', currentScene, 'to', nextScene);
    setCurrentScene(nextScene);
  };


  return (
    <>
      <Header />
      {/*    {isWebXRSupported ? ( */}
      <Scene vr-mode-ui="enabled: true">
        <a-assets>
          <img id="sky1" src={require('../../../assets/images/backgroundScenes.jpg')} alt="sky1" />
          <img id="skyLivingRoom" src={require('../../../assets/images/backgroundLivingroom.jpg')} alt="skyLivingRoom" />
          <img id="skyBathroom" src={require('../../../assets/images/backgroundBathroom.jpg')} alt="skyBathroom" />
          <img id="skyBedroom1" src={require('../../../assets/images/backgroundBedroom1.jpg')} alt="skyBedroom1" />
          <img id="skyBedroom2" src={require('../../../assets/images/backgroundBedroom2.jpg')} alt="skyBedroom2" />
          <img id="skyGarden" src={require('../../../assets/images/Backgroundgarden.jpg')} alt="skyGarden" />


          <img id="Bengaluru" src={require('../../../assets/images/Bengaluru.jpg')} alt="image1" />
          <img id="Chennai" src={require('../../../assets/images/Chennai.jpg')} alt="image2" />
          <img id="Mumbai" src={require('../../../assets/images/Mumbai.jpg')} alt="image3" />
          <img id="Hyderabad" src={require('../../../assets/images/Hyderabad.jpg')} alt="image4" />
          <img id="NewDelhi" src={require('../../../assets/images/NewDelhi.jpg')} alt="image5" />

          <img id="Villa" src={require('../../../assets/images/Villa.jpg')} alt="imageProperty" />
          <img id="Apartment" src={require('../../../assets/images/Apartment.jpg')} alt="imageProperty" />
          <img id="Studio" src={require('../../../assets/images/Studio.jpg')} alt="imageProperty" />



          <img id="1BHK" src={require('../../../assets/images/1BHK.jpg')} alt="imageRooms" />
          <img id="2BHK" src={require('../../../assets/images/2BHK.jpg')} alt="imageRooms" />
          <img id="3BHK" src={require('../../../assets/images/3BHK.jpg')} alt="imageRooms" />

       
          <img id="backButton" src={require('../../../assets/images/backbutton.png')} alt="backButton" />
         



          <img id="imagelivingroom" src={require('../../../assets/images/livingroom1.jpg')} alt="imagelivingroom" />
          <img id="imagegarden" src={require('../../../assets/images/garden1.jpg')} alt="imagegarden" />
          <img id="imagebedroom1" src={require('../../../assets/images/bedroom1_1.jpg')} alt="imagebedroom1" />
          <img id="imagebedroom2" src={require('../../../assets/images/bedroom2_1.jpg')} alt="imagebedroom2" />
          <img id="imagebathroom" src={require('../../../assets/images/bathroom1.jpg')} alt="imagebathroom" />

          <a-mixin
            id="ring"
            geometry="primitive: ring; width: 1.5; height: 1.5"
            material="color: blue; shader: flat"
            animation__scale="property: scale; to: 1.7 1.7 1.7; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1.3 1.3 1.3; dur: 200; startEvents: mouseleave"
          ></a-mixin>
        </a-assets>

        {currentScene === 'sceneOne' && <SceneOne onSceneChange={() => handleSceneChange('sceneTwo')} />}
        {currentScene === 'sceneTwo' && <SceneTwo onSceneChange={() => handleSceneChange('sceneThree')} onBack={() => handleSceneChange('sceneOne')} />}

        {currentScene === 'sceneThree' && <SceneThree onSceneChange={() => handleSceneChange('sceneFour')} onBack={() => handleSceneChange('sceneTwo')} />}
        {currentScene === 'sceneFour' && <SceneFour onSceneChange={() => handleSceneChange('sceneLivingRoom')} onBack={() => handleSceneChange('sceneTwo')} />}

        {currentScene === 'sceneLivingRoom' && <SceneLivingRoom onBack={() => handleSceneChange('sceneFour')} >  
          <SharedOptions onSceneChange={handleSceneChange} /> </SceneLivingRoom>}

        {currentScene === 'sceneBedroom1' && <SceneBedroom1 onBack={() => handleSceneChange('sceneLivingRoom')} >
          <SharedOptions onSceneChange={handleSceneChange} /> </SceneBedroom1>}

        {currentScene === 'sceneBedroom2' && <SceneBedroom2 onBack={() => handleSceneChange('sceneBedroom1')} >
          <SharedOptions onSceneChange={handleSceneChange} /> </SceneBedroom2>}

        {currentScene === 'sceneBathroom' && <SceneBathroom onBack={() => handleSceneChange('sceneBedroom2')} >
          <SharedOptions onSceneChange={handleSceneChange} /> </SceneBathroom>}

        {currentScene === 'sceneGarden' && <SceneGarden onBack={() => handleSceneChange('sceneBathroom')} >
          <SharedOptions onSceneChange={handleSceneChange} /> </SceneGarden>}
        <VRSetup />
      </Scene>
     
    </>
  );
};

export default ScenesControl;
