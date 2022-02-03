// Exercice 1
const fs = require("fs");
const path = require("path");

const content = fs.readFileSync(path.join(__dirname, "jour07.txt"), "utf-8");
console.log(content);

// Exercice 2
const array = [1, 2, 3, 4, 5];
const double = array.map((x) => x * 2);
console.log("Exercice 2 -->", double);

// Exercice 3
const longNames = [
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "John",
    lastName: "Smith",
  },
];
const shortNames = longNames.map((person) => {
  return {
    name: `${person.firstName} ${person.lastName}`,
  };
});

console.log("Exercice 3 -->", shortNames);

// Exercice 4
const array2 = [1, "toto", 34, "javascript", 8];
const numbers = array2.filter((item) => typeof item === "number");
console.log("Exercice 4 -->", numbers);

// Exercice 5
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
const even = numbers2.filter((x) => x % 2 === 0);
console.log("Exercice 5 -->", even);

// Exercice 6
const cakes = [
  {
    name: "cake",
    flavor: "vanilla",
    status: "available",
  },
  {
    name: "brownie",
    flavor: "chocolate",
    status: "available",
  },
  {
    name: "pie",
    flavor: "strawberry",
    status: "available",
  },
  {
    name: "muffin",
    flavor: "pistachio",
    status: "available",
  },
  {
    name: "donut",
    flavor: "chocolate",
    status: "available",
  },
];
const chocolateCakes = cakes
  .filter((cake) => cake.flavor === "chocolate")
  .map((cake) => {
    cake.status = "sold out !";
    return cake;
  });

console.log(chocolateCakes);
