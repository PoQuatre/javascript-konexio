// Exercice 1
const fs = require("fs");
const path = require("path");

const content = fs.readFileSync(path.join(__dirname, "jour07.txt"), "utf-8");
console.log(content);
