#!/usr/bin/env node

const program = require('commander');
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

let query = db.collection('messages');
query.orderBy('timestamp', 'desc').get().then(querySnapshot => {
  querySnapshot.forEach(documentSnapshot => {
    console.log(`[INFO] Found document at ${documentSnapshot.ref.path}`);
    data = JSON.stringify(documentSnapshot.data(), null, 2);
    console.log(data);
  });
});



/*
const unsub = db.collection('messages').doc('test').onSnapshot(snapshot => {
  console.log('[INFO] Firestore are changed.');
  console.log(snapshot.data());
}, error => {
  console.error(`[ERROR] Can't observe firestore document.`)
  console.error(`[ERROR] ${error}`)
  process.exit(1)
});
*/

console.log('[EXIT]');
