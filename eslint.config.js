// eslint.config.js (Flat config para ESLint v9)
import js from '@eslint/js'
import globals from 'globals'

export default [
  // Archivos/dirs a ignorar
  { ignores: ['node_modules/', 'coverage/', 'dist/', '.husky/', '*.config.cjs'] },

  // Reglas base para JS/Node ESM
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.node },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-undef': 'off',
    },
  },
]
