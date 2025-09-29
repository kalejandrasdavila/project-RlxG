import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home';

// Mock para useCssHandles
jest.mock('vtex.css-handles', () => ({
    useCssHandles: () => ({
        'home-container': 'home-container',
        'home-title': 'home-title',
    }),
}));

// Mock para useInitScripts
jest.mock('../hooks/useInitScripts', () => ({
    __esModule: true,
    default: () => null,
}));

// Mock para componentes de partes
jest.mock('../components/parts/Nav', () => {
    return function MockNav() {
        return <nav data-testid="nav">Navigation</nav>;
    };
});

jest.mock('../components/parts/Footer', () => {
    return function MockFooter() {
        return <footer data-testid="footer">Footer</footer>;
    };
});

describe('Componente Home', () => {
    test('renderiza correctamente', () => {
        render(<Home />);

        // Verificar que el componente se renderiza
        expect(screen.getByTestId('nav')).toBeInTheDocument();
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    test('no tiene errores de consola', () => {
        const consoleSpy = jest.spyOn(console, 'error');
        render(<Home />);

        expect(consoleSpy).not.toHaveBeenCalled();
        consoleSpy.mockRestore();
    });
});
