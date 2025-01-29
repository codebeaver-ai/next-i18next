

// Import the Jest configuration
const jestConfig = require('./jest.config.js');

/**
 * This test suite verifies the Jest configuration settings.
 * It checks various properties of the configuration object to ensure they are set correctly.
 */
describe('Jest Configuration', () => {
  it('should have the correct configuration settings', () => {
    expect(jestConfig.automock).toBe(false);
    expect(jestConfig.collectCoverage).toBe(true);
    expect(jestConfig.collectCoverageFrom).toEqual(['src/**/*.{js,jsx,ts,tsx}']);
    expect(jestConfig.moduleDirectories).toEqual(['node_modules', 'src']);
    expect(jestConfig.moduleNameMapper).toHaveProperty('createClient');
    expect(jestConfig.rootDir).toBe('.');
    expect(jestConfig.testPathIgnorePatterns).toEqual([
      '<rootDir>/.next/',
      '<rootDir>/dist/',
      '<rootDir>/node_modules/',
    ]);
  });
});