// Exercice 1
function sortLetters(str) {
  return str.split("").sort().join("");
}

console.log("Exercice 1 -->", sortLetters("konexio"));

// Exercice 2
function countEach(str) {
  let x = 0;
  let o = 0;

  for (let i = 0; i < str.length; i++) {
    switch (str[i].toLowerCase()) {
      case "x":
        x++;
        break;
      case "o":
        o++;
        break;
      default:
        console.log(str[i], "is not supported");
        break;
    }
  }

  return x === o;
}

console.log("Exercice 2 -->", countEach("xxxoooox"));
console.log("Exercice 2 -->", countEach("xox"));
