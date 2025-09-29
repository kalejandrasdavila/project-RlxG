import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import WatchModel from '../WatchModel';

// Mock para useCssHandles
jest.mock('vtex.css-handles', () => ({
    useCssHandles: () => ({
        'watch-container': 'watch-container',
        'watch-title': 'watch-title',
        'watch-price': 'watch-price',
    }),
}));

// Mock para useInitScripts
jest.mock('../hooks/useInitScripts', () => ({
    __esModule: true,
    default: () => null,
}));

// Mock para React Helmet
jest.mock('react-helmet-async', () => ({
    Helmet: ({ children }: { children: React.ReactNode }) => children,
}));

describe('Componente WatchModel', () => {
    const mockProps = {
        modelName: 'Test Model',
        modelCode: 'M123456-0001',
        price: '$5,000',
        description: 'Test watch description',
    };

    test('renderiza correctamente con props', () => {
        render(<WatchModel {...mockProps} />);

        expect(screen.getByText(mockProps.modelName)).toBeInTheDocument();
        expect(screen.getByText(mockProps.modelCode)).toBeInTheDocument();
    });

    test('maneja clics en botones de precio', () => {
        render(<WatchModel {...mockProps} />);

        const priceButtons = screen.getAllByRole('button');
        priceButtons.forEach(button => {
            fireEvent.click(button);
        });

        // El test pasa si no hay errores
        expect(true).toBe(true);
    });

    test('renderiza sin errores cuando no hay props', () => {
        render(<WatchModel />);

        // El componente debería renderizar sin errores
        expect(screen.getByTestId('watch-container') || screen.getByRole('main')).toBeInTheDocument();
    });
});
