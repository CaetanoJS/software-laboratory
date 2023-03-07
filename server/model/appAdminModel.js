module.exports = class AppAdminModel {
    constructor(db, admin) {
        this.db = db
        this.admin = admin;
    }

    async createAuthUser (req) {
        const user = {
            email: req.body.email,
            password: req.body.password
          }
        
          const userResponse = await this.admin.auth().createUser({
            email: user.email,
            password: user.password,
            emailVerified: false,
            disabled: false
          })
    
          return userResponse
    }
}