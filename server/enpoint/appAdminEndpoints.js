const AppAdminController = require('../controller/appAdminController')

module.exports = class AppEndpoints {
    constructor(api, db, admin, authService) {
        this.appAdminController = new AppAdminController(db, admin, authService)
        api.route('/db-users/register')
        .post( async (req, res) => { return res.json(await this.appAdminController.createAuthUser(req)) })
        
        api.post('/db-users/login',  async (req, res) => { return res.json(await this.appAdminController.loginAuthUser(req, res)) })
    }
}