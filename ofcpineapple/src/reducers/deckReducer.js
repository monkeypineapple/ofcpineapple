

// var suits = ["spades", "diamonds", "clubs", "hearts"];
// var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];



// function getDeck()
// {
// 	var deck = new Array();

// 	for(var i = 0; i < suits.length; i++)
// 	{
// 		for(var x = 0; x < values.length; x++)
// 		{

      //need to add facup images and facedown images
      
// 			var card = {Value: values[x], Suit: suits[i]};
// 			deck.push(card);
// 		}
// 	}

// 	return deck;
// }





const initialDeckState = [
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
  {
    faceUp: true,
    value: 7,
    suit: "clubs",
    faceUpImg: "https://www.totalnonsense.com/KS.png",
    faceDownImg: "https://cdn2.f-cdn.com/contestentries/88434/10447013/53bec8a13782d_thumb900.jpg",
  },
];








export default function deckReducer(state = initialDeckState, action) {
  return state;
}
