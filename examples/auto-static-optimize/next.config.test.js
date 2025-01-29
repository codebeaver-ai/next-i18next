const path = require('path');

// Mock external dependencies
jest.mock('./next-i18next.config.js', () => ({
  i18n: { locales: ['en', 'fr'] }
}));

jest.mock('./next-utils.config', () => ({
  loadCustomBuildParams: jest.fn().mockReturnValue({
    esmExternals: true,
    tsconfigPath: 'tsconfig.json'
  })
}));

// Import the actual next.config.js
const nextConfigPath = path.join(__dirname, 'next.config.js');
const nextConfig = require(nextConfigPath);

describe('Next.js Configuration', () => {
  /**
   * This test checks that the nextConfig object has the correct structure
   * and values as defined in the next.config.js file.
   */
  it('should have the correct configuration properties', () => {
    expect(nextConfig).toHaveProperty('experimental');
    expect(nextConfig.experimental).toHaveProperty('esmExternals', true);
    expect(nextConfig).toHaveProperty('i18n');
    expect(nextConfig.i18n).toEqual({ locales: ['en', 'fr'] });
    expect(nextConfig).toHaveProperty('reactStrictMode', true);
    expect(nextConfig).toHaveProperty('typescript');
    expect(nextConfig.typescript).toHaveProperty('tsconfigPath', 'tsconfig.json');
  });
});