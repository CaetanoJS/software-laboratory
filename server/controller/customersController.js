const CustomerModel = require('../model/customersModel')
const MessageHandler = require('../util/messageResponseHandling')
module.exports = class CustomersController {
    constructor(db) {
        this.db = db
        this.customerModel = new CustomerModel(db)
    }

    async getCustomerById (customerId) {
        let response = await this.customerModel.getCustomerById(customerId)
        .then( (res) => {
            return new MessageHandler().sucessMessage("Customer found", res)
        })
        .catch( (error) => {
            return new MessageHandler().errorMessage(error.message, error)
        })

        return response
    }

    async getCustomers () {
        
    }

    async deleteCustomers (customer) {

    }

    async editCustomers (customer) {

    }

    async addCustomers (customer) {
        let response = await this.customerModel.addCustomers(customer)
        .then( (res) => {
            return new MessageHandler().sucessMessage("Customer added correctly", res)
        })
        .catch( (error) => {
            return new MessageHandler().errorMessage(error.message, error)
        })

        return response
    }

}