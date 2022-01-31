// Exercice 1
let i = 50;
while (i <= 200) {
  if (i % 2 === 0) console.log("Exercice 1 -->", i);
  i++;
}

// Exercice 2
let dice = null;
let count = 0;

while (dice !== 6) {
  dice = Math.ceil(Math.random() * 6);
  count++;
}

console.log("Exercice 2 -->", count);
