
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

const bfc = require("./BFC");


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.v2 = functions.https.onRequest(bfc);

exports.group = functions.https.onRequest((req, res) => {
    const studyGroup2 = ['A','C'][Math.floor(Math.random()*2)]
    res.send(studyGroup2);
})

/* export const group = funcrions.https.onRequest((request, response) => {
    response.send("Hey");
}) */