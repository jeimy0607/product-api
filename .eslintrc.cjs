module.exports = {
  env: { es2022: true, node: true, jest: true },
  extends: ['eslint:recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: { 'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }] }
}