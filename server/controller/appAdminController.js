const AppAdminModel = require('../model/appAdminModel')
module.exports = class AppAdminController{
    constructor(db, admin, authService) {
        this.db = db
        this.admin = admin
        this.appAdminModel = new AppAdminModel(db, admin, authService)
    }

    createAuthUser = async (req) => {
        //check if error happened and sent the correct message
        return this.appAdminModel.createAuthUser(req)
    }

    loginAuthUser = async (req) => {
        //check if error happened and sent the correct message
        return this.appAdminModel.loginAuthUser(req)
    }
}