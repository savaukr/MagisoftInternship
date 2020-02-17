import {add} from './add.js';

describe('Add test', () => {
  
  it('Adds 2 numbers correctly', () => {
    expect(add(1, 1)).toBe(2)
  })

});