const { resolve } = require('path')
const root = resolve(__dirname)

module.exports = {
  rootDir: root,
  testEnvironment: 'node',
  clearMocks: true,
  testMatch: ['<rootDir>/test/**/*.test.ts']
}
