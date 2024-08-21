import React, { useState,useEffect } from 'react';
import Header from '../../common/Header';
import { Scene ,Entity} from 'aframe-react';
import VRSetup from './VRSetUp';

import SceneOne from './SceneOne';
import SceneTwo from './SceneTwo';
import SceneThree from './SceneThree';
import SceneEntranceOutside from './SceneEntranceOutside';
import SceneEntranceInside from './SceneEntranceInside';
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

  const [currentScene, setCurrentScene] = useState<SceneType>('sceneEntrance2Rooms');

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
  <Entity primitive="a-img" id="Entrance2Rooms" src={require('../../../assets/images/exathought/Entrance2Rooms.jpg')} alt="Bay3" />
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

  <Entity primitive="a-img" id="backButton" src={require('../../../assets/images/icons/backbutton2.png')} alt="backButton" />
  <Entity primitive="a-img" id="backButton2" src={require('../../../assets/images/icons/Group.png')} alt="backButton2" />
   <Entity primitive='a-img' id='upDown' src={require('../../../assets/images/icons/Main.png')} alt='updownIcon' />


 
  <Entity primitive='a-img' id='officeEntry' src={OfficeEntry } /> 



  <Entity primitive="a-img" id="cabin1" src={require('../../../assets/images/sceneSpaces/Cabin1.jpg')} alt="imagebathroom" />
  <Entity primitive="a-img" id="cabin2" src={require('../../../assets/images/sceneSpaces/Cabin2.jpg')} alt="imagebathroom" />
  <Entity primitive="a-img" id="cabin3" src={require('../../../assets/images/sceneSpaces/Cabin3.jpg')} alt="imagebathroom" />
  <Entity primitive="a-img" id="ConferenceRoom" src={require('../../../assets/images/sceneSpaces/ConferenceRoom.jpg')} alt="imagebathroom" />
  <Entity primitive="a-img" id="FloorView1" src={require('../../../assets/images/sceneSpaces/FloorView1.jpg')} alt="imagebathroom" />
  <Entity primitive="a-img" id="FloorView2" src={require('../../../assets/images/sceneSpaces/FloorView2.jpg')} alt="imagebathroom" />
  <Entity primitive="a-img" id="FloorView3" src={require('../../../assets/images/sceneSpaces/FloorView3.jpg')} alt="imagebathroom" />
  <Entity primitive="a-img" id="FloorView4" src={require('../../../assets/images/sceneSpaces/FloorView4.jpg')} alt="imagebathroom" />
  <Entity primitive="a-img" id="FloorView5" src={require('../../../assets/images/sceneSpaces/FloorView5.jpg')} alt="imagebathroom" />
  <Entity primitive="a-img" id="OfficeEntrance" src={require('../../../assets/images/sceneSpaces/OfficeEntrance.jpg')} alt="imagebathroom" />
 

 
  <Entity primitive="a-mixin" id="ring" geometry="primitive: ring; width: 1.5; height: 1.5" material="color: beige; shader: flat" 
    animation__scale="property: scale; to: 1.7 1.7 1.7; dur: 200; startEvents: mouseenter" 
    animation__scale_reverse="property: scale; to: 1.3 1.3 1.3; dur: 200; startEvents: mouseleave" />
</Entity>


        {currentScene === 'sceneOne' && <SceneOne onSceneChange={() => handleSceneChange('sceneTwo')} />}
        {currentScene === 'sceneTwo' && (
          <SceneTwo onSceneChange={() => handleSceneChange('sceneThree')} onBack={() => handleSceneChange('sceneOne')} />
        )}

        {currentScene === 'sceneThree' && (
          <SceneThree onSceneChange={() => handleSceneChange('sceneEntranceOutside')} onBack={() => handleSceneChange('sceneTwo')} />
        )}

        {currentScene === 'sceneEntranceOutside' && (
          <SceneEntranceOutside onSceneChange={()=>handleSceneChange('sceneEntranceInside')} onBack={() =>handleSceneChange('sceneThree')}>
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
            </SceneEntranceOutside> 
        )}

