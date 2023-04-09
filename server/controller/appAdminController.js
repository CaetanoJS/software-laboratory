const AppAdminModel = require('../model/appAdminModel')
const MessageHandler = require('../util/messageResponseHandling')
const PasswordMatchingError = require('../util/errorHandling')
module.exports = class AppAdminController{
    constructor(db, admin, authService) {
        this.db = db
        this.admin = admin
        this.appAdminModel = new AppAdminModel(db, admin, authService)
    }

    createAuthUser = async (req) => {
        
        let response = await this.appAdminModel.createAuthUser(req)
        .then( (res) => {
            return new MessageHandler().sucessMessage("User created correctly", res)
        })
        .catch( (error) => {
            if (error instanceof PasswordMatchingError) {
                return new MessageHandler().errorMessage("Password does not match", error)
            }
            return new MessageHandler().errorMessage(error.message, error)
        })

        return response
    }

    loginAuthUser = async (req, res) => {
        let response = await this.appAdminModel.loginAuthUser(req)
        .then( (res) => {
            return new MessageHandler().sucessMessage("User logged correctly", res)
        })
        .catch( (error) => {
            if (error.code = "auth/user-not-found") {
                return new MessageHandler().errorMessage("Invalid email or password", error)
            } else {
                return new MessageHandler().errorMessage("Internal Server error", error)
            }}
        )

        return response
    }
}