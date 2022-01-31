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

// Exercice 4
var box1 = 12;
var box2 = 5;
for (var i = 12; i < 14; i++) {
  box1 = box2;
  console.log("Exercice 4 -->", box1 + box2);
  box2 = box1 + i;
}
console.log("Exercice 4 -->", box1);
console.log("Exercice 4 -->", box2);
console.log("Exercice 4 -->", i);

// Exercice 5
var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
  console.log("Exercice 5 -->", box1);
  box1 = box1 + i;
}
console.log("Exercice 5 -->", box1);
console.log("Exercice 5 -->", i);

// Exercice 6
var box1 = 0;
var box2 = 3;
for (var i = 0; i > -4; i--) {
  if (i % 2 === 0) {
    console.log("Exercice 6 -->", box1 + i);
    box2++;
  } else {
    console.log("Exercice 6 -->", box2 + i);
    box1--;
  }
}

console.log("Exercice 6 -->", box1);
console.log("Exercice 6 -->", box2);
console.log("Exercice 6 -->", i);
