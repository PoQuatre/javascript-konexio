const prompt = require("prompt");
const randomWords = require("random-words");

const hangman = [
  `
       
       
       
       
       
       
         `,
  `
       
       
       
       
       
       
=========`,
  `
      +
      |
      |
      |
      |
      |
=========`,
  `
  +---+
      |
      |
      |
      |
      |
=========`,
  `
  +---+
  |   |
  o   |
      |
      |
      |
=========`,
  `
  +---+
  |   |
  o   |
  |   |
      |
      |
=========`,
  `
  +---+
  |   |
  o   |
 /|   |
      |
      |
=========`,
  `
  +---+
  |   |
  o   |
 /|\\  |
      |
      |
=========`,
  `
  +---+
  |   |
  o   |
 /|\\  |
 /    |
      |
=========`,
  `
  +---+
  |   |
  o   |
 /|\\  |
 / \\  |
      |
=========`,
];

const mysteryWord = randomWords();

const letters = [];

function display() {
  console.log(
    [...mysteryWord]
      .map((letter) => (letters.includes(letter.toLowerCase()) ? letter : "_"))
      .join("")
  );
}

function play(fails, tries) {
  prompt.get(
    {
      name: "guess",
      pattern: /^[a-zA-Z]+$/,
      message: "Please enter a letter or word",
      required: true,
    },
    (err, res) => {
      if (err) {
        console.log("error");
        return;
      }

      if (res.guess.length === 1) {
        if (!letters.includes(res.guess)) {
          letters.push(res.guess.toLowerCase());
          if (!mysteryWord.includes(res.guess)) fails++;
        } else {
          console.log("You already tried this letter, you can try again !");
        }
      } else {
        if (res.guess.toLowerCase() === mysteryWord.toLowerCase()) {
          console.log(
            "GG! You found the mystery word (",
            mysteryWord.toLowerCase(),
            ") in",
            tries + 1,
            "tries"
          );
          return;
        } else {
          console.log(
            res.guess.toLowerCase(),
            "was not the mystery word, -2 tries !"
          );
          fails += 2;
        }
      }

      if (
        mysteryWord
          .split("")
          .map((letter) => letter.toLowerCase())
          .every((letter) => letters.includes(letter))
      ) {
        console.log(
          "GG! You found the mystery word (",
          mysteryWord.toLowerCase(),
          ") in",
          tries + 1,
          "tries"
        );
        return;
      }

      if (fails >= 9) {
        console.log(hangman[hangman.length - 1]);
        console.log(
          "You lost, better luck next time! The mystery word was",
          mysteryWord.toLowerCase()
        );
        return;
      } else {
        console.log(hangman[Math.min(hangman.length - 1, fails)]);
        display();
      }

      play(fails, tries + 1);
    }
  );
}

display();
play(0, 0);
