const readline = require("readline");

module.exports = () => {
  const [, , firstArg] = process.argv;
  if (!firstArg) {
    console.error("Please pass one argument!!");
    process.exit(1);
  }

  const msg = `Hello ${firstArg}.`;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log(msg);

  rl.question("Please enter some phrase: ", answer => {
    console.log(`Thank you ! Let's start ${answer}.`);
    console.log("This is still a sample, to be implemented.");
    rl.close();
  });
}



