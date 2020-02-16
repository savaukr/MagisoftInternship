const findResult =  require('./index.js');

it('adds 5 + 4 to equal 9', () => {
  expect(findResult('5+4')).toBe(9);
});