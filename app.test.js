const { add, substract } = require('./app');

test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
});

test('substract two numbers', () => {
    expect(substract(5, 2)).toBe(3);
});