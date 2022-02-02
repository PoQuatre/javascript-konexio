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

// Exercice 3
function checkPal(str) {
  let reverse = str.split("").reverse().join("");

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== reverse[i]) {
      console.log("Exercice 3 -->", "Nope");
      return;
    }
  }

  console.log("Exercice 3 -->", "Palindrome !");
}

checkPal("racecar");
checkPal("laptop");

// Exercice 4
function swap(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }

  return result;
}

console.log("Exercice 4 -->", swap("Hello World !"));
