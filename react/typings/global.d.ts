
declare global {
  interface Window {
    __RENDER_8_SESSION__?: any;
    __RUNTIME__?: any;

    // Adobe Satellite
    _satelliteLoaded?: boolean;
    _satellite?: {
      pageBottom?: () => void;
      track?: (eventName: string, data?: any) => void;
    };
    _satelliteBackup?: {
      pageBottom?: () => void;
      track?: (eventName: string, data?: any) => void;
    };

    // Swiper
    Swiper?: any;

    // jQuery
    $?: any;

    // Custom functions
    showhideprice: () => void;
    toggleMenu?: () => void;
  }
}

declare module '*.css';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

export { }; // Mantiene el archivo como un módulo para evitar polución global si no se desea.