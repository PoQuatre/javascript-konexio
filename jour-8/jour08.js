const request = require("request");

// Exercice 1
let countriesNames = [];

const getCountries = (err, res, body) => {
  if (err) {
    console.error(err);
    return;
  }

  const all = JSON.parse(body);
  countriesNames = all.map((country) => country.name.official);

  console.log("Exercice 1 -->", countriesNames.join(" - "));
};

request.get("https://restcountries.com/v3.1/all", getCountries);

// Exercice 2
const getFact = () => {
  request.get("https://api.chucknorris.io/jokes/random", (err, res, body) => {
    const data = JSON.parse(body);
    console.log("Exercice 2 -->", data.value);
  });
};

getFact();
