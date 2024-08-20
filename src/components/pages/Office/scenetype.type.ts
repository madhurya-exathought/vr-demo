export type SceneType =
  | 'sceneOne'
  | 'sceneTwo'
  | 'sceneThree'
  | 'sceneFour'
  | 'sceneLivingRoom'
  | 'sceneBedroom1'
  | 'sceneBedroom2'
  | 'sceneBathroom'
  | 'sceneGarden'
  | 'sceneInWorks'
  | 'sceneEntraceOutside'
  | 'sceneEntraceInside'
  |'sceneBay1'
    |'sceneBay2'
      |'sceneBay3'
      |'sceneEntrance2Rooms'
      |'sceneMeetingRoomBig1'
      |'sceneMeetingRoomBig2'
      |'sceneMeetingRoomLeft'
      |'sceneMeetingRoomRight'
      |'sceneInsidePathway'
      | 'sceneMeetingRoomAtEntrance'

export type ScenesProps = {
  onSceneChange: () => void;
  onBack: () => void;
};

export type SceneNavProps = {
  onSceneChange: (nextScene: SceneType) => void;
  onBack: () => void;
};

export type SceneSpacesProps = {
  onBack: () => void;
  children?: React.ReactNode;
};

export type ImageEntityProps = {
  src: string;
  position: string;
  handleClick: () => void;
};

export type SkyEntityProps={
  src:string;
  setRotation?:string;
}


export interface NavigationButtonProps {
  onBack: () => void;
  setPosition :string;
  setRotation?:string;
  events?:object;
}
