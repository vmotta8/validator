const { emailValidator } = require('./src/validators/emailValidator')

module.exports = class Validator {
  validateEmail (email) {
    return emailValidator(email)
  }
}
