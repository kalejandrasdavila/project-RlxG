// Test básico en JavaScript para evitar problemas de TypeScript
describe('Sistema de Testing Básico', () => {
    test('Jest está funcionando correctamente', () => {
        expect(true).toBe(true);
    });

    test('Matemáticas básicas funcionan', () => {
        expect(2 + 2).toBe(4);
        expect(10 - 5).toBe(5);
        expect(3 * 4).toBe(12);
    });

    test('Strings funcionan correctamente', () => {
        const mensaje = 'Hola Mundo';
        expect(mensaje).toContain('Hola');
        expect(mensaje).toHaveLength(10);
    });

    test('Arrays funcionan correctamente', () => {
        const numeros = [1, 2, 3, 4, 5];
        expect(numeros).toHaveLength(5);
        expect(numeros).toContain(3);
        expect(numeros[0]).toBe(1);
    });

    test('Objetos funcionan correctamente', () => {
        const usuario = { nombre: 'Juan', edad: 30 };
        expect(usuario.nombre).toBe('Juan');
        expect(usuario.edad).toBe(30);
        expect(usuario).toHaveProperty('nombre');
    });

    test('Funciones funcionan correctamente', () => {
        const sumar = (a, b) => a + b;
        expect(sumar(2, 3)).toBe(5);
        expect(sumar(10, -5)).toBe(5);
    });

    test('Mocks funcionan correctamente', () => {
        const mockFn = jest.fn();
        mockFn('test');
        expect(mockFn).toHaveBeenCalledWith('test');
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
