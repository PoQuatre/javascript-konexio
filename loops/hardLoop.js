// Exercice 1
let numbers = [];
let sum = 0;

for (let i = 0; i < 50; i++) {
  numbers.push(Math.floor(Math.random() * 101));
}

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("Exercice 1 -->", sum);

// Exercice 2
numbers = [];
let max = 0;

for (let i = 0; i < 50; i++) {
  numbers.push(Math.floor(Math.random() * 151) + 50);
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) max = numbers[i];
}

console.log("Exercice 2 -->", max);

// Exercice 3
numbers = [];

for (let i = 0; i < 50; i++) {
  numbers.push(Math.floor(Math.random() * 151) + 50);
}

let i = 0;

while (i < numbers.length) {
  if (numbers[i] >= 75 && numbers[i] <= 100) {
    console.log("Exercice 3 -->", numbers[i]);
    break;
  }
  i++;
}

// Exercice 4
let words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
let total = 0;

for (let i = 0; i < words.length; i++) {
  let letters = words[i].split("");
  for (let j = 0; j < letters.length; j++) {
    if (letters[j] === "o") total++;
  }
}

console.log("Exercice 4 -->", total);
