const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkanswer(answer) {
  if (answer == "exit 0"){
    rl.close();
  //} else if (answer == "1") {
  } else {
    console.log(`${answer}: command not found`);
  }
}

function question(answere) {
  rl.question("$ ", (answer) => {
    checkanswer(answer);
    question();
  });
}

question();
