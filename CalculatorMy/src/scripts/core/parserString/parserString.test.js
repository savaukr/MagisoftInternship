import {parserString} from './parserString.js';

describe('Parser  test', () => {
  
  it('Parser string correctly', () => {
    expect(parserString('10+2*(7+3)')).toEqual(['10','+','2','*','(','7','+','3',')'])
  })

});