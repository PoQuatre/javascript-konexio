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

// Exercice 3
const prompt = require("prompt");

prompt.start();

prompt.get(
  {
    properties: {
      email: {
        pattern: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
        message: "Enter a valid mail address",
        required: true,
      },
      username: {
        pattern: /^[a-zA-Z0-9-]+$/,
        message:
          "The username can only contain letters, numbers and dashes '-'",
        required: true,
      },
      password: {
        pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9-]{8,}$/,
        message:
          "The password must be at least 8 characters, contain a letter and a number",
        required: true,
        hidden: true,
      },
    },
  },
  (err, res) => {
    if (err) {
      console.log("error");
      return;
    }

    console.log("All good !");
  }
);
