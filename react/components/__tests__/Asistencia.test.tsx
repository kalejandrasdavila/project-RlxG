import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Asistencia from '../asistencia/Asistencia';

// Mock para useCssHandles
jest.mock('vtex.css-handles', () => ({
    useCssHandles: () => ({
        'asistencia-container': 'asistencia-container',
        'asistencia-title': 'asistencia-title',
        'asistencia-form': 'asistencia-form',
        'asistencia-input': 'asistencia-input',
        'asistencia-button': 'asistencia-button',
    }),
}));

// Mock para useInitScripts
jest.mock('../hooks/useInitScripts', () => ({
    __esModule: true,
    default: () => null,
}));

describe('Componente Asistencia', () => {
    beforeEach(() => {
        // Limpiar mocks antes de cada test
        jest.clearAllMocks();
    });

    test('renderiza correctamente el componente', () => {
        render(<Asistencia />);

        // Verificar que el componente se renderiza sin errores
        expect(screen.getByText(/asistencia/i)).toBeInTheDocument();
    });

    test('muestra el título principal', () => {
        render(<Asistencia />);

        const title = screen.getByRole('heading', { level: 1 });
        expect(title).toBeInTheDocument();
    });

    test('contiene formulario de contacto', () => {
        render(<Asistencia />);

        // Buscar elementos del formulario
        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
    });

    test('maneja clics en botones', () => {
        render(<Asistencia />);

        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toBeGreaterThan(0);

        // Simular clic en el primer botón
        fireEvent.click(buttons[0]);
        // El test pasa si no hay errores
    });

    test('maneja cambios en inputs', () => {
        render(<Asistencia />);

        const inputs = screen.getAllByRole('textbox');
        if (inputs.length > 0) {
            fireEvent.change(inputs[0], { target: { value: 'test@example.com' } });
            expect(inputs[0]).toHaveValue('test@example.com');
        }
    });
});
