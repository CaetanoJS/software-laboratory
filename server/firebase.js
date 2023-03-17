const admin = require("firebase-admin")
const { getFirestore } = require('firebase-admin/firestore');
const adminCredentials = require("./software-laboratory-firebase-adminsdk-rgexl-115a6e0853.json")
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