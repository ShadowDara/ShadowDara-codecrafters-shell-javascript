const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkanswer(answer) {
  if (answer == "exit 0" || answer == "0"){
    process.exit(0);

  } else if (answer.startsWith("echo ")) {
    answer = answer.slice(5);
    console.log(answer);

  } else if (answer.startsWith("type ")) {
    answer = answer.slice(5);
    if (answer == "echo") {
      console.log(`${answer} is a shell builtin`);
    } else if (answer == "exit") {
      console.log(`${answer} is a shell builtin`);
    } else if (answer == "type") {
      console.log(`${answer} is a shell builtin`);
    } else {
      console.log(`${answer}: command not found`);
    }

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
