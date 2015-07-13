/*
	Find the kth number that consists of only the prime factors 3, 5, and 7.

	k 		num 		3		5		7
	--		----		--		--		--
	1		1			0		0		0
	2		3			1		0		0
	3		5			0		1		0
	4		7			0		0		1
	5		9			2		0		0
	6		15			1		1		0
	7		21			1		0		1
	8		25			0		2		0
	9		27			3		0		0
	10		35			0		1		1
	11		45			2		1		0
	12		49			0		0		2
*/

module.exports = (function() {
	var Queue = require('../stackQueues/Queue.js');

	return function findKthNumber(k) {
		var threes = new Queue();
		var fives = new Queue();
		var sevens = new Queue();
		var threeHead = 3;
		var fiveHead = 5;
		var sevenHead = 7;
		var number, min;

		if (k < 1) {
			return null;
		} else if (k === 1) {
			return 1;
		} else {
			while (--k > 0) {
				min = Math.min(threeHead, fiveHead, sevenHead);
				if (min === threeHead) {
					number = threeHead;
					threes.enqueue(threeHead * 3);
					fives.enqueue(threeHead * 5);
					sevens.enqueue(threeHead * 7);
					threeHead = threes.dequeue();
				} else if (min === fiveHead) {
					number = fiveHead;
					fives.enqueue(fiveHead * 5);
					sevens.enqueue(fiveHead * 7);
					fiveHead = fives.dequeue();
				} else {
					number = sevenHead;
					sevens.enqueue(sevenHead * 7);
					sevenHead = sevens.dequeue();
				}
			}

			return number;
		}
	};
})();
