const { emailValidator } = require('../../src/validators/emailValidator')

describe('email validation', () => {
  it('should accept valid email 1', () => {
    const email = 'myname@email.com'
    expect(emailValidator(email)).toEqual('myname@email.com')
  })

  it('should accept valid email 2', () => {
    const email = '   myname@email.com   '
    expect(emailValidator(email)).toEqual('myname@email.com')
  })

  it('should not accept null', () => {
    try {
      const email = null
      emailValidator(email)
      expect(true).toEqual(false)
    } catch (error) {
      expect(error.message).toBe('Invalid email.')
    }
  })

  it('should not accept undefined', () => {
    try {
      const email = undefined
      emailValidator(email)
      expect(true).toEqual(false)
    } catch (error) {
      expect(error.message).toBe('Invalid email.')
    }
  })

  it('should not accept empty strings', () => {
    try {
      const email = ''
      emailValidator(email)
      expect(true).toEqual(false)
    } catch (error) {
      expect(error.message).toBe('Invalid email.')
    }
  })

  it('should not accept local part larger than 64 chars', () => {
    try {
      const email = 'l'.repeat(65) + '@email.com'
      emailValidator(email)
      expect(true).toEqual(false)
    } catch (error) {
      expect(error.message).toBe('Invalid email local part.')
    }
  })

  it('should not accept domain larger than 255 chars', () => {
    try {
      const email = 'local@' + 'd'.repeat(260) + '.com'
      emailValidator(email)
      expect(true).toEqual(false)
    } catch (error) {
      expect(error.message).toBe('Invalid email domain.')
    }
  })

  it('should not accept domain with a part larger than 63 chars', () => {
    try {
      const email = 'myname@' + 'd'.repeat(64) + '.com'
      emailValidator(email)
      expect(true).toEqual(false)
    } catch (error) {
      expect(error.message).toBe('Invalid email domain.')
    }
  })

  it('should not accept strings larger than 320 chars', () => {
    try {
      const email = 'l'.repeat(64) + '@' + 'c'.repeat(128) + '.' + 'd'.repeat(128)
      emailValidator(email)
      expect(true).toEqual(false)
    } catch (error) {
      expect(error.message).toBe('Email too long.')
    }
  })

  it('should not accept empty local part', () => {
    try {
      const email = '@email.com'
      emailValidator(email)
      expect(true).toEqual(false)
    } catch (error) {
      expect(error.message).toBe('Invalid characters in email.')
    }
  })

  it('should not accept empty domain', () => {
    try {
      const email = 'myname@'
      emailValidator(email)
      expect(true).toEqual(false)
    } catch (error) {
      expect(error.message).toBe('Invalid characters in email.')
    }
  })

  it('should not accept domain with invalid char', () => {
    try {
      const email = 'myname@e mail.com'
      emailValidator(email)
      expect(true).toEqual(false)
    } catch (error) {
      expect(error.message).toBe('Invalid characters in email.')
    }
  })

  it('should not accept local part with invalid char', () => {
    try {
      const email = 'my name@email.com'
      emailValidator(email)
      expect(true).toEqual(false)
    } catch (error) {
      expect(error.message).toBe('Invalid characters in email.')
    }
  })
})
