//console.log(process.argv[2])
//console.log(process.argv[3])

const [, , firstArg] = process.argv;

if (!firstArg) {
  console.error("Please pass one argument!!");
  process.exit(1);
}

const msg = `Hello ${firstArg}`;

console.log(msg);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter names for your project: ", answer => {
  console.log(`Thank you ! Let's start ${answer}`);

  rl.close();
})