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

// Exercice 2
function multiply(num) {
  num = parseInt(num);
  console.log("Exercice 2 --> Table de multiplication de", num);
  for (let i = 1; i <= 10; i++) {
    console.log("Exercice 2 -->", num, "x", i, "=", num * i);
  }
}

multiply(args.shift());
