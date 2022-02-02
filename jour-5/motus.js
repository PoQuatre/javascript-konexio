const prompt = require("prompt");
const { words } = require("./words");

const red = (str) => `\x1b[31m${str}\x1b[0m`;
const yellow = (str) => `\x1b[33m${str}\x1b[0m`;

let attempts = 0;
const randomWord =
  words[Math.floor(Math.random() * words.length)].toUpperCase();
const randomWordLetters = randomWord.split("");

console.log(red(randomWord[0]) + "....");

prompt.start();

function play() {
  if (attempts >= 6) {
    console.log("Tu as perdu !");
    return;
  }

  attempts++;

  prompt.get({ name: "guess", description: "Entrez un mot " }, (err, res) => {
    if (err) {
      console.log("error");
      return;
    }

    const guess = res.guess.toUpperCase();

    if (guess.length !== randomWord.length) {
      console.log("Tu as perdu !");
      return;
    }

    let result = "";
    const letters = [...randomWordLetters];
    const matchedLetters = [];

    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === randomWord[i]) {
        matchedLetters.push(i);
        letters.splice(letters.indexOf(guess[i]), 1);
      }
    }

    for (let i = 0; i < guess.length; i++) {
      if (matchedLetters.includes(i)) {
        result += red(guess[i]);
      } else if (letters.includes(guess[i])) {
        result += yellow(guess[i]);
        letters.splice(letters.indexOf(guess[i]), 1);
      } else {
        result += guess[i];
      }
    }

    console.log(result);

    if (matchedLetters.length === guess.length) {
      console.log("Bravo !!");
      return;
    }

    play();
  });
}

play();
