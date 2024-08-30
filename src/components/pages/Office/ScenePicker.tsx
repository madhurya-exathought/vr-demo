import React, { useState } from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import { SceneType } from './scenetype.type';
import { SceneOptions } from '../../../constants/Imageloops';
import TextEntity from '../../common/cta/TextEntity';
import EndTourPopUp from '../../common/cta/QuitPopUp';

interface SharedOptionsType {
  onSceneChange: (nextScene: SceneType) => void;
}



const ScenePicker: React.FC<SharedOptionsType> = ({ onSceneChange }) => {
  const [isSelectionPlaneVisible, setIsSelectionPlaneVisible] = useState(false);
  const [areHeroClickEventsEnabled, setAreHeroClickEventsEnabled] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState<number>(0.8);
  const [showEndTourPopUp, setshowEndTourPopUp] = useState(false);

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
  const goToHome = () => {
    console.log('Hoe Button Clicked');
    onSceneChange('sceneOne');
  };


  const handleEndTourClick = () => {
    setshowEndTourPopUp(true);
  };

  const handleQuitButtonClick = () => {
    setshowEndTourPopUp(false); // Set state to hide the QuitButton
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
        ></Entity>
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
        <Entity
          id="Home"
          geometry={{ primitive: 'plane', width: 0.4, height: 0.4 }}
          material={{ src: '#Home' }}
          position="2 1.65 0.02"
          rotation="0 0 0"
          className="clickable"
          mixin="animation-scale-on-hover "
          events={{
            click: goToHome,
          }}
        />

        <Entity
          id="EndTour"
          geometry={{ primitive: 'plane', width: 1, height: 0.4 }}
          material={{ src: '#EndTour' }}
          position="3 1.65 0.02"
          rotation="0 0 0"
          mixin="animation-scale-on-hover "
          className="clickable"
          events={{
            click: handleEndTourClick,
          }}
        ></Entity>

        {showEndTourPopUp && <EndTourPopUp onClickCLosePopUp={handleQuitButtonClick} />}

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
