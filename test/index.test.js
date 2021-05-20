const Validator = require('../src/index')
const validator = new Validator()

describe('Validator', () => {
  it('validate email', () => {
    const response = validator.validateEmail(' viniciusmotta8@gmail.com ')
    expect(response).toEqual('viniciusmotta8@gmail.com')
  })
})
