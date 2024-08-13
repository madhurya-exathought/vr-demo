import React, { useState,useEffect } from 'react';
import Header from '../../common/Header';
import { Scene ,Entity} from 'aframe-react';
import VRSetup from './VRSetUp';

import SceneOne from './SceneOne';
import SceneTwo from './SceneTwo';
import SceneThree from './SceneThree';
import SceneFour from './SceneFour';
import SceneLivingRoom from './SceneLivingRoom';
import SceneBedroom1 from './SceneBedroom1';
import SceneBedroom2 from './SceneBedroom2';
import SceneBathroom from './SceneBathroom';
import SceneGarden from './SceneGarden';
import SharedOptions from './SharedOptions';
import { SceneType } from './scenetype.type';
import SceneInWorks from './SceneInWorks';

import OfficeEntry from '../../../assets/images/sky/officeEntry1.jpg'


/* type SceneType =  | 'sceneOne'  | 'sceneTwo'  | 'sceneThree'  | 'sceneFour'  
| 'sceneLivingRoom'  | 'sceneBedroom1'  | 'sceneBedroom2'  | 'sceneBathroom'  | 'sceneGarden';
 */

const ScenesControl = () => {

  const [isWebXRSupported, setIsWebXRSupported] = useState<boolean | null>(null);

  const [currentScene, setCurrentScene] = useState<SceneType>('sceneOne');

  const handleSceneChange = (nextScene: SceneType) => {
    console.log('Changing scene from', currentScene, 'to', nextScene);
    setCurrentScene(nextScene);
  };

  useEffect(() => {
    checkWebXRSupport();
  }, []);


  const checkWebXRSupport = () => {
    if ('xr' in navigator) {
      const xr = (navigator as any).xr;
      xr.isSessionSupported('immersive-vr').then((supported: boolean) => {
      if (supported) {
        setIsWebXRSupported(supported);
        console.log('WebXR  supported');
       
      } else {
        setIsWebXRSupported(false);
        console.log('WebXR  not supported');
        
      }
    })}}

  if (isWebXRSupported === null) {
    return <div>Checking WebXR support...</div>;
  }

  if (!isWebXRSupported) {
    return <div>WebXR is not supported in your browser.</div>;
  }

  return (
    <>
      <Header />
     
      <Scene vr-mode-ui="enabled: true" assets-loader>

  <Entity primitive="a-assets">
  <Entity primitive="a-img" id="sky1" src={require('../../../assets/images/sky/backgroundScenes.jpg')} alt="sky1" />
  <Entity primitive="a-img" id="skyLivingRoom" src={require('../../../assets/images/sky/backgroundLivingroom.jpg')} alt="skyLivingRoom" />
  <Entity primitive="a-img" id="skyBathroom" src={require('../../../assets/images/sky/backgroundBathroom.jpg')} alt="skyBathroom" />
  <Entity primitive="a-img" id="skyBedroom1" src={require('../../../assets/images/sky/backgroundBedroom1.jpg')} alt="skyBedroom1" />
  <Entity primitive="a-img" id="skyBedroom2" src={require('../../../assets/images/sky/backgroundBedroom2.jpg')} alt="skyBedroom2" />
  <Entity primitive="a-img" id="skyGarden" src={require('../../../assets/images/sky/Backgroundgarden.jpg')} alt="skyGarden" />

  <Entity primitive="a-img" id="Bengaluru" src={require('../../../assets/images/sceneOne/Bengaluru.jpg')} alt="image1" />
  <Entity primitive="a-img" id="Chennai" src={require('../../../assets/images/sceneOne/Chennai.jpg')} alt="image2" />
  <Entity primitive="a-img" id="Mumbai" src={require('../../../assets/images/sceneOne/Mumbai.jpg')} alt="image3" />
  <Entity primitive="a-img" id="Hyderabad" src={require('../../../assets/images/sceneOne/Hyderabad.jpg')} alt="image4" />
  <Entity primitive="a-img" id="NewDelhi" src={require('../../../assets/images/sceneOne/NewDelhi.jpg')} alt="image5" />

  <Entity primitive="a-img" id="Villa" src={require('../../../assets/images/sceneTwo/Villa.jpg')} alt="imageProperty" />
  <Entity primitive="a-img" id="Apartment" src={require('../../../assets/images/sceneTwo/Apartment.jpg')} alt="imageProperty" />
  <Entity primitive="a-img" id="Studio" src={require('../../../assets/images/sceneTwo/Studio.jpg')} alt="imageProperty" />

  <Entity primitive="a-img" id="1BHK" src={require('../../../assets/images/sceneThree/1BHK.jpg')} alt="imageRooms" />
  <Entity primitive="a-img" id="2BHK" src={require('../../../assets/images/sceneThree/2BHK.jpg')} alt="imageRooms" />
  <Entity primitive="a-img" id="3BHK" src={require('../../../assets/images/sceneThree/3BHK.jpg')} alt="imageRooms" />

  <Entity primitive="a-img" id="backButton" src={require('../../../assets/images/icons/backbutton.png')} alt="backButton" />
  <Entity primitive="a-img" id="backButton2" src={require('../../../assets/images/icons/backbutton2.png')} alt="backButton2" />
  <Entity primitive="a-img" id="info" src={require('../../../assets/images/icons/info.png')} alt="info" />



  <Entity primitive="a-img" id="imagelivingroom" src={require('../../../assets/images/sceneSpaces/livingroom1.jpg')} alt="imagelivingroom" />
  <Entity primitive="a-img" id="imagegarden" src={require('../../../assets/images/sceneSpaces/garden1.jpg')} alt="imagegarden" />
  <Entity primitive="a-img" id="imagebedroom1" src={require('../../../assets/images/sceneSpaces/bedroom1_1.jpg')} alt="imagebedroom1" />
  <Entity primitive="a-img" id="imagebedroom2" src={require('../../../assets/images/sceneSpaces/bedroom2_1.jpg')} alt="imagebedroom2" />
  <Entity primitive="a-img" id="imagebathroom" src={require('../../../assets/images/sceneSpaces/bathroom1.jpg')} alt="imagebathroom" />
 
  <Entity primitive='a-img' id='officeEntry' src={OfficeEntry } /> 

  {/*     <Entity primitive='a-img' id='officeEntry2' src={require('../../../assets/images/sky/officeEntry2.jpg') } /> */}
{/* <Entity primitive='a-img' id='WallDetails' src={require('../../../assets/images/icons/WallDetails.png') } />
 */}

  <Entity primitive="a-mixin" id="ring" geometry="primitive: ring; width: 1.5; height: 1.5" material="color: beige; shader: flat" 
    animation__scale="property: scale; to: 1.7 1.7 1.7; dur: 200; startEvents: mouseenter" 
    animation__scale_reverse="property: scale; to: 1.3 1.3 1.3; dur: 200; startEvents: mouseleave" />
</Entity>


        {currentScene === 'sceneOne' && <SceneOne onSceneChange={() => handleSceneChange('sceneTwo')} />}
        {currentScene === 'sceneTwo' && (
          <SceneTwo onSceneChange={() => handleSceneChange('sceneThree')} onBack={() => handleSceneChange('sceneOne')} />
        )}

        {currentScene === 'sceneThree' && (
          <SceneThree onSceneChange={() => handleSceneChange('sceneFour')} onBack={() => handleSceneChange('sceneTwo')} />
        )}
        {currentScene === 'sceneFour' && (
          <SceneFour onSceneChange={() => handleSceneChange('sceneLivingRoom')} onBack={() => handleSceneChange('sceneThree')} />
        )}
{/* 
{currentScene === 'sceneInWorks' && (
          <SceneInWorks onSceneChange={() => handleSceneChange('sceneLivingRoom')} onBack={() => handleSceneChange('sceneFour')} />
        )} */}



        {currentScene === 'sceneLivingRoom' && (
          <SceneLivingRoom onBack={() => handleSceneChange('sceneFour')}>
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
          </SceneLivingRoom>
        )}

        {currentScene === 'sceneBedroom1' && (
          <SceneBedroom1 onBack={() => handleSceneChange('sceneLivingRoom')}>
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
          </SceneBedroom1>
        )}

        {currentScene === 'sceneBedroom2' && (
          <SceneBedroom2 onBack={() => handleSceneChange('sceneBedroom1')}>
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
          </SceneBedroom2>
        )}

        {currentScene === 'sceneBathroom' && (
          <SceneBathroom onBack={() => handleSceneChange('sceneBedroom2')}>
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
          </SceneBathroom>
        )}

        {currentScene === 'sceneGarden' && (
          <SceneGarden onBack={() => handleSceneChange('sceneBathroom')}>
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
          </SceneGarden>
        )}
        <VRSetup />
      </Scene>
    </>
  );
};

export default ScenesControl;
