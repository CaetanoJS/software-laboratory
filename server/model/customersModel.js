module.exports = class CustomersModel {
    constructor(db) {
        this.db = db
    }

    collectionName = 'customers'

    async getCustomerById (customerId) {
        let collection = await this.db.collection(this.collectionName)
        let customer = await collection.doc(customerId).get()

        if (customer.exist) {
            return customer.data()
        } else {
            throw new Error('User not found');
        }
        
    }

    async getCustomers () {
        
    }

    async deleteCustomers (customer) {

    }

    async editCustomers (customer) {

    }

    async addCustomers (customer) {
        return await this.db.collection(this.collectionName).doc().set(customer)
    }

}