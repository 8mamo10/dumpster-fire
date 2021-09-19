#!/usr/bin/env node

const program = require('commander');

let outputFilePath = './dump.csv';

program.option('-o, --out [path]', 'A path to the output file.').parse(process.argv)

if (program.out) outputFilePath = program.out;

console.log(program.out);


