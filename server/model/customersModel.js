module.exports = class CustomersModel {
    constructor(db) {
        this.db = db
    }

    collectionName = 'customers'

    async getCustomerById (customerId) {
        let collection = await this.db.collection(this.collectionName)
        let customer = await collection.doc(customerId).get()

        if (customer.exists) {
            return customer.data()
        } else {
            throw new Error('Customer not found');
        }
        
    }

    async getCustomers () {
        let customers = await this.db.collection(this.collectionName).get()

        return customers.docs.map(doc => doc.data());
    }

    async deleteCustomers (customerId) {
        return await this.db.collection(this.collectionName).doc(customerId).delete()
    }

    async editCustomers (customer) {

    }

    async addCustomers (customer) {
        return await this.db.collection(this.collectionName).doc().set(customer)
    }

}