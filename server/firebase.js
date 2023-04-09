const admin = require("firebase-admin")
const { getFirestore } = require('firebase-admin/firestore');
const adminCredentials = require("./firebase-sdk-admin.json")
const firebaseConfig = require('./firebase-app-client.json')
admin.initializeApp({
  credential: admin.credential.cert(adminCredentials),
  databaseURL: "https://software-laboratory-default-rtdb.firebaseio.com"
});

const db = getFirestore()



module.exports = {
    db,
    admin,
    firebaseConfig
}