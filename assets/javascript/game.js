var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function generateLetter(){return alphabet[Math.floor(Math.random() * alphabet.length)];}
var computerGuess = generateLetter();
var wins = 0;
var loss = 0;
var guessLeft = 10;
var letterGuessed = [];
var n = null;
console.log(computerGuess);
// printResults();

document.onkeyup = function(event) {
  var key = event.key.toLowerCase();
  n = computerGuess.indexOf(key);
  // console.log(n);
  if(n === 0){
    wins++;
    reset();
    console.log("wins" + wins);
    printResults();
  }
  else {
    letterGuessed.push(" " + key);
    console.log(letterGuessed);
    guessLeft--;
    printResults();
    if(guessLeft <= 0){
      loss++;
      reset();
      console.log("loss" + loss);
      printResults();
    }
  }
}
printResults();

function reset() {
  letterGuessed = [];
  guessLeft = 10;
  computerGuess = generateLetter();
  console.log(computerGuess);

}
function printResults() {
  document.querySelector("#wins").innerHTML = "wins: " + wins;
  document.querySelector("#loss").innerHTML = "losses: " + loss;
  document.querySelector("#guess-left").innerHTML = "guesses left: " + guessLeft;
  document.querySelector("#letters-guessed").innerHTML = "letters guessed: " + letterGuessed;


}
