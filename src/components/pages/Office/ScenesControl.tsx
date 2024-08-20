import React, { useState,useEffect } from 'react';
import Header from '../../common/Header';
import { Scene ,Entity} from 'aframe-react';
import VRSetup from './VRSetUp';

import SceneOne from './SceneOne';
import SceneTwo from './SceneTwo';
import SceneThree from './SceneThree';
import SceneEntranceOutside from './SceneEntranceOutside';
import SceneEntranceInside from './SceneEntranceInside';
/* import SceneFour from './SceneFour';
import SceneLivingRoom from './SceneLivingRoom';
import SceneBedroom1 from './SceneBedroom1';
import SceneBedroom2 from './SceneBedroom2';
import SceneBathroom from './SceneBathroom';
import SceneGarden from './SceneGarden'; */
import SharedOptions from './SharedOptions';
import { SceneType } from './scenetype.type';


import OfficeEntry from '../../../assets/images/sky/officeEntry1.jpg'
import SceneBayOne from './SceneBayOne';
import SceneBayTwo from './SceneBayTwo';
import SceneBayThree from './SceneBayThree';
import SceneEntrance2Rooms from './SceneEntrance2Rooms';
import SceneMeetingRoomBig1 from './SceneMeetingRoomBig1';
import SceneMeetingRoomBig2 from './SceneMeetingRoomBig2';
import SceneMeetingRoomLeft from './SceneMeetingRoomLeft';
import SceneMeetingRoomRight from './SceneMeetingRoomRight';
import SceneInsidePathway from './SceneInsidePathway';
import SceneMeetingRoomAtEntrance from './SceneMeetingRoomAtEntrance';

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
        console.log('WebXR not supported');
        
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
  <Entity primitive="a-img" id="skyEntranceOutside" src={require('../../../assets/images/exathought/EntranceOutside.jpg')} alt="skyEntrance" />
  <Entity primitive="a-img" id="skyEntranceInside" src={require('../../../assets/images/exathought/EntranceInside.jpg')} alt="skyEntrance" />
  <Entity primitive="a-img" id="Bay1" src={require('../../../assets/images/exathought/Bay1.jpg')} alt="Bay1" />
  <Entity primitive="a-img" id="Bay2" src={require('../../../assets/images/exathought/Bay2.jpg')} alt="Bay2" />
  <Entity primitive="a-img" id="Bay3" src={require('../../../assets/images/exathought/Bay3.jpg')} alt="Bay3" />
  <Entity primitive="a-img" id="Entrance2Rooms" src={require('../../../assets/images/exathought/Entrace2Rooms.jpg')} alt="Bay3" />
  
  <Entity primitive="a-img" id="MeetingRoomBig1" src={require('../../../assets/images/exathought/MeetingRoomBig2.jpg')} alt="MeetingRoomBig1" />
  <Entity primitive="a-img" id="MeetingRoomBig2" src={require('../../../assets/images/exathought/MeetingRoomBig.jpg')} alt="MeetingRoomBig2" />
  <Entity primitive="a-img" id="MeetingRoomLeft" src={require('../../../assets/images/exathought/RoomLeft.jpg')} alt="MeetingRoomLeft" />
  <Entity primitive="a-img" id="MeetingRoomRight" src={require('../../../assets/images/exathought/RoomRight.jpg')} alt="MeetingRoomRight" />
  <Entity primitive="a-img" id="MeetingRoomAtEntrance" src={require('../../../assets/images/exathought/RoomatEntrance.jpg')} alt="MeetingRoomAtEntrance" />
 
  <Entity primitive="a-img" id="InsidePathway" src={require('../../../assets/images/exathought/InsidePathway.jpg')} alt="InsidePathway" />
  









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

 
  <Entity primitive="a-mixin" id="ring" geometry="primitive: ring; width: 1.5; height: 1.5" material="color: beige; shader: flat" 
    animation__scale="property: scale; to: 1.7 1.7 1.7; dur: 200; startEvents: mouseenter" 
    animation__scale_reverse="property: scale; to: 1.3 1.3 1.3; dur: 200; startEvents: mouseleave" />
</Entity>


        {currentScene === 'sceneOne' && <SceneOne onSceneChange={() => handleSceneChange('sceneTwo')} />}
        {currentScene === 'sceneTwo' && (
          <SceneTwo onSceneChange={() => handleSceneChange('sceneThree')} onBack={() => handleSceneChange('sceneOne')} />
        )}

        {currentScene === 'sceneThree' && (
          <SceneThree onSceneChange={() => handleSceneChange('sceneEntraceOutside')} onBack={() => handleSceneChange('sceneTwo')} />
        )}

        {currentScene === 'sceneEntraceOutside' && (
          <SceneEntranceOutside onSceneChange={()=>handleSceneChange('sceneEntraceInside')} onBack={() =>handleSceneChange('sceneThree')}    /> 
        )}

{currentScene === 'sceneEntraceInside' && (
          <SceneEntranceInside onSceneChange={handleSceneChange} onBack={() =>handleSceneChange('sceneEntraceOutside')}    /> 
        )}

{currentScene === 'sceneBay1' && (
          <SceneBayOne onSceneChange={()=>handleSceneChange('sceneBay2')} onBack={() =>handleSceneChange('sceneEntraceInside')}    /> 
        )}


{currentScene === 'sceneBay2' && (
          <SceneBayTwo onSceneChange={()=>handleSceneChange('sceneBay3')} onBack={() =>handleSceneChange('sceneBay1')}    /> 
        )}
{currentScene === 'sceneBay3' && (
          <SceneBayThree onSceneChange={()=>handleSceneChange('sceneEntrance2Rooms')} onBack={() =>handleSceneChange('sceneBay2')}    /> 
        )}

{currentScene === 'sceneEntrance2Rooms' && (
          <SceneEntrance2Rooms onSceneChange={handleSceneChange} onBack={() =>handleSceneChange('sceneBay3')}    /> 
        )}


{currentScene === 'sceneMeetingRoomBig1' && (
          <SceneMeetingRoomBig1 onSceneChange={()=>handleSceneChange('sceneMeetingRoomBig2')} onBack={() =>handleSceneChange('sceneEntrance2Rooms')}    /> 
        )}

{currentScene === 'sceneMeetingRoomBig2' && (
          <SceneMeetingRoomBig2 onSceneChange={()=>handleSceneChange('sceneEntrance2Rooms')} onBack={() =>handleSceneChange('sceneEntrance2Rooms')}    /> 
        )}

{currentScene === 'sceneMeetingRoomLeft' && (
          <SceneMeetingRoomLeft onBack={() =>handleSceneChange('sceneEntrance2Rooms')}    />
          
          
        )}
{currentScene === 'sceneMeetingRoomRight' && (
          <SceneMeetingRoomRight  onBack={() =>handleSceneChange('sceneEntrance2Rooms')}    /> 
        )}

{currentScene === 'sceneInsidePathway' && (
          <SceneInsidePathway onSceneChange={()=>handleSceneChange('sceneMeetingRoomAtEntrance')} onBack={() =>handleSceneChange('sceneEntraceInside')}    /> 
        )}

{currentScene === 'sceneMeetingRoomAtEntrance' && (
          <SceneMeetingRoomAtEntrance onBack={() =>handleSceneChange('sceneInsidePathway')}    /> 
        )}





        <VRSetup />
      </Scene>
    </>
  );
};

export default ScenesControl;
