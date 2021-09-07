//console.log(process.argv[2])
//console.log(process.argv[3])

const [, , firstArg] = process.argv;

if (!firstArg) {
  console.error("Please pass one argument!!");
  process.exit(1);
}

const msg = `Hello ${firstArg}`;

console.log(msg);