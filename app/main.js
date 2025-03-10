const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkanswer(answer) {
  if (answer == 1){
    // pass
  } else {
    console.log("invalid_command: command not found")
  }
}

rl.question("$ ", (answer) => {
  checkanswer(answer);
  rl.close();
});
