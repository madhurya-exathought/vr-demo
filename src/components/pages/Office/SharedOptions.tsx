import React,{useState,useEffect} from 'react';
import 'aframe';
import { Entity } from 'aframe-react';
import { SceneType } from './scenetype.type';
import SharedEntity from './SharedEntity';


interface SharedOptionsType {
  onSceneChange: (nextScene:SceneType ) => void;
}

type SceneOption = {
  image: string;
  position: string;
  text: string;
  next: SceneType;
};



const SceneOptions:SceneOption[] = [
  { image: '#OfficeEntrance', position: '-5 1 0.01',text:'Office Entrance',next:'sceneEntranceOutside'},
  { image: '#FloorView1', position: '-2.5 1 0.01',text:'Floor View 1',next:'sceneEntranceInside'},
  { image: '#FloorView2', position: '0 1 0.01',text:'Floor View 2',next:'sceneInsidePathway'},
  { image: '#cabin1', position: '2.5 1 0.01' ,text:'Cabin 1',next:'sceneMeetingRoomAtEntrance'},
  { image: '#FloorView3', position: '5 1 0.01',text:'Floor View 3',next:'sceneBay1'},
 /*  { image: '#Bengaluru', position: '6.5 1 0.01' ,text:'Another View',next:'sceneBay2'}, */

  { image: '#FloorView4', position:'-5 -1 0.01',text:'Floor View 4',next:'sceneBay3'},
  { image: '#FloorView5', position: '-2.5 -1 0.01' ,text:'Floor View 5',next:'sceneEntrance2Rooms'},
  { image: '#cabin2', position: '0 -1 0.01' ,text:'Cabin 2',next:'sceneMeetingRoomLeft'},
  { image: '#cabin3', position: '2.5 -1 0.01' ,text:'Cabin 3',next:'sceneMeetingRoomRight'},
  { image: '#ConferenceRoom', position: '5 -1 0.01' ,text:'Conference Room',next:'sceneMeetingRoomBig1'},
  /* { image: '#Mumbai', position: '6.5 -1 0.01' ,text:'Yet Another View',next:'sceneMeetingRoomBig2'}, */
 
];


const SharedOptions: React.FC<SharedOptionsType> = ({ onSceneChange }) => {

  const [isSelectionPlaneVisible, setIsSelectionPlaneVisible] = useState(false);
const [areHeroClickEventsEnabled, setAreHeroClickEventsEnabled] = useState(false);

const [mainEntityState, setMainEntityState] = useState({
  position: { x: -4, y: -1.5, z: -4 },
  rotation: { x: 0, y: 0, z: 0 },
});

const toggleMoveAndRotate = () => {
  if (mainEntityState.position.x === -4) {
    setMainEntityState({
      position: { x: -3.85, y: 1.75, z: -4 },
      rotation: { x: 0, y: 0, z: 180 },
    });
  } else {
    setMainEntityState({
      position: { x: -4, y: -1.5, z: -4 },
      rotation: { x: 0, y: 0, z: 0 },
    });
  }
};

const toggleVisibilityAndClickEvents = () => {
  setIsSelectionPlaneVisible(prevState => !prevState);
  setAreHeroClickEventsEnabled(prevState => !prevState);
};


  return (
    <Entity>
      <Entity
      id='Main'
        geometry={{ primitive: 'plane', width: 0.5, height: 0.5 }}
        material={{ src: '#upDown', color: 'white', opacity: 0.8 }}
     
        position={`${mainEntityState.position.x} ${mainEntityState.position.y} ${mainEntityState.position.z}`}
        rotation={`${mainEntityState.rotation.x} ${mainEntityState.rotation.y} ${mainEntityState.rotation.z}`}
        className="clickable"
        animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
        animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
        events={{
          click: () => {
            toggleVisibilityAndClickEvents();
            toggleMoveAndRotate();
          },
        }}
       
       

      />
      <Entity
        id="selectionPlane"
        visible={isSelectionPlaneVisible}
        geometry={{ primitive: 'plane', width: 13, height: 4.5 }}
        material={{src:'#plane', color: 'black', opacity: 0.9 }}
        position="2 0 -4.2"
        rotation="0 0 0"
        animation__scale="property: scale; from: 0 0 0; to: 1 1 1; dur: 1000; easing: easeInOutQuad;"
       
     >




{SceneOptions.map((image, index) => (
<Entity
      id='hero'
      geometry={{ primitive: 'plane', width: 1.5, height: 1 }}
      material={{ src: image.image,transparent: true,alphaTest: 0.9}}
      position={image.position}
      rotation="0 0 0"
      className="clickable"
      animation__mouseenter="property: scale; to: 1.2 1.2 1; dur: 300; startEvents: raycaster-intersected"
      animation__mouseleave="property: scale; to: 1 1 1; dur: 300; startEvents: raycaster-intersected-cleared"
      events={areHeroClickEventsEnabled ? {
        click: () => {
          console.log('Image clicked in ', image.text);
          onSceneChange(image.next);
        }
      } : {}}
    >
      <Entity primitive="a-text" value={image.text} color="white" align="center" position="0 -0.8 0.01" width="3" />
    </Entity>  ))}

      </Entity>
    </Entity>
  );
};


export default SharedOptions;

{/*         {SceneOptions.map((image, index) => (
          <SharedEntity
            key={index}
            image={image.image}
            setPosition={image.position}
            onSceneChange={onSceneChange}
            textValue={image.text}
            nextScene={image.next}
            isSelectionPlaneVisible={true}
          />
        ))} */}

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
        
        /*  
  const handleVisibilityToggle = () => {
    const selectionPlane = document.querySelector('#selectionPlane');
    if (selectionPlane) {
      const currentVisibility = selectionPlane.getAttribute('visible');
      console.log(currentVisibility)
      return(currentVisibility)
     
    }
  };
 */
/*   const NavigationHandler = () => {

   
  
   /*  if (isSelectionPlaneVisible) { *
      console.log('Image clicked in ', image.t);
      onSceneChange(nextScene);
    
  };
 */
  