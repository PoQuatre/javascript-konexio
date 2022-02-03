// Bonus
const moment = require("moment");

function formatDate(str) {
  return moment(str).format("DD/MM/YYYY");
}

console.log("Bonus -->", formatDate("2022-01-02"));

function calculateAge(str) {
  return moment().diff(moment(str), "years");
}

console.log("Bonus -->", calculateAge("2002-02-07"));
