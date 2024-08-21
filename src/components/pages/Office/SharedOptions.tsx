import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import { SceneType } from './scenetype.type';
import SharedEntity from './SharedEntity';


interface SharedOptionsProps {
  onSceneChange: (nextScene:SceneType ) => void;
}

type SceneOption = {
  image: string;
  position: string;
  text: string;
  next: SceneType;
};



const SceneOptions:SceneOption[] = [
  { image: '#OfficeEntrance', position: '-6 1 0.01',text:'Office Entrance',next:'sceneEntranceOutside'},
  { image: '#FloorView1', position: '-3.5 1 0.01',text:'Floor View 1',next:'sceneEntranceInside'},
  { image: '#FloorView2', position: '-1 1 0.01',text:'Floor View 2',next:'sceneInsidePathway'},
  { image: '#cabin1', position: '1.5 1 0.01' ,text:'Cabin 1',next:'sceneMeetingRoomAtEntrance'},
  { image: '#FloorView3', position: '4 1 0.01',text:'Floor View 3',next:'sceneBay1'},
  { image: '#Bengaluru', position: '6.5 1 0.01' ,text:'Another View',next:'sceneBay2'},

  { image: '#FloorView4', position:'-6 -1 0.01',text:'Floor View 4',next:'sceneBay3'},
  { image: '#FloorView5', position: '-3.5 -1 0.01' ,text:'Floor View 5',next:'sceneEntrance2Rooms'},
  { image: '#cabin2', position: '-1 -1 0.01' ,text:'Cabin 2',next:'sceneMeetingRoomLeft'},
  { image: '#cabin3', position: '1.5 -1 0.01' ,text:'Cabin 3',next:'sceneMeetingRoomRight'},
  { image: '#ConferenceRoom', position: '4 -1 0.01' ,text:'Conference Room',next:'sceneMeetingRoomBig1'},
  { image: '#Mumbai', position: '6.5 -1 0.01' ,text:'Yet Another View',next:'sceneMeetingRoomBig2'},
 
];


const SharedOptions: React.FC<SharedOptionsProps> = ({ onSceneChange }) => {

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


          {/*  image1 */}

          {SceneOptions.map((image, index) => (
          <SharedEntity key={index} image={image.image} setPosition={image.position} onSceneChange={onSceneChange}
          textValue={image.text} nextScene={image.next} />
        ))}

      {/*   <SharedEntity image='#OfficeEntrance' setPosition='-6 1 0.01' textValue='Office Entrance' onSceneChange={onSceneChange} nextScene='sceneEntraceOutside' />
        
        <SharedEntity image='#FloorView1' setPosition='-3.5 1 0.01' textValue='Floor View 1' onSceneChange={onSceneChange} nextScene='sceneEntraceInside' />
        
        <SharedEntity image='#FloorView2' setPosition='-1 1 0.01' textValue='Floor View 2' onSceneChange={onSceneChange} nextScene='sceneInsidePathway' />
        
        <SharedEntity image='#cabin1' setPosition='1.5 1 0.01' textValue='Cabin 1' onSceneChange={onSceneChange} nextScene='sceneMeetingRoomAtEntrance' />
        
        <SharedEntity image='#FloorView3' setPosition='4 1 0.01' textValue='Floor View 3' onSceneChange={onSceneChange} nextScene='sceneBay1' />
        
        <SharedEntity image='#Bengaluru' setPosition='6.5 1 0.01' textValue='Another floor' onSceneChange={onSceneChange} nextScene='sceneBay2' />
        



        
        <SharedEntity image='#FloorView4' setPosition='-6 -1 0.01' textValue='Floor View 4' onSceneChange={onSceneChange} nextScene='sceneBay3' />
        
        <SharedEntity image='#FloorView5' setPosition='-3.5 -1 0.01' textValue='Floor View 5' onSceneChange={onSceneChange} nextScene='sceneEntrance2Rooms' />
        
        <SharedEntity image='#cabin2' setPosition='-1 -1 0.01' textValue='Cabin 2' onSceneChange={onSceneChange} nextScene='sceneMeetingRoomLeft' />
        
        <SharedEntity image='#cabin3' setPosition='1.5 -1 0.01' textValue='Cabin 3' onSceneChange={onSceneChange} nextScene='sceneMeetingRoomRight' />
        
        <SharedEntity image='#ConferenceRoom' setPosition='4 -1 0.01' textValue='Conference Room' onSceneChange={onSceneChange} nextScene='sceneMeetingRoomBig1' />
        
        <SharedEntity image='#Mumbai' setPosition='6.5 -1 0.01' textValue='Another floor' onSceneChange={onSceneChange} nextScene='sceneMeetingRoomBig2' />
        
        
        
         */}
        
        
       
      </Entity>
    </Entity>
  );
};

export default SharedOptions;
