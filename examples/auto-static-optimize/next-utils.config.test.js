const { loadCustomBuildParams } = require('./next-utils.config');
jest.mock('picocolors', () => ({
  green: jest.fn(text => text)
}));

describe('nextUtilsConfig', () => {
  /**
   * This test checks the behavior of nextUtilsConfig when NEXTJS_ESM_EXTERNALS
   * is set to 'true'. It verifies that the function returns the correct
   * esmExternals value and that the console warning is displayed correctly.
   */
  test('should return correct config when NEXTJS_ESM_EXTERNALS is true', () => {
    // Mock console.warn
    const originalConsoleWarn = console.warn;
    console.warn = jest.fn();

    // Set environment variable
    process.env.NEXTJS_ESM_EXTERNALS = 'true';

    // Call the function
    const result = loadCustomBuildParams();

    // Check the return value
    expect(result).toEqual({
      esmExternals: true,
      tsconfigPath: './tsconfig.json',
    });

    // Verify console warning
    expect(console.warn).toHaveBeenCalledWith(
      'warn  - experimental.esmExternals is enabled'
    );

    // Clean up
    console.warn = originalConsoleWarn;
    delete process.env.NEXTJS_ESM_EXTERNALS;
  });
});