/*
  Game name: Guess the Number
  Goal: Guess the secret number between 1 and 10.
  How to play: Edit the guess variable and run the game.
*/

const secret = 7;
let guess = 5; // Change this number!

if (guess === secret) {
  console.log("You win!");
} else {
  console.log("Try again!");
}