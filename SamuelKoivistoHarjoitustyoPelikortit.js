// Luokka pelikortille.

class Card {
  constructor(suit, value) {
    this._suit = suit;
    this._value = value;
  }

  // Name()-metodilla saa palautettua kortin nimen (esim. 'Ace of Clubs').

  Name() {
    let suitStr = "";
    let valueStr = "";

    switch(this._suit) {
      case 0:
        suitStr = "Clubs";
        break;
      case 1:
        suitStr = "Diamonds";
        break;
      case 2:
        suitStr = "Hearts";
        break;
      case 3:
        suitStr = "Spades";
        break;
    }

    if(this._value<9) {
      valueStr = this._value + 2;
    }

    switch(this._value) {
      case 9:
        valueStr = "Jack";
        break;
      case 10:
        valueStr = "Queen";
        break;
      case 11:
        valueStr = "King";
        break;
      case 12:
        valueStr = "Ace";
        break;
    }

  name = valueStr + " of " + suitStr;
  return name;
  }
}

// Luokka korttipakalle. Metodit kortin jakamiselle pakasta (DealCard) sekä pakan sekoittamiselle (Shuffle).

class CardDeck {
  constructor(deck) {
    this._deck = deck;
    for(let i=0; i<4; i++) {
      for(let j=0; j<13; j++) {
        deck.push(new Card(i, j))
      }
    }
  }

  DealCard() {
    let nextCard = this._deck.pop();
    return nextCard;
  }

  // Pakan sekoittaminen Fisher-Yates -algoritmilla
  // https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/

  Shuffle() {
    let currentIndex = this._deck.length;
    let temporaryValue, randomIndex;

    while(0 !== currentIndex) {
      randomIndex = Math.floor(Math.random()*currentIndex);
      currentIndex = currentIndex - 1;
      temporaryValue = this._deck[currentIndex];
      this._deck[currentIndex] = this._deck[randomIndex];
      this._deck[randomIndex] = temporaryValue;
    }
  }
}
