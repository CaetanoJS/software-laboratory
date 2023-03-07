
const express = require('express')
const api = express()
const port = 3000

const AppAdminEndpoints = require('./enpoint/appAdminEndpoints')
const CustomersEndpoints = require('./enpoint/customersEndpoints')
const ProductsEndpoints = require('./enpoint/productsEndpoints')
const { db, admin } = require('./firebase')

api.use(express.json())

api.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

new AppAdminEndpoints(api, db, admin)
new CustomersEndpoints(api, db)
new ProductsEndpoints(api, db)