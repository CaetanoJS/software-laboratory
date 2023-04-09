module.exports = class messageResponseHandling {
    constructor() {
        
    }

   sucessMessage(message, res) {
    return {message: message, code: 200, response: res}
   }
   errorMessage(message, res) {
    return {message: message, code: 400, responseError: res}
   }

}