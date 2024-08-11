export type SceneType =
  | 'sceneOne'
  | 'sceneTwo'
  | 'sceneThree'
  | 'sceneFour'
  | 'sceneLivingRoom'
  | 'sceneBedroom1'
  | 'sceneBedroom2'
  | 'sceneBathroom'
  | 'sceneGarden';

export type SceneTwoThreeProps = {
  onSceneChange: () => void;
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
