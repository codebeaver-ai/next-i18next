const prettierConfig = require('./prettier.config.js')

describe('Prettier Configuration', () => {
  /**
   * This test verifies that the Prettier configuration object
   * contains the expected properties with correct values.
   */
  test('should have correct configuration properties', () => {
    expect(prettierConfig).toEqual({
      arrowParens: 'avoid',
      bracketSpacing: true,
      endOfLine: 'lf',
      printWidth: 69,
      semi: false,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: 'es5',
      useTabs: false,
    })
  })
})