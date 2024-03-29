const ProductsController = require('../controller/ProductsController')
module.exports = class ProductsEndpoints {
    constructor(api, db, middleware) {
        this.productController = new ProductsController(db)
        api.use(middleware.checkAuthUserToken)

        api.route('/products')
        .get( async (req, res) => { res.json(await this.productController.getProducts()) })
        .post( async (req, res) => { res.json(await this.productController.addProducts(req.body)) })
        .put( async (req, res) => { res.json(await this.productController.editProducts(req.body)) })

        api.route('/products/:id')
        .get( async (req, res) => { res.json(await this.productController.getProductById(req.params.id)) })
        .delete( async (req, res) => { res.json(await this.productController.deleteProducts(req.params.id)) })
    }
}