var expect = require('chai').expect;

describe('5-1: shift M into N', function() {
  it('should properly shift', function() {
    var insert = require('../../src/5_bitManipulation/5-1.js');

    var N = '10000000000';
    var M = '10011';
    var i = 2;
    var j = 6;

    var result = insert(N, M, i, j);
    expect(result).to.equal('10001001100');
  });
});
