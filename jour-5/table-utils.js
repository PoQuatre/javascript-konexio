// Exercice 2
function multiply(num) {
  num = parseInt(num);

  console.log("Exercice 2 --> Table de multiplication de", num);

  for (let i = 1; i <= 10; i++) {
    console.log("Exercice 2 -->", num, "x", i, "=", num * i);
  }
}

// Exercice 3
function addition(num) {
  num = parseInt(num);

  console.log("Exercice 3 --> Table d'addition de", num);

  for (let i = 1; i <= 10; i++) {
    console.log("Exercice 3 -->", num, "+", i, "=", num + i);
  }
}

module.exports = {
  multiply,
  addition,
};
