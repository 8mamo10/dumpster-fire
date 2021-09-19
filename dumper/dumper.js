#!/usr/bin/env node

const program = require('commander');
const { credential } = require('firebase-admin');

const credentialPath = './serviceAccountKey.json';
let outputFilePath = './dump.csv';

program.option('-o, --out [path]', 'A path to the output file.').parse(process.argv)

if (program.out) outputFilePath = program.out;

const admin = require('firebase-admin');
const serviceAccount = require(credentialPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();

console.log('[INFO] Start listren to Firestore.');

console.log('[EXIT]');
