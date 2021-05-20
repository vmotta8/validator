const { emailValidator } = require('../../src/validators/emailValidator')

describe('email validation', () => {
  const error = 'Invalid email.'

  it('should accept valid email 1', () => {
    const email = 'myname@email.com'
    expect(emailValidator(email)).toEqual('myname@email.com')
  })

  it('should accept valid email 2', () => {
    const email = '   myname@email.com   '
    expect(emailValidator(email)).toEqual('myname@email.com')
  })

  it('should not accept null', () => {
    const email = null
    expect(emailValidator(email)).toEqual({ error })
  })

  it('should not accept undefined', () => {
    const email = undefined
    expect(emailValidator(email)).toEqual({ error })
  })

  it('should not accept empty strings', () => {
    const email = ''
    expect(emailValidator(email)).toEqual({ error })
  })

  it('should not accept local part larger than 64 chars', () => {
    const email = 'l'.repeat(65) + '@email.com'
    expect(emailValidator(email)).toEqual({ error })
  })

  it('should not accept domain larger than 255 chars', () => {
    const email = 'local@' + 'd'.repeat(260) + '.com'
    expect(emailValidator(email)).toEqual({ error })
  })

  it('should not accept strings larger than 320 chars', () => {
    const email = 'l'.repeat(64) + '@' + 'c'.repeat(128) + '.' + 'd'.repeat(128)
    expect(emailValidator(email)).toEqual({ error })
  })

  it('should not accept domain with a part larger than 63 chars', () => {
    const email = 'myname@' + 'd'.repeat(64) + '.com'
    expect(emailValidator(email)).toEqual({ error })
  })

  it('should not accept empty local part', () => {
    const email = '@email.com'
    expect(emailValidator(email)).toEqual({ error })
  })

  it('should not accept empty domain', () => {
    const email = 'myname@'
    expect(emailValidator(email)).toEqual({ error })
  })

  it('should not accept domain with invalid char', () => {
    const email = 'myname@e mail.com'
    expect(emailValidator(email)).toEqual({ error })
  })

  it('should not accept local part with invalid char', () => {
    const email = 'my name@email.com'
    expect(emailValidator(email)).toEqual({ error })
  })
})
