// Exercice 1
let cat = {
  name: "Garfield",
  age: 3,
  isCute: true,
};

console.log(cat);
console.log(cat.age);
if (cat.isCute) console.log("So cute !");

// Exercice 2
let cat2 = {
  name: "Ficelle",
  age: 12,
  isCute: true,
};
let cats = [cat, cat2];

console.log(cats[0].age);
console.log(cats[1].isCute);

// Exercice 3
function checkIfEven(num) {
  console.log(num, "is", num % 2 === 0 ? "even" : "odd");
}

checkIfEven(0);
checkIfEven(93);
checkIfEven(-23);
checkIfEven(-22);
checkIfEven(12);
checkIfEven(47);
checkIfEven(58);

// Exercice 4
function compare(num1, num2) {
  if (num1 > num2) {
    console.log(num1, "is bigger than", num2);
  } else if (num1 < num2) {
    console.log(num1, "is smaller than", num2);
  } else if (num1 === num2) {
    console.log(num1, "is equal to", num2);
  } else {
    console.error("unsupported case");
  }
}

compare(3, 9);
compare(39, 9);
compare(83, 192);
compare(53, 53);

// Exercice 5
function addUp(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}

console.log(addUp(12));
