
console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  };
};

var flipCard = function (cardId) {
  cardsInPlay.push(cards[cardId]);
  console.log("User flipped" + " " + cards[cardId]);}

checkForMatch();

flipCard(0);

flipCard(2);

if (cardsInPlay.length === 2); console.log("2 cards flipped")

if (cardsInPlay[0] === cardsInPlay[1]); {alert("You found a match!");}

elseif (cardsInPLay[0] !== cardsInPlay[1]); {alert("Sorry try again!");}

/*var cardOne = cards[0];

cardsInPlay.push("cardOne");

console.log("User flipped " + cardOne);

var cardTwo = cards[1];

cardsInPlay.push("cardTwo");

console.log("User flipped " + cardTwo);*/
