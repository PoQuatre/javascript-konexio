// Exercice 1
let fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);
console.table(fruits);

// Exercice 2
let ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

// Exercice 3
let objects = ["pen", "book", "lamp"];

objects.unshift("chair");
console.log(objects);

objects.pop();
console.log(objects);

objects.push("laptop");
console.log(objects);

objects.shift();
console.log(objects);

// Exercice 4
let numbers = [4, 10, 8, 12, 6];

numbers.reverse();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

// Exercice 5
let total = 0;
let limit = 10;

for (let i = 0; i <= limit; i++) {
  total += i;
}

console.log(total);

// Exercice 6
let sentence = "Hello Konexio !";
let sentenceLetters = sentence.split("");
let result = [];

for (let i = 0; i < sentenceLetters.length; i++) {
  result.unshift(sentenceLetters[i]);
}

console.log(result.join(""));

// Bonus 1
for (let i = 0; i < 100; i++) {
  let result = "";
  if (i % 3 === 0) result += "fizz";
  if (i % 5 === 0) result += "buzz";
  if (i % 7 !== 0) console.log(result || i);
}

// Bonus 2
let total2 = 0;
let limit2 = 10;
let i = 0;

while (i <= limit2) {
  total2 += i;
  i++;
}

console.log(total2);
