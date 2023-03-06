
const express = require('express')
const app = express()
const port = 3000
const db = require('./crud')
const firebase = require('./firebase')

app.use(express.json())
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.get('/', (req, res) => {

  res.send('Hello World!')
})


app.get('/signup', firebase.login)
app.get('/addUser', firebase.addUser)
