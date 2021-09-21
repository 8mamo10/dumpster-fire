#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');

const { credential, firestore } = require('firebase-admin');

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

let csv = '';

let query = db.collection('messages');
query.orderBy('timestamp', 'desc').get().then(querySnapshot => {
  querySnapshot.forEach(documentSnapshot => {
    console.log(`[INFO] Found document at ${documentSnapshot.ref.path}`);
    data = documentSnapshot.data();
    str = JSON.stringify(data, null, 2);
    //console.log(str);
    csv += data.name;
    csv += ',';
    csv += data.text;
    csv += '\n';
  });
  //console.log(csv);

  fs.writeFile(outputFilePath, csv, 'utf8', (error) => {
    if (error) {
      console.error(`[ERROR] Cannot write to ${outputFilePath}.`);
      console.error(`[ERROR] ${error}`);
      process.exit(1);
    } else {
      console.log(`[INFO] ${outputFilePath} is written.`)
    }
  })
});

console.log('[EXIT]');
