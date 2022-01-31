// Exercice 1
let result = 0;
for (let i = 5; i <= 10; i++) {
  result += i * i;
}
console.log("Exercice 1 -->", result);

// Exercice 2
result = 0;
for (let i = 100; i <= 1000; i++) {
  if (i % 7 === 0) result++;
}
console.log("Exercice 2 -->", result);

// Exercice 3
result = 0;

const throwDice = (faces) => Math.ceil(Math.random() * faces);

for (let i = 0; i < 20; i++) {
  let value = throwDice(6);
  if (value >= 5) result += value;
}

console.log("Exercice 3 -->", result);
