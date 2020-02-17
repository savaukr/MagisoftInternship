import {multiply} from './multiply.js';

describe('Multiply test', () => {
  
  it('Multiply 2 numbers correctly', () => {
    expect(multiply(5, 2)).toBe(10)
  })

});