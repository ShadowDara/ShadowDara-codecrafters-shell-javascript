const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkanswer(answer) {
  if (answer == "exit 0" || answer == "0"){
    process.exit(0);
  } else if (answer.startsWith("echo ")) {
    const result = answer.slice(5);
    console.log(result);
  //} else if (answer == "1") {
    //pass
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
