//https://gist.github.com/meghalshah210/9131c757cabeaf79777fdd83ca8a52d3
let prompt = require("prompt-sync")({sigint: true});

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let correctNumber = false, guessInput = [], attempts;
 
while (!correctNumber) {
  let guess = prompt('Guess a number: ');
  guess = Number(guess);
  if(!isNaN(guess)){
    if(!guessInput.includes(guess)){
      guessInput.push(guess);
      if(guess < randomNumber){
        console.log("Too Low!");
      }else if(guess > randomNumber){
        console.log("Too High!");
      }else if (guess === randomNumber) {
        attempts = guessInput.length === 1 ? "attempt" : "attempts";
        console.log(`You got it! You took ${guessInput.length} ${attempts}!`);
        foundCorrectNumber = true;
      }
    }else{
      console.log("Already Guessed!");
    }
  }else{
    console.log("Not a number! Try again!");
  }
}
