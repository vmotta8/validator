const { emailValidator } = require('./validators/emailValidator')

module.exports = class Validator {
  validateEmail (email) {
    return emailValidator(email)
  }
}
