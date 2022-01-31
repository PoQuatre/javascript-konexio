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
