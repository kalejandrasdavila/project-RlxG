import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Test básico para verificar que Jest funciona
describe('Sistema de Testing', () => {
    test('Jest está funcionando correctamente', () => {
        expect(true).toBe(true);
    });

    test('React Testing Library está funcionando', () => {
        const TestComponent = () => <div data-testid="test">Hola Mundo</div>;
        render(<TestComponent />);
        expect(screen.getByTestId('test')).toBeInTheDocument();
        expect(screen.getByText('Hola Mundo')).toBeInTheDocument();
    });

    test('Mocks funcionan correctamente', () => {
        const mockFn = jest.fn();
        mockFn('test');
        expect(mockFn).toHaveBeenCalledWith('test');
    });
});
