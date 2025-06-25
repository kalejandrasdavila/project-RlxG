interface Window {
  __RENDER_8_SESSION__: any;
  __RUNTIME__: any;
  _satelliteLoaded?: boolean;
  _satellite?: {
    pageBottom: () => void;
    track: (eventName: string, data?: any) => void;
  };
  _satelliteBackup?: any;
  showhideprice: () => void;
}

declare module '*.css';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

export {}; 