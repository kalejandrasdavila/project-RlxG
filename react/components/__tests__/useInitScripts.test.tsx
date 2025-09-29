import { renderHook } from '@testing-library/react';
import useInitScripts from '../hooks/useInitScripts';

// Mock para Swiper
jest.mock('swiper', () => ({
    __esModule: true,
    default: jest.fn(() => ({
        use: jest.fn(),
        destroy: jest.fn(),
        update: jest.fn(),
    })),
}));

// Mock para jQuery
global.$ = jest.fn(() => ({
    off: jest.fn().mockReturnThis(),
    on: jest.fn().mockReturnThis(),
    toggleClass: jest.fn().mockReturnThis(),
    hasClass: jest.fn().mockReturnValue(false),
    addClass: jest.fn().mockReturnThis(),
    removeClass: jest.fn().mockReturnThis(),
    find: jest.fn().mockReturnThis(),
    text: jest.fn().mockReturnThis(),
    next: jest.fn().mockReturnThis(),
}));

// Mock para window._satellite
Object.defineProperty(window, '_satellite', {
    value: {
        pageBottom: jest.fn(),
        track: jest.fn(),
    },
    writable: true,
});

Object.defineProperty(window, '_satelliteLoaded', {
    value: false,
    writable: true,
});

describe('Hook useInitScripts', () => {
    beforeEach(() => {
        // Limpiar mocks
        jest.clearAllMocks();

        // Resetear DOM
        document.body.innerHTML = '';
        document.head.innerHTML = '';
    });

    test('se ejecuta sin errores', () => {
        const { result } = renderHook(() => useInitScripts());

        expect(result.current).toBeNull();
    });

    test('maneja el caso cuando window es undefined', () => {
        const originalWindow = global.window;
        // @ts-ignore
        delete global.window;

        const { result } = renderHook(() => useInitScripts());

        expect(result.current).toBeNull();

        global.window = originalWindow;
    });

    test('configura event listeners correctamente', () => {
        // Crear elementos DOM necesarios
        document.body.innerHTML = `
      <button id="btnVolverArriba">Volver arriba</button>
      <a class="rlx-sm btn-toggle">Toggle</a>
      <nav class="rlx-header-menu-top">Menu</nav>
    `;

        renderHook(() => useInitScripts());

        // Verificar que jQuery se llamó para configurar eventos
        expect($).toHaveBeenCalled();
    });

    test('maneja la limpieza de event listeners', () => {
        const { unmount } = renderHook(() => useInitScripts());

        // No debería haber errores al desmontar
        expect(() => unmount()).not.toThrow();
    });
});
