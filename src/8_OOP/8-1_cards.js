module.exports = (function() {
	var Deck = function() {
		this.cards = []; //array that holds all the cards currently in the deck
		/* can instantiate deck with 52 cards for playing card deck */
	};

	Deck.prototype.shuffle = function() {
		/* ... */
	};

	Deck.prototype.dealCard = function() {
		/* ... */
	};

	Deck.prototype.dealHand = function() {
		/* ... */
	};


	var Card = function(value, suit) {
		this.value = value;
		this.suit = suit;
		this.revealed = true;
	};

	Card.prototype.flip = function() {
		this.revealed = !this.revealed;
	};


	var Hand = function() {
		this.cards = [];
	};


	return {
		Deck: Deck,
		Card: Card,
		Hand: Hand
	};
})();
