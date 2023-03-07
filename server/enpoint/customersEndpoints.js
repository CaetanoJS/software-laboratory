const CustomerController = require('../controller/customersController')
module.exports = class customersEndpoints {
    constructor(api, db) {
        this.customerController = new CustomerController(db)
        api.get('/customers/:id', async (req, res) => { res.json(await this.customerController.getCustomerById(req.params.id)) })
        api.route('/customers')
        .get( async (req, res) => { res.json(await this.customerController.getCustomers()) })
        .post( async (req, res) => { res.json(await this.customerController.addCustomers(req.body)) })
        .put( async (req, res) => { res.json(await this.customerController.editCustomers(req.body)) })
        .delete( async (req, res) => { res.json(await this.customerController.deleteCustomers(req.body)) })
    }
}