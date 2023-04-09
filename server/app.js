
const express = require('express')
const cors = require('cors');
const api = express()
const port = 3000

const AppAdminEndpoints = require('./enpoint/appAdminEndpoints')
const CustomersEndpoints = require('./enpoint/customersEndpoints')
const ProductsEndpoints = require('./enpoint/productsEndpoints')
const Middleware = require('./middleware')

const { db, admin, firebaseConfig} = require('./firebase')
const firebase = require("firebase/app");
const authService = require("firebase/auth")


firebase.initializeApp(firebaseConfig);

api.use(cors())
api.use(express.json())

api.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const middleware = new Middleware(admin)
new AppAdminEndpoints(api, db, admin, authService)
new CustomersEndpoints(api, db, middleware)
new ProductsEndpoints(api, db, middleware)