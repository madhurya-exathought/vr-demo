import { SceneOptionType } from "../components/pages/Office/scenetype.type";


export const imagesSceneOne = [
    { src: '#Bengaluru', position: '-3 0 0.01', text: 'Bengaluru' },
    { src: '#Chennai', position: '-1.5 0 0.01', text: 'Chennai' },
    { src: '#Mumbai', position: '0 0 0.01', text: 'Mumbai' },
    { src: '#Hyderabad', position: '1.5 0 0.01', text: 'Hyderabad' },
    { src: '#NewDelhi', position: '3 0 0.01', text: 'New Delhi' },
  ];

export const imagesSceneTwo = [
    { src: '#Villa', position: '-0.75 0 0.01', text: 'Residential' },
    { src: '#Apartment', position: '0.75 0 0.01', text: 'Commercial' },
  ];

export const imagesSceneThree = [
    { src: '#1BHK', position: '-1.5 0 0.01', text: '1 Floor' },
    { src: '#2BHK', position: '0 0 0.01', text: '2 Floors' },
    { src: '#3BHK', position: '1.5 0 0.01', text: '3 Floors' },
  ];


export const imagesSceneFour = [
    { src: '#Exathought', position: '-2.25 0 0.01', text: 'ExaThought' },
    { src: '#Prestige', position: '-0.75 0 0.01', text: 'Prestige' },
    { src: '#TVS', position: '0.75 0 0.01', text: 'TVS' },
    { src: '#JSW', position: '2.25 0 0.01', text: 'JSW' },
  ];




export const SceneOptions: SceneOptionType[] = [
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
  

