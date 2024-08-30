import React from 'react';
import { Entity } from 'aframe-react';
import TextEntity from './TextEntity';

type QuitType={
  onClickCLosePopUp : () => void;
}

const QuitButton:React.FC<QuitType> = ({onClickCLosePopUp}) => {
  const handleQuit = () => {
    // Exit immersive mode
    const scene = document.querySelector('a-scene');
    if (scene && scene.exitVR) {
      onClickCLosePopUp()
      scene.exitVR();
    }
  };

  return (
    <Entity
          id="PopUp"
          geometry={{ primitive: 'plane', width: 3, height: 1 }}
          material={{ src: '#scenePicker', transparent: true, opacity: 0.99  }}
          position='0.5 3.5 0.02'
          rotation='0 0 0'
          
         
       >
        <TextEntity setPosition='-1.25 0.25 0.03' width='2' text='Are you sure to end the tour?' color='white' align='left' />
        <Entity
          id="cross"
          geometry={{ primitive: 'plane', width: 0.1, height: 0.1 }}
          material={{ src: '#cross',color:'white' }}
          position='1.2 0.2 0.03' 
          mixin="animation-scale-on-hover " 
          className='clickable'
          events={{click:onClickCLosePopUp}}
                                    />

<Entity
          id="End"
          geometry={{ primitive: 'plane', width: 1, height: 0.4 }}
          material={{ src: '#EndTourRed' }}
          position='-0.75 -0.2 0.03'  
          mixin="animation-scale-on-hover "      
          className='clickable'  
          events={{
            click:handleQuit,
          }}                  />
        </Entity>
         
  );
};

export default QuitButton;
