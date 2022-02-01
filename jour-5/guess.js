const prompt = require("prompt");

prompt.start();

const mysteryNum = Math.ceil(Math.random() * 100);

function play() {
  prompt.get(
    { name: "guess", description: "Quel est le nombre mystère ?" },
    (err, res) => {
      const num = parseInt(res.guess);

      if (err || !Number.isInteger(num)) {
        console.log("error");
      } else if (num < mysteryNum) {
        console.log("C'est plus !");
      } else if (num > mysteryNum) {
        console.log("C'est moins !");
      } else {
        console.log("Bravo !!");
        return;
      }

      play();
    }
  );
}

play();
