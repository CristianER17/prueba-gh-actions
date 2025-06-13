const calc = require('./calculadora');

test('suma de 5 + 3 debe ser 8', () => {
    expect(calc.suma(5,3)).toBe(8);
});

test('resta de 10 - 6 debe ser 4', () => {
    expect(calc.resta(10,6)).toBe(4);
});

test('multiplicación de 5 x 12 debe ser 60', () => {
    expect(calc.multiplicar(5,12)).toBe(60);
});

test('división de 6 / 2 debe ser 3', () => {
    expect(calc.dividir(6,2)).toBe(3);
});