var expect = require('chai').expect;

describe('deck of cards', function() {
	var Cards = require('../../src/8_OOP/8-1_cards.js');

	it('should have proper classes', function() {
		expect(Cards.Deck).to.be.a('function');
		expect(Cards.Card).to.be.a('function');
		expect(Cards.Hand).to.be.a('function');
	});

	describe('deck', function() {
		var deck = new Cards.Deck();

		it('should have methods to handle cards', function() {
			expect(deck.shuffle).to.be.a('function');
			expect(deck.dealCard).to.be.a('function');
			expect(deck.dealHand).to.be.a('function');
		});
	});

	describe('hand', function() {
		var hand = new Cards.Hand();

		it('should have an array of cards', function() {
			expect(hand.cards).to.be.an.instanceOf(Array);
		});
	});

	describe('card', function() {
		var card = new Cards.Card(0, 0);

		it('should have a value and suit', function() {
			expect(card.value).to.be.a('number');
			expect(card.suit).to.be.a('number');
		});
	});

});

