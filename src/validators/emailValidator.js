const { trimHelper } = require('../helpers/trimHelper')
const createError = require('http-errors')

exports.emailValidator = (email) => {
  email = trimHelper(email)

  if (!email || email === '') {
    throw new createError.BadRequest('Invalid email.')
  }

  if (email.length > 320) {
    throw new createError.BadRequest('Email too long.')
  }

  const regex = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

  if (!regex.test(email)) {
    throw new createError.BadRequest('Invalid characters in email.')
  }

  const [local, domain] = email.split('@')

  if (local.length > 64 || local.length === 0) {
    throw new createError.BadRequest('Invalid email local part.')
  }

  if (domain.length > 255 || domain.length === 0) {
    throw new createError.BadRequest('Invalid email domain.')
  }

  const domainParts = domain.split('.')

  if (domainParts.some(function (parts) {
    return parts.length > 63
  })) {
    throw new createError.BadRequest('Invalid email domain.')
  }

  return email
}
