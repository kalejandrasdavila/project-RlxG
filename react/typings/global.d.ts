
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

// VTEX CSS Handles
declare module 'vtex.css-handles' {
  export function useCssHandles(handles: readonly string[]): Record<string, string>;
}

// jQuery types
declare const $: any;

// Testing types
declare module '@testing-library/jest-dom';
declare module 'jest';
declare module 'jquery';
declare module 'node';

// Webpack require.context
interface RequireContext {
  keys(): string[];
  (id: string): any;
  <T>(id: string): T;
  resolve(id: string): string;
  id: string;
}

interface NodeRequire {
  context(
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ): RequireContext;
}

export { }; // Mantiene el archivo como un módulo para evitar polución global si no se desea.