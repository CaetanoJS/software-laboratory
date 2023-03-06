const admin = require("firebase-admin")
const { getFirestore } = require('firebase-admin/firestore');
const credentials = require("./software-laboratory-firebase-adminsdk-rgexl-115a6e0853.json")

admin.initializeApp({
    credential: admin.credential.cert(credentials)
})

const db = getFirestore()

const login =  async (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
      }
    
      const userResponse = await admin.auth().createUser({
        email: user.email,
        password: user.password,
        emailVerified: false,
        disabled: false
      })

      res.json(userResponse);
}

const addUser = async (req, res) => {
    const Users = db.collection('users')

    const response = await Users.add({
    name: req.body.name,
    email: req.body.email,
    cellphone: req.body.cellphone,
    address: req.body.address
    });

    res.json(response)
}

module.exports = {
    admin,
    db,
    login,
    addUser
}