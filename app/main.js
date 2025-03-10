const readline = require("readline");
const fs = require("fs");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const CMDS = ["type", "echo", "exit"];

function checkanswer(answer) {
  // Exit
  if (answer == "exit 0" || answer == "0"){
    process.exit(0);

  // Echo
  let found = false;
  } else if(answer.startsWith("echo")) {
    answer = answer.slice(5);
    console.log(answer);
  
  // Type Commad
  } else if (answer.startsWith("type ")) {
    answer = answer.slice(5);
    printtype(answer);    

  //} else if (answer == "1") {
    //pass

  } else {
    console.log(`${answer}: command not found`);
  }
}

function printtype(cmdName) {
  let found = false
  if(CMDS.includes(cmdName)) {
    console.log(`${cmdName} is a shell builtin`);
    found = true;
  } else {
    const paths = process.env.PATH.split(path.delimiter)

    for(let p of paths) {
      const fullPath = path.join(p, cmdName);
      if(fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
        console.log(`${cmdName} is ${fullPath}`);
        console.log("hello")
        found = true;
      }
    }
  }
  if(!found) {
    console.log(`${cmdName}: not found`);
  }
} 

function question() {
  rl.question("$ ", (answer) => {
    checkanswer(answer);
    question();
  });
}

question();
