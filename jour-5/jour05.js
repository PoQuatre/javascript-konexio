const args = process.argv.slice(2);

// Exercice 1
function calculate(num1, symbol, num2) {
  if (!num1 || !symbol || !num2) {
    console.log("error");
    return;
  }

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  switch (symbol) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
    default:
      console.log("error");
  }
}

console.log("Exercice 1 -->", calculate("5", "x", "4"));
console.log(
  "Exercice 1 -->",
  calculate(args.shift(), args.shift(), args.shift())
);

// Exercice 2 / 3
const { multiply, addition } = require("./table-utils");

multiply(args.shift());
addition(args.shift());
