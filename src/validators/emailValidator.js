const { trimHelper } = require('../helpers/trimHelper')

const error = 'Invalid email.'

exports.emailValidator = (email) => {
  email = trimHelper(email)

  if (!email || email === '') {
    return { error }
  }

  if (email.length > 320) {
    return { error }
  }

  const regex = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

  if (!regex.test(email)) {
    return { error }
  }

  const [local, domain] = email.split('@')

  if (local.length > 64 || local.length === 0) {
    return { error }
  }

  if (domain.length > 255 || domain.length === 0) {
    return { error }
  }

  const domainParts = domain.split('.')

  if (domainParts.some(function (parts) {
    return parts.length > 63
  })) {
    return { error }
  }

  return email
}
