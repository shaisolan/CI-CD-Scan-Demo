const { add, multiply } = require('./math');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('multiplies 3 * 4 so that it equals 12 test', () => {
    expect(multiply(3, 4)).toBe(12);
});