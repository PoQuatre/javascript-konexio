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
