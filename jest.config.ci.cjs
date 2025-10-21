module.exports = {
  testEnvironment: 'node',
  transform: {},
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', '!src/server.js'],
  coverageThreshold: {
    global: {
      statements: 60,
      branches:   45,
      functions:  50,
      lines:      60
    }
  }
}