// Exercice 1
function formatDate(str) {
  return str.replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, "$3/$2/$1");
}

console.log("Exercice 1 -->", formatDate("2022-01-02"));
