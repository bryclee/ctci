var expect = require('chai').expect;

describe('findKthNumber', function() {
	it('should find the kth number that is a multiple of 3s, 5s, and 7s only', function() {
		var findKth = require('../../src/7_mathProbability/7_7-kthNumber.js');
		expect(findKth(1)).to.equal(1);
		expect(findKth(2)).to.equal(3);
		expect(findKth(3)).to.equal(5);
		expect(findKth(4)).to.equal(7);
		expect(findKth(5)).to.equal(9);
		expect(findKth(10)).to.equal(35);
	});
});
