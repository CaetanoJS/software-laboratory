
module.exports = class Middleware {
    constructor(admin) {
        this.admin = admin
    }

    checkAuthUserToken = (req, res, next) => {
        const header = req.headers["authorization"];
        if (typeof header !== "undefined") {
          const token = header
          this.admin.auth().verifyIdToken(token).then((decodedToken) => {
              req.user = decodedToken;
              next();
            })
            .catch(() => {
              res.status(401).send("Unauthorized");
            });
        } else {
          res.status(401).send("Unauthorized");
        }
    }
}
