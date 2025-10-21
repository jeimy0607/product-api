// jest.config.cjs
module.exports = {
  testEnvironment: 'node',
  transform: {},                           // sin Babel
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', '!src/server.js'],
  coverageThreshold: {
    global: { lines: 80, branches: 70, functions: 80, statements: 80 }
  }
}
