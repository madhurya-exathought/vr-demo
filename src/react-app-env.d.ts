/// <reference types="react-scripts" />




declare namespace JSX {
  interface IntrinsicElements {
    'a-scene': any;
    'a-box': any;
    'a-sky': any;
    'a-plane': any;
    'a-cylinder': any;
    'a-entity': any;
    'a-sphere': any;
    'a-assets': any;
    'a-cursor': any;
    'a-camera': any;
    'a-mixin': any;
    'a-image': any;
    'a-ring': any;
    'a-text': any;
    'a-asset-item':any
    'a-light':any;
    'a-curvedimage':any

    // Add more A-Frame elements as needed
  }
}

// Optional: remove if not using `AFRAME` directly
declare const AFRAME: any;

declare module 'aframe-react' {
  import * as React from 'react';

  export interface EntityProps {
    id?: string;
    className?: string;
    primitive?: string;
    mixin?: string;
    geometry?: any;
    material?: any;
    position?: string;
    rotation?: string;
    scale?: string;
    events?: any;
    
    [propName: string]: any;
  }

  export class Entity extends React.Component<EntityProps> {}

  export interface SceneProps {
    id?: string;
    className?: string;
    [propName: string]: any;
  }

  export class Scene extends React.Component<SceneProps> {}
}
declare module '*.glb' {
  const value: string;
  export default value;
}