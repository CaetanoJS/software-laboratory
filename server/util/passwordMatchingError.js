const ErrorHandling = require('./errorHandling')
module.exports = class PasswordMatchingError extends ErrorHandling{
    constructor(message, code) {
        super(message, code)
    }
}