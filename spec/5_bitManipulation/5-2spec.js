var expect = require('chai').expect;

describe('5-2: bit decimal representation', function() {
  var convert = require('../../src/5_bitManipulation/5-2.js');

  it('should give binary representation if possible', function() {
    expect(convert(0.25)).to.equal('0.01');
    expect(convert(4.75)).to.equal('100.11');
  });

  it('should return ERROR if number cannot be represented in 32 characters', function() {
    expect(convert(0.1)).to.equal('ERROR');
  });
});
