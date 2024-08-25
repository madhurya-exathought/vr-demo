import React, { useState, useEffect } from 'react';
import Header from '../../common/Header';
import { Scene, Entity } from 'aframe-react';
import VRSetup from './VRSetUp';

import { SceneType } from './scenetype.type';

import SceneOne from './SceneOne';
import SceneTwo from './SceneTwo';
import SceneThree from './SceneThree';
import SceneEntranceOutside from './SceneEntranceOutside';
import SceneEntranceInside from './SceneEntranceInside';
import SharedOptions from './SharedOptions';
import SceneBayOne from './SceneBayOne';
import SceneBayTwo from './SceneBayTwo';
import SceneBayThree from './SceneBayThree';
import SceneEntrance2Rooms from './SceneEntrance2Rooms';
import SceneMeetingRoomBig1 from './SceneMeetingRoomBig1';
import SceneMeetingRoomBig2 from './SceneMeetingRoomBig2';
import SceneMeetingRoomLeft from './SceneMeetingRoomLeft';
import SceneMeetingRoomRight from './SceneMeetingRoomRight';
import SceneInsidePathway from './SceneInsidePathway';
import SceneInsidePathway2 from './SceneInsidePathway2';
import SceneMeetingRoomAtEntrance from './SceneMeetingRoomAtEntrance';

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
      });
    }
  };

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
          <Entity primitive="a-img" id="sky1" src={require('../../../assets/images/sky/sky2.jpg')} alt="sky1" />
          <Entity
            primitive="a-img"
            id="skyEntranceOutside"
            src={require('../../../assets/images/exathought/EntranceOutside.jpg')}
            alt="skyEntrance"
          />
          <Entity
            primitive="a-img"
            id="skyEntranceInside"
            src={require('../../../assets/images/exathought/EntranceInside.jpg')}
            alt="skyEntrance"
          />
          <Entity primitive="a-img" id="Bay1" src={require('../../../assets/images/exathought/Bay1.jpg')} alt="Bay1" />
          <Entity primitive="a-img" id="Bay2" src={require('../../../assets/images/exathought/Bay2.jpg')} alt="Bay2" />
          <Entity primitive="a-img" id="Bay3" src={require('../../../assets/images/exathought/Bay3.jpg')} alt="Bay3" />
          <Entity primitive="a-img" id="Entrance2Rooms" src={require('../../../assets/images/exathought/Entrance2Rooms.jpg')} alt="Bay3" />
          <Entity
            primitive="a-img"
            id="MeetingRoomBig1"
            src={require('../../../assets/images/exathought/MeetingRoomBig2.jpg')}
            alt="MeetingRoomBig1"
          />
          <Entity
            primitive="a-img"
            id="MeetingRoomBig2"
            src={require('../../../assets/images/exathought/MeetingRoomBig.jpg')}
            alt="MeetingRoomBig2"
          />
          <Entity
            primitive="a-img"
            id="MeetingRoomLeft"
            src={require('../../../assets/images/exathought/RoomLeft.jpg')}
            alt="MeetingRoomLeft"
          />
          <Entity
            primitive="a-img"
            id="MeetingRoomRight"
            src={require('../../../assets/images/exathought/RoomRight.jpg')}
            alt="MeetingRoomRight"
          />
          <Entity
            primitive="a-img"
            id="MeetingRoomAtEntrance"
            src={require('../../../assets/images/exathought/RoomatEntrance.jpg')}
            alt="MeetingRoomAtEntrance"
          />
          <Entity
            primitive="a-img"
            id="InsidePathway"
            src={require('../../../assets/images/exathought/InsidePathway.jpg')}
            alt="InsidePathway"
          />

          <Entity primitive="a-img" id="Bengaluru" src={require('../../../assets/images/sceneOne/Bengaluru.png')} alt="image1" />
          <Entity primitive="a-img" id="Chennai" src={require('../../../assets/images/sceneOne/Chennai.png')} alt="image2" />
          <Entity primitive="a-img" id="Mumbai" src={require('../../../assets/images/sceneOne/Mumbai.png')} alt="image3" />
          <Entity primitive="a-img" id="Hyderabad" src={require('../../../assets/images/sceneOne/Hyderabad.png')} alt="image4" />
          <Entity primitive="a-img" id="NewDelhi" src={require('../../../assets/images/sceneOne/NewDelhi.png')} alt="image5" />

          <Entity primitive="a-img" id="Villa" src={require('../../../assets/images/sceneTwo/Villa.png')} alt="imageProperty" />
          <Entity primitive="a-img" id="Apartment" src={require('../../../assets/images/sceneTwo/Apartment.png')} alt="imageProperty" />

          <Entity primitive="a-img" id="1BHK" src={require('../../../assets/images/sceneThree/1BHK.png')} alt="imageRooms" />
          <Entity primitive="a-img" id="2BHK" src={require('../../../assets/images/sceneThree/2BHK.png')} alt="imageRooms" />
          <Entity primitive="a-img" id="3BHK" src={require('../../../assets/images/sceneThree/3BHK.png')} alt="imageRooms" />

          <Entity primitive="a-img" id="backButton" src={require('../../../assets/images/icons/backbutton2.png')} alt="backButton" />
          <Entity primitive="a-img" id="backButton2" src={require('../../../assets/images/icons/Group.png')} alt="backButton2" />
          <Entity primitive="a-img" id="upDown" src={require('../../../assets/images/icons/Main.png')} alt="updownIcon" />
          <Entity primitive="a-img" id="hotspot" src={require('../../../assets/images/icons/Hotspot.png')} alt="hotspot" />
          <Entity primitive="a-img" id="plane" src={require('../../../assets/images/icons/plane.png')} alt="plane" />
          <Entity primitive="a-img" id="box" src={require('../../../assets/images/icons/descriptionBox.png')} alt="box" />

          <Entity primitive="a-img" id="my-image" src={require('../../../assets/images/icons/my-image.png')} alt="123" />

          <Entity primitive="a-img" id="cabin1" src={require('../../../assets/images/sceneSpaces/Cabin1.png')} alt="imagebathroom" />
          <Entity primitive="a-img" id="cabin2" src={require('../../../assets/images/sceneSpaces/Cabin2.png')} alt="imagebathroom" />
          <Entity primitive="a-img" id="cabin3" src={require('../../../assets/images/sceneSpaces/Cabin3.png')} alt="imagebathroom" />
          <Entity
            primitive="a-img"
            id="ConferenceRoom"
            src={require('../../../assets/images/sceneSpaces/ConferenceRoom.png')}
            alt="imagebathroom"
          />
          <Entity
            primitive="a-img"
            id="FloorView1"
            src={require('../../../assets/images/sceneSpaces/FloorView1.png')}
            alt="imagebathroom"
          />
          <Entity
            primitive="a-img"
            id="FloorView2"
            src={require('../../../assets/images/sceneSpaces/FloorView2.png')}
            alt="imagebathroom"
          />
          <Entity
            primitive="a-img"
            id="FloorView3"
            src={require('../../../assets/images/sceneSpaces/FloorView3.png')}
            alt="imagebathroom"
          />
          <Entity
            primitive="a-img"
            id="FloorView4"
            src={require('../../../assets/images/sceneSpaces/FloorView4.png')}
            alt="imagebathroom"
          />
          <Entity
            primitive="a-img"
            id="FloorView5"
            src={require('../../../assets/images/sceneSpaces/FloorView5.png')}
            alt="imagebathroom"
          />
          <Entity
            primitive="a-img"
            id="OfficeEntrance"
            src={require('../../../assets/images/sceneSpaces/OfficeEntrance.png')}
            alt="imagebathroom"
          />

