import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import { SceneType } from './scenetype.type';
import SharedEntity from './SharedEntity';


interface SharedOptionsProps {
  onSceneChange: (nextScene:SceneType) => void;
}


const SharedOptions: React.FC<SharedOptionsProps> = ({ onSceneChange }) => {
/*   const handleImageClickSceneGarden = () => {
    console.log('Image clicked in Garden');
    onSceneChange('sceneGarden');
  };

  const handleImageClickSceneLivingRoom = () => {
    console.log('Image clicked in LivingRoom');
    onSceneChange('sceneLivingRoom');
  };

  const handleImageClickSceneBathroom = () => {
    console.log('Image clicked in Bathroom');
    onSceneChange('sceneBathroom');
  };

  const handleImageClickSceneBedroom1 = () => {
    console.log('Image clicked in Bedroom1');
    onSceneChange('sceneBedroom1');
  };

  const handleImageClickSceneBedroom2 = () => {
    console.log('Image clicked in Bedroom2');
    onSceneChange('sceneBedroom2');
  };
 */
  return (
    <Entity>
      {/* arrow */}

      <Entity
        geometry={{ primitive: 'plane', width: 0.5, height: 0.5 }}
        material={{ src: '#upDown', color: 'white', opacity: 0.8 }}
        position="-4 -1.5 -4"
        rotation="0 0 0"
        className="clickable "
        animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
        animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
        make-visible="target: #selectionPlane"
        move-and-rotate
      />
      {/* options  */}
      <Entity
        id="selectionPlane"
        visible={false}
        geometry={{ primitive: 'plane', width: 15, height: 4.5 }}
        material={{ color: 'beige', opacity: 1 }}
        position="2 0 -4.2"
        rotation="0 0 0"
        animation__scale="property: scale; from: 0 0 0; to: 1 1 1; dur: 1000; easing: easeInOutQuad; "
      >

        <SharedEntity image='#OfficeEntrance' setPosition='-6 1 0.01' textValue='Office Entrance' onSceneChange={onSceneChange} nextScene='sceneEntraceOutside' />
        
        <SharedEntity image='#FloorView1' setPosition='-3.5 1 0.01' textValue='Floor View 1' onSceneChange={onSceneChange} nextScene='sceneEntraceInside' />
        
        <SharedEntity image='#FloorView2' setPosition='-1 1 0.01' textValue='Floor View 2' onSceneChange={onSceneChange} nextScene='sceneInsidePathway' />
        
        <SharedEntity image='#cabin1' setPosition='1.5 1 0.01' textValue='Cabin 1' onSceneChange={onSceneChange} nextScene='sceneMeetingRoomAtEntrance' />
        
        <SharedEntity image='#FloorView3' setPosition='4 1 0.01' textValue='Floor View 3' onSceneChange={onSceneChange} nextScene='sceneBay1' />
        
        <SharedEntity image='#imagelivingroom' setPosition='6.5 1 0.01' textValue='Living Room' onSceneChange={onSceneChange} nextScene='sceneBay2' />
        



        
        <SharedEntity image='#FloorView4' setPosition='-6 -1 0.01' textValue='Floor View 4' onSceneChange={onSceneChange} nextScene='sceneBay3' />
        
        <SharedEntity image='#FloorView5' setPosition='-3.5 -1 0.01' textValue='Floor View 5' onSceneChange={onSceneChange} nextScene='sceneEntrance2Rooms' />
        
        <SharedEntity image='#cabin2' setPosition='-1 -1 0.01' textValue='Cabin 2' onSceneChange={onSceneChange} nextScene='sceneMeetingRoomLeft' />
        
        <SharedEntity image='#cabin3' setPosition='1.5 -1 0.01' textValue='Cabin 3' onSceneChange={onSceneChange} nextScene='sceneMeetingRoomRight' />
        
        <SharedEntity image='#ConferenceRoom' setPosition='4 -1 0.01' textValue='Conference Room' onSceneChange={onSceneChange} nextScene='sceneMeetingRoomBig1' />
        
        <SharedEntity image='#imagelivingroom' setPosition='6.5 -1 0.01' textValue='Living Room' onSceneChange={onSceneChange} nextScene='sceneMeetingRoomBig2' />
        
        
        
        
        
        
       
      </Entity>
    </Entity>
  );
};

export default SharedOptions;
