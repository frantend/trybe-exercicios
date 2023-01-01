const sum = require('./sum');

test ('teste soma', () => {
  expect(sum(2,3)).toBe(5);
});
