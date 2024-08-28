import React, { useState} from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import { SceneType } from './scenetype.type';
import TextEntity from '../../common/cta/TextEntity';

interface SharedOptionsType {
  onSceneChange: (nextScene: SceneType) => void;
}

type SceneOptionType = {
  image: string;
  position: string;
  text: string;
  next: SceneType;
};

const SceneOptions: SceneOptionType[] = [
  { image: '#OfficeEntrance', position: '-3 0.8 0.01', text: 'Office Entrance', next: 'sceneEntranceOutside' },
  { image: '#FloorView1', position: '-1.5 0.8 0.01', text: 'Floor View 1', next: 'sceneEntranceInside' },
  { image: '#FloorView2', position: '0 0.8 0.01', text: 'Floor View 2', next: 'sceneInsidePathway' },
  { image: '#cabin1', position: '1.5 0.8 0.01', text: 'Cabin 1', next: 'sceneMeetingRoomAtEntrance' },
  { image: '#FloorView3', position: '3 0.8 0.01', text: 'Floor View 3', next: 'sceneBay1' },
 
  { image: '#FloorView4', position: '-3 -1 0.01', text: 'Floor View 4', next: 'sceneBay3' },
  { image: '#FloorView5', position: '-1.5 -1 0.01', text: 'Floor View 5', next: 'sceneEntrance2Rooms' },
  { image: '#cabin2', position: '0 -1 0.01', text: 'Cabin 2', next: 'sceneMeetingRoomLeft' },
  { image: '#cabin3', position: '1.5 -1 0.01', text: 'Cabin 3', next: 'sceneMeetingRoomRight' },
  { image: '#ConferenceRoom', position: '3 -1 0.01', text: 'Conference Room', next: 'sceneMeetingRoomBig1' },
 ];

const ScenePicker: React.FC<SharedOptionsType> = ({ onSceneChange }) => {
  const [isSelectionPlaneVisible, setIsSelectionPlaneVisible] = useState(false);
  const [areHeroClickEventsEnabled, setAreHeroClickEventsEnabled] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState<number>(0.8);

  const [mainEntityState, setMainEntityState] = useState({
    position: { x: -4, y: -1.5, z: -4 },
    rotation: { x: 0, y: 0, z: 180 },
  });

  const toggleMoveAndRotate = () => {
    if (mainEntityState.position.x === -4) {
      setMainEntityState({
        position: { x: -0.65, y: 1.55, z: -4.01 },
        rotation: { x: 0, y: 0, z: 0 },
      });
      setButtonOpacity(1);
    } else {
      setMainEntityState({
        position: { x: -4, y: -1.5, z: -4 },
        rotation: { x: 0, y: 0, z: 180 },
      });
      setButtonOpacity(0.8);
    }
  };

  const toggleVisibilityAndClickEvents = () => {
    setIsSelectionPlaneVisible(prevState => !prevState);
    setAreHeroClickEventsEnabled(prevState => !prevState);
  };

  return (
    <Entity>
      <Entity
        id="Main"
        geometry={{ primitive: 'plane', width: 2, height: 0.5 }}
        material={{ src: '#upDown1', color: '#1E1E1E', opacity: buttonOpacity }}
        style={{
          background: 'rgba(0, 0, 0, 0.40)',
          backdropFilter: 'blur(4px)',
        }}
        rotation="0 0 0"
        position={`${mainEntityState.position.x} ${mainEntityState.position.y} ${mainEntityState.position.z}`}
        className="clickable"
        mixin="animation-scale-on-hover "
        events={{
          click: () => {
            toggleVisibilityAndClickEvents();
            toggleMoveAndRotate();
          },
        }}
      >
        <Entity
          id="arrowUpDown"
          geometry={{ primitive: 'plane', width: 0.3, height: 0.3 }}
          material={{ src: '#upDown', transparant: true }}
          style={{
            background: 'rgba(0, 0, 0, 0.40)',
            backdropFilter: 'blur(4px)',
          }}
          position="-0.75 0 0.02"
          rotation={`${mainEntityState.rotation.x} ${mainEntityState.rotation.y} ${mainEntityState.rotation.z}`}
          className="clickable"
        >
          {' '}
        </Entity>
        <TextEntity text="Select Space" setPosition="-.6 0 0" align="left" color="white" width="6" />
      </Entity>

      <Entity
        id="selectionPlane"
        visible={isSelectionPlaneVisible}
        geometry={{ primitive: 'plane', width: 8, height: 4 }}
        material={{ src: '#scenePicker', transparent: true, opacity: 0.99 }}
        position="2 0 -4.2"
        rotation="0 0 0"
        mixin="animation-easing-plane"
      >
        {SceneOptions.map((image, index) => (
          <Entity
          key={index}
            id="hero"
            geometry={{ primitive: 'plane', width: 1.2, height: 0.7 }}
            material={{ src: image.image, transparent: true, alphaTest: 0.9 }}
            position={image.position}
            rotation="0 0 0"
            className="clickable"
            mixin="animation-scale-on-hover "
            events={
              areHeroClickEventsEnabled
                ? {
                    click: () => {
                      console.log('Image clicked in ', image.text);
                      onSceneChange(image.next);
                    },
                  }
                : {}
            }
          >
            <TextEntity text={image.text} color="white" align="center" setPosition="0 -0.6 0.01" width="3" />
               </Entity>
        ))}
      </Entity>
    </Entity>
  );
};

export default ScenePicker;

