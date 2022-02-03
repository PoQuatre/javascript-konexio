// Exercice 1
const fs = require("fs");
const path = require("path");

const content = fs.readFileSync(path.join(__dirname, "jour07.txt"), "utf-8");
console.log(content);

// Exercice 2
const array = [1, 2, 3, 4, 5];
const double = array.map((x) => x * 2);
console.log("Exercice 2 -->", double);
