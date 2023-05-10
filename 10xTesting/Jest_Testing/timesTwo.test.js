/* Unit Testing */

const timesTwo = require('./timesTwo');

test('Should return value multiplied by 2', () => {
    expect(timesTwo(10)).toBe(20);
})