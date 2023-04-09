const AppAdminModel = require('../model/appAdminModel')
const MessageHandler = require('../util/messageResponseHandling')
module.exports = class AppAdminController{
    constructor(db, admin, authService) {
        this.db = db
        this.admin = admin
        this.appAdminModel = new AppAdminModel(db, admin, authService)
    }

    createAuthUser = async (req) => {
        
        let response = await this.appAdminModel.createAuthUser(req).catch( (res) => {
            return new MessageHandler().errorMessage("Error Creating user", res)
        })

        return response
    }

    loginAuthUser = async (req, res) => {
        let response = await this.appAdminModel.loginAuthUser(req).catch( (res) => {
            if (res.code = "auth/user-not-found") {
                return new MessageHandler().errorMessage("Invalid email or password", res)
            } else {
                return new MessageHandler().errorMessage("Internal Server error", res)
            }}
        )

        return response
    }
}