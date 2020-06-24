class PokerUtils {
  static hasPair(cards) {
    // 2 cards with same value
    let cardCount = this.countValuesInHand(cards);
    let cardCountArray = Object.values(cardCount);
    return cardCountArray.includes(2);
  }

  static countValuesInHand(cards) {
    let cardObjectCount = {};
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].value in cardObjectCount) {
        cardObjectCount[cards[i].value] += 1;
      } else {
        cardObjectCount[cards[i].value] = 1;
      }
    }
    return cardObjectCount;
  }

  static hasThreeOfAKind(cards) {
    // 3 cards with same value
    let cardCount = this.countValuesInHand(cards);
    let cardCountArray = Object.values(cardCount);
    return cardCountArray.includes(3);
  }

  static hasStraight(cards) {
    // all 5 cards are in consecutive value order
    let cardValues = cards.map((card) => card.value);
    cardValues.sort((a, b) => a - b);
    for (let i = 0; i < cardValues.length - 1; i++) {
      if (cardValues[i] + 1 !== cardValues[i + 1]) {
        return false;
      }
    }
    return true;
  }

  static hasFlush(cards) {
    // all 5 cards have same suit
    for (let i = 1; i < cards.length; i++) {
      if (cards[i].suit !== cards[0].suit) {
        return false;
      }
    }
    return true;
  }

  static hasFullHouse(cards) {
    // 3 cards of same value AND 2 cards of same value
    return hasPair(cards) && hasThreeOfAKind(cards);
  }

  static hasFourOfAKind(cards) {
    // 4 cards with same value
    let cardCount = this.countValuesInHand(cards);
    let cardCountArray = Object.values(cardCount);
    return cardCountArray.includes(4);
  }

  static hasStraightFlush(cards) {
    // all 5 cards have same suit AND are in consecutive value order
    return this.hasFlush(cards) && this.hasStraight(cards);
  }

  static determineBestHand(playerOneCards, playerTwoCards) {
    // pair < 3 of a kind < straight < flush < full house < 4 of a kind < straight flush
    // 1. check for possible poker hands
    let playerOneResults = [
      this.hasPair(playerOneCards),
      this.hasThreeOfAKind(playerOneCards),
    ];
    if (playerOneResults.length !== 3) {
      playerOneResults = [
        ...playerOneResults,
        this.hasStraight(playerOneCards),
        this.hasFlush(playerOneCards),
        this.hasFullHouse(playerOneCards),
        this.hasFourOfAKind(playerOneCards),
        this.hasStraightFlush(playerOneCards),
      ];
    }
    let playerTwoResults = [
      this.hasPair(playerTwoCards),
      this.hasThreeOfAKind(playerTwoCards),
    ];
    if (playerTwoResults.length !== 3) {
      playerTwoResults = [
        ...playerTwoResults,
        this.hasStraight(playerTwoCards),
        this.hasFlush(playerTwoCards),
        this.hasFullHouse(playerTwoCards),
        this.hasFourOfAKind(playerTwoCards),
        this.hasStraightFlush(playerTwoCards),
      ];
    }
    let playerOneTrueIndex = playerOneResults.lastIndexOf(true);
    let playerTwoTrueIndex = playerTwoResults.lastIndexOf(true);
    if (playerOneTrueIndex === playerTwoTrueIndex) {
      return "TIE";
    } else if (playerOneTrueIndex < playerTwoTrueIndex) {
      return "PLAYER2";
    } else return "PLAYER1";
  }
}

export default PokerUtils;
