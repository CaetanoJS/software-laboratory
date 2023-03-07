const AppAdminModel = require('../model/appAdminModel')
module.exports = class AppAdminController{
    constructor(db, admin) {
        this.db = db
        this.admin = admin
        this.appAdminModel = new AppAdminModel(db, admin)
    }

    async createAuthUser (req){
        //check if error happened and sent the correct message
        return this.appAdminModel.createAuthUser(req)
    }
}