// jest.config.cjs
module.exports = {
  testEnvironment: 'node',
  transform: {},
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', '!src/server.js'],
  coverageThreshold: {
    global: { lines: 60, branches: 45, functions: 55, statements: 60 }
  }
}
