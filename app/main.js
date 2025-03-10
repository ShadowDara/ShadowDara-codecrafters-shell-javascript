const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkanswer(answer) {
  if (answer == "/exit"){
    rl.close();
  //} else if (answer == "1") {
  } else {
    console.log(`${answer}: command not found`);
    rl.question()
  }
}

rl.question("$ ", (answer) => {
  checkanswer();
});
