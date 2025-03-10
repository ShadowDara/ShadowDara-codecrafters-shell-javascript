const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkanswer(answer) {
  if (answer == invalid_command){
    console.log("invalid_command: command not found")
  } else {
    console.log("invalid_command: command not found")
  }
}

rl.question("$ ", (answer) => {
  checkanswer(answer);
  rl.close();
});
