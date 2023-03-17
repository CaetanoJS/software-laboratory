const AppAdminController = require('../controller/appAdminController')

module.exports = class AppEndpoints {
    constructor(api, db, admin, authService) {
        this.appAdminController = new AppAdminController(db, admin, authService)
        api.route('/db-users')
        .get( (req, res) => { return res.json('get') })
        .post( async (req, res) => { return res.json(await this.appAdminController.createAuthUser(req)) })
        .put( (req, res) => { return res.json('put') })
        .delete( (req, res) => { return res.json('delete') });
        api.post('/db-users/login',  async (req, res) => { return res.json(await this.appAdminController.loginAuthUser(req)) })
    }
}