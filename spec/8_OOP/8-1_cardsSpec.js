var expect = require('chai').expect;

describe('deck of cards', function() {
	var Cards = require('../../src/8_OOP/8-1_cards.js');

	it('should have Deck, Card, and Hand classes', function() {
		expect(Cards.Deck).to.be.a('function');
		expect(Cards.Card).to.be.a('function');
		expect(Cards.Hand).to.be.a('function');
	});

	describe('deck', function() {
		var deck = new Cards.Deck();

		it('should be able to initialize with 52 cards', function() {
			expect(deck.initialize).to.be.a('function');

			deck.initialize();

			expect(deck.cards.length).to.equal(52);
		});

		it('should be able to shuffle the cards', function() {
			expect(deck.shuffle).to.be.a('function');

			var originalOrder = deck.cards.slice();

			deck.shuffle();

			expect(deck.cards).to.not.eql(originalOrder);
		});

		it('should be able to deal cards', function() {
			expect(deck.dealCard).to.be.a('function');

			var dealtCard = deck.dealCard();

			expect(dealtCard).to.be.an.instanceOf(Cards.Card);
		});

		it('should be able to deal a hand with cards', function() {
			expect(deck.dealHand).to.be.a('function');

			var dealtHand = deck.dealHand(3); //Hand.prototype.addCard should be stubbed out

			expect(dealtHand).to.be.an.instanceOf(Cards.Hand);
			expect(dealtHand.cards.length).to.equal(3);
		});
	});

	describe('hand', function() {
		var hand;
		beforeEach(function() {
			hand = new Cards.Hand();
		});

		it('should have an array of cards', function() {
			expect(hand.cards).to.be.an.instanceOf(Array);
		});

		it('should be able to add cards', function() {
			expect(hand.addCard).to.be.a('function');

			hand.addCard(new Cards.Card(0, 0));

			expect(hand.cards.length).to.equal(1);
		});
	});

	describe('card', function() {
		var card = new Cards.Card(1, 0);

		it('should have a value and suit', function() {
			expect(card.value).to.be.a('number');
			expect(card.suit).to.be.a('number');
		});

		it('should be able to get the name of the card', function() {
			expect(card.getName).to.be.a('function');

			var name = card.getName();

			expect(name).to.equal('Ace');
		});

		it('should be able to get the suit of the card', function() {
			expect(card.getSuit).to.be.a('function');

			var suit = card.getSuit();

			expect(suit).to.equal('Diamonds');
		});
	});

});

