
var result = 0;

for(var i = 0; i < 5; i++) {
    result += 2;
}

console.log(result);

/* Unit Testing */

const timesTwo = require('./timesTwo');

test('Should return value multiplied by 2', () => {
    expect(timesTwo(10)).toBe(20);
}) 