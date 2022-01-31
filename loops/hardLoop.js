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
