const { trimHelper } = require('../../src/helpers/trimHelper')

describe('trim helper', () => {
  it('should return a string without double spaces', () => {
    const name = 'Vinicius      Motta    '
    const trimName = trimHelper(name)
    expect(trimName).toBe('Vinicius Motta')
  })

  it('should return an error if the name is null', () => {
    const name = null
    const trimName = trimHelper(name)
    expect(trimName).toBe(null)
  })

  it('should return an error if the name is undefined', () => {
    const name = undefined
    const trimName = trimHelper(name)
    expect(trimName).toBe(undefined)
  })

  it('should return an error if the name is empty', () => {
    const name = ''
    const trimName = trimHelper(name)
    expect(trimName).toBe('')
  })
})
