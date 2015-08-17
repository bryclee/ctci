module.exports = (function() {
	var NAMES = {
		1: 'Ace',
		11: 'Jack',
		12: 'Queen',
		13: 'King'
	};

	var SUITS = {
		0: 'Diamonds',
		1: 'Clubs',
		2: 'Hearts',
		3: 'Spades'
	};

	var Deck = function() {
		this.cards = []; //array that holds all the cards currently in the deck
		/* can instantiate deck with 52 cards for playing card deck */
	};

	Deck.prototype.initialize = function() {
		for (var suit in SUITS) {
			for (var i = 1; i <= 13; i++) {
				this.cards.push(new Card(i, suit));
			}
		}
	};

	Deck.prototype.shuffle = function() {
		var randomIndex;
		var temp;
		for (var i = 0; i < this.cards.length; i++) {
			randomIndex = Math.floor(Math.random() * (this.cards.length - i)) + i;
			temp = this.cards[i];
			this.cards[i] = this.cards[randomIndex];
			this.cards[randomIndex] = temp;
		}
	};

	Deck.prototype.dealCard = function() {
		return this.cards.pop();
	};

	Deck.prototype.dealHand = function(n) {
		n = n || 0;

		var hand = new Hand();

		for ( ; n > 0; n--) {
			hand.addCard(this.dealCard());
		}

		return hand;
	};


	var Card = function(value, suit) {
		if (value === undefined || suit === undefined) {
			//Throw error for required values
			return null;
		}

		this.value = value;
		this.suit = suit;
		this.revealed = true;
	};

	Card.prototype.flip = function() {
		this.revealed = !this.revealed;
	};

	Card.prototype.getName = function() {
		return NAMES[this.value];
	};

	Card.prototype.getSuit = function() {
		return SUITS[this.suit];
	};


	var Hand = function(cards) {
		this.cards = cards || [];
	};

	Hand.prototype.addCard = function(card) {
		this.cards.push(card);
	};


	return {
		Deck: Deck,
		Card: Card,
		Hand: Hand
	};
})();