{currentScene === 'sceneEntranceInside' && (
          <SceneEntranceInside onSceneChange={handleSceneChange} onBack={() =>handleSceneChange('sceneEntranceOutside')}    >
             <SharedOptions onSceneChange={handleSceneChange} />{' '}
             </SceneEntranceInside>         
        )}

{currentScene === 'sceneBay1' && (
          <SceneBayOne onSceneChange={()=>handleSceneChange('sceneBay2')} onBack={() =>handleSceneChange('sceneEntranceInside')}    >
             <SharedOptions onSceneChange={handleSceneChange} />{' '}
             </SceneBayOne> 
        )}


{currentScene === 'sceneBay2' && (
          <SceneBayTwo onSceneChange={()=>handleSceneChange('sceneBay3')} onBack={() =>handleSceneChange('sceneBay1')}    >
             <SharedOptions onSceneChange={handleSceneChange} />{' '}
             </SceneBayTwo> 
        )}
{currentScene === 'sceneBay3' && (
          <SceneBayThree onSceneChange={()=>handleSceneChange('sceneEntrance2Rooms')} onBack={() =>handleSceneChange('sceneBay2')}    >
             <SharedOptions onSceneChange={handleSceneChange} />{' '}
             </SceneBayThree> 
        )}

{currentScene === 'sceneEntrance2Rooms' && (
          <SceneEntrance2Rooms onSceneChange={handleSceneChange} onBack={() =>handleSceneChange('sceneBay3')}    >
             <SharedOptions onSceneChange={handleSceneChange} />{' '}
             </SceneEntrance2Rooms> 
        )}


{currentScene === 'sceneMeetingRoomBig1' && (
          <SceneMeetingRoomBig1 onSceneChange={()=>handleSceneChange('sceneMeetingRoomBig2')} onBack={() =>handleSceneChange('sceneEntrance2Rooms')}    >
             <SharedOptions onSceneChange={handleSceneChange} />{' '}
             </SceneMeetingRoomBig1> 
        )}

{currentScene === 'sceneMeetingRoomBig2' && (
          <SceneMeetingRoomBig2 onSceneChange={()=>handleSceneChange('sceneEntrance2Rooms')} onBack={() =>handleSceneChange('sceneEntrance2Rooms')}    >
             <SharedOptions onSceneChange={handleSceneChange} />{' '}
             </SceneMeetingRoomBig2> 
        )}

{currentScene === 'sceneMeetingRoomLeft' && (
          <SceneMeetingRoomLeft onBack={() =>handleSceneChange('sceneEntrance2Rooms')}    >
             <SharedOptions onSceneChange={handleSceneChange} />{' '}
             </SceneMeetingRoomLeft>
          
          
        )}
{currentScene === 'sceneMeetingRoomRight' && (
          <SceneMeetingRoomRight  onBack={() =>handleSceneChange('sceneEntrance2Rooms')}    >
             <SharedOptions onSceneChange={handleSceneChange} />{' '}
             </SceneMeetingRoomRight> 
        )}

{currentScene === 'sceneInsidePathway' && (
          <SceneInsidePathway onSceneChange={()=>handleSceneChange('sceneMeetingRoomAtEntrance')} onBack={() =>handleSceneChange('sceneEntranceInside')}    >
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
           </SceneInsidePathway> 
        )}

{currentScene === 'sceneMeetingRoomAtEntrance' && (
          <SceneMeetingRoomAtEntrance onBack={() =>handleSceneChange('sceneInsidePathway')}    >
             <SharedOptions onSceneChange={handleSceneChange} />{' '}
             </SceneMeetingRoomAtEntrance> 
        )}





        <VRSetup />
      </Scene>
    </>
  );
};

export default ScenesControl;
