module.exports = class ErrorHandling extends Error{
    code = 0
    constructor(message, code) {
        super(message)
        this.code = code
    }
}