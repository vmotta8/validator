const config = require('./jest.config')

config.displayName = 'unit-tests'
config.testMatch = ['<rootDir>/test/**/*.test.js']

module.exports = config