{/* 
<a-mixin
        id="scale-on-hover"
        animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
        animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
      />
      <a-mixin
        id="scale-loop"
        animation="property: scale; to: 1.2 1.2 1.2; dir: alternate; loop: true; dur: 1000"
      /> */}
    


<Entity primitive="a-mixin" id="animation-scale-on-hover"  
    animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
    animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared" />

<Entity primitive="a-mixin" id="animation-loop"  
    animation="property: scale; to: 1.2 1.2 1.2; dir: alternate; loop: true; dur: 1000" />


<Entity primitive="a-mixin" id="animation-fade"  
    animation__fade={{
      property: 'material.opacity',
      from: 0.5,
      to: 1,
      dur: 1000,
      easing: 'easeInOutQuad',
      startEvents: 'loaded'
    }} />



          {/*  
  <Entity primitive="a-mixin" id="ring" geometry="primitive: ring; width: 1.5; height: 1.5" material="color: beige; shader: flat" 
    animation__scale="property: scale; to: 1.7 1.7 1.7; dur: 200; startEvents: mouseenter" 
    animation__scale_reverse="property: scale; to: 1.3 1.3 1.3; dur: 200; startEvents: mouseleave" /> */}
        </Entity>

        <VRSetup />

        {currentScene === 'sceneOne' && <SceneOne onSceneChange={() => handleSceneChange('sceneTwo')} />}
        {currentScene === 'sceneTwo' && (
          <SceneTwo onSceneChange={() => handleSceneChange('sceneThree')} onBack={() => handleSceneChange('sceneOne')} />
        )}

        {currentScene === 'sceneThree' && (
          <SceneThree onSceneChange={() => handleSceneChange('sceneEntranceOutside')} onBack={() => handleSceneChange('sceneTwo')} />
        )}

        {currentScene === 'sceneEntranceOutside' && (
          <SceneEntranceOutside
            onSceneChange={() => handleSceneChange('sceneEntranceInside')}
            onBack={() => handleSceneChange('sceneThree')}
          >
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
          </SceneEntranceOutside>
        )}

        {currentScene === 'sceneEntranceInside' && (
          <SceneEntranceInside onSceneChange={handleSceneChange} onBack={() => handleSceneChange('sceneEntranceOutside')}>
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
          </SceneEntranceInside>
        )}

        {currentScene === 'sceneBay1' && (
          <SceneBayOne onSceneChange={() => handleSceneChange('sceneBay2')} onBack={() => handleSceneChange('sceneEntranceInside')}>
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
          </SceneBayOne>
        )}

        {currentScene === 'sceneBay2' && (
          <SceneBayTwo onSceneChange={() => handleSceneChange('sceneBay3')} onBack={() => handleSceneChange('sceneBay1')}>
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
          </SceneBayTwo>
        )}

        {currentScene === 'sceneBay3' && (
          <SceneBayThree onSceneChange={() => handleSceneChange('sceneEntrance2Rooms')} onBack={() => handleSceneChange('sceneBay2')}>
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
          </SceneBayThree>
        )}

        {currentScene === 'sceneEntrance2Rooms' && (
          <SceneEntrance2Rooms onSceneChange={handleSceneChange} onBack={() => handleSceneChange('sceneBay3')}>
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
          </SceneEntrance2Rooms>
        )}

        {currentScene === 'sceneMeetingRoomBig1' && (
          <SceneMeetingRoomBig1
            onSceneChange={() => handleSceneChange('sceneMeetingRoomBig2')}
            onBack={() => handleSceneChange('sceneEntrance2Rooms')}
          >
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
          </SceneMeetingRoomBig1>
        )}

        {currentScene === 'sceneMeetingRoomBig2' && (
          <SceneMeetingRoomBig2
            onSceneChange={() => handleSceneChange('sceneEntrance2Rooms')}
            onBack={() => handleSceneChange('sceneEntrance2Rooms')}
          >
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
          </SceneMeetingRoomBig2>
        )}

        {currentScene === 'sceneMeetingRoomLeft' && (
          <SceneMeetingRoomLeft onBack={() => handleSceneChange('sceneEntrance2Rooms')}>
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
          </SceneMeetingRoomLeft>
        )}
        {currentScene === 'sceneMeetingRoomRight' && (
          <SceneMeetingRoomRight onBack={() => handleSceneChange('sceneEntrance2Rooms')}>
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
          </SceneMeetingRoomRight>
        )}

        {currentScene === 'sceneInsidePathway' && (
          <SceneInsidePathway
            onSceneChange={() => handleSceneChange('sceneMeetingRoomAtEntrance')}
            onBack={() => handleSceneChange('sceneEntranceInside')}
          >
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
          </SceneInsidePathway>
        )}

        {currentScene === 'sceneInsidePathway2' && (
          <SceneInsidePathway2
            onSceneChange={() => handleSceneChange('sceneMeetingRoomAtEntrance')}
            onBack={() => handleSceneChange('sceneEntranceInside')}
          >
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
          </SceneInsidePathway2>
        )}

        {currentScene === 'sceneMeetingRoomAtEntrance' && (
          <SceneMeetingRoomAtEntrance onBack={() => handleSceneChange('sceneInsidePathway2')}>
            <SharedOptions onSceneChange={handleSceneChange} />{' '}
          </SceneMeetingRoomAtEntrance>
        )}
      </Scene>
    </>
  );
};

export default ScenesControl;
