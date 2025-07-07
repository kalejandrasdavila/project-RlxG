
declare global { 
  interface Window {
    __RENDER_8_SESSION__?: any;
    __RUNTIME__?: any;

    _satelliteLoaded?: boolean;
    _satellite?: {
      pageBottom: () => void;
      track: (eventName: string, data?: any) => void;
    };
    _satelliteBackup?: {
      pageBottom: () => void;
      track: (eventName: string, data?: any) => void;
    };

    showhideprice: () => void;
  }
} 

declare module '*.css';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

export {}; // Mantiene el archivo como un módulo para evitar polución global si no se desea.