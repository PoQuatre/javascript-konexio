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

// Exercice 3
let ussainBolt = 0;
let tysonGay = 0;

while (ussainBolt <= 100 && tysonGay <= 100) {
  ussainBolt += Math.ceil(Math.random() * 10);
  tysonGay += Math.ceil(Math.random() * 10);
}

console.log(
  "Exercice 3 -->",
  ussainBolt > 100 ? "Ussain Bolt" : "Tyson Gay",
  "won the race !"
);

// Exercice 4
var box1 = 12;
var box2 = 5;
while (box1 > 0) {
  console.log("Exercice 4 -->", box2);
  box1 -= 10;
  console.log("Exercice 4 -->", box1);
}
