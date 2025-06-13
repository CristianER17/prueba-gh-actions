const suma = require('./calculadora');

test('suma de 5 + 3 debe ser 8', () => {
    expect(suma.suma(5,3)).toBe(8);
});