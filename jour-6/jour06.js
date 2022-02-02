// Exercice 1
function formatDate(str) {
  return str.replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, "$3/$2/$1");
}

console.log("Exercice 1 -->", formatDate("2022-01-02"));

// Exercice 2
function calculateAge(birthDate) {
  let diff = new Date() - new Date(birthDate);
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

console.log("Exercice 2 -->", calculateAge("2002-02-07"));
