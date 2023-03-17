module.exports = class AppAdminModel {
    constructor(db, admin, authService) {
        this.db = db
        this.admin = admin
        this.auth = authService
    }

    createAuthUser = async (req) => {
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

    loginAuthUser = async (req) => {
      try {
        const email = req.body.email;
        const password = req.body.password;
        
        // Use the client-side SDK to verify the email and password
        const { user } = await this.auth.signInWithEmailAndPassword(this.auth.getAuth(), email, password);
 
        const uid = user.uid;
        const token = await this.admin.auth().createCustomToken(uid);
        const response = await this.auth.signInWithCustomToken(this.auth.getAuth(), token)

        return response._tokenResponse.idToken
      } catch (error) {
          console.error(error);
          if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
              return { message: 'Invalid email or password.' };
          } else {
              return { message: 'Internal server error.' };
          }
      }
    }
}