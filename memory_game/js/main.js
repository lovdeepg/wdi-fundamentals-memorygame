var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardsInPlay = [cardOne];
cardsInPlay.push (cardOne);

var cardTwo = cards[2];
var cardsInPlay = [cardTwo];
cardsInPlay.push (cardTwo);


if (cardsInPlay.length === 2); {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("you found a match");
} else {
	alert("sorry, try again!");
}
}



console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
