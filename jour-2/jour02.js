// Exercice 1
let integer = 102;
let float = 13.9;
console.log({ integer, float });

// Exercice 2
let basic = 34;
let stringified = basic.toString();
console.log(stringified);

// Exercice 3
let num = 1.5;
let rounded = Math.round(num);
console.log(rounded);

// Exercice 4
let test = 12;
let bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test ** bis);
console.log(test % bis);

// Exercice 5
let test2 = 142;
let bis2 = 219;
console.log(test2 > bis2);
console.log(test2 < bis2);
console.log(test2 >= bis2);
console.log(test2 <= bis2);
console.log(test2 == bis2);
console.log(test2 === bis2);
console.log(test2 != bis2);
console.log(test2 !== bis2);

// Exercice 6
let limit = 50;
let score = 48;
console.log(score >= limit ? "Ok good !" : "Oh nooo...");

// Exercice 7
let password = "azerty";
if (password.length > 5) {
  console.log("The password is secure");
}

// Exercice 8
if (score >= limit && password.length > 5) {
  console.log("Everything is good");
} else if (score >= limit || password.length > 5) {
  console.log("Something is good");
} else {
  console.log("Nothing is good");
}

// Bonus 1
let random = Math.ceil(Math.random() * 6);
console.log(random === 6 ? "Yes I win !" : "So close...");
