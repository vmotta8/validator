const { emailValidator } = require('./src/validators/emailValidator')

module.exports = new class Validator {
  validateEmail (email) {
    return emailValidator(email)
  }
}()
