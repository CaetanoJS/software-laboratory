const CustomerController = require('../controller/customersController')
module.exports = class customersEndpoints {
    constructor(api, db, middleware) {
        this.customerController = new CustomerController(db)
        api.use(middleware.checkAuthUserToken)

        api.route('/customers')
        .get( async (req, res) => { res.json(await this.customerController.getCustomers()) })
        .post( async (req, res) => { res.json(await this.customerController.addCustomers(req.body)) })
        .put( async (req, res) => { res.json(await this.customerController.editCustomers(req.body)) })

        api.route('/customers/:id')
        .get( async (req, res) => { res.json(await this.customerController.getCustomerById(req.params.id)) })
        .delete( async (req, res) => { res.json(await this.customerController.deleteCustomers(req.params.id)) })
    }
}