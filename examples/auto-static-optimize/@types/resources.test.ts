import resources from './resources';
import { jest } from '@jest/globals';

// Mock the JSON imports
jest.mock('../public/locales/en/common.json', () => ({ key: 'common value' }), { virtual: true });
jest.mock('../public/locales/en/footer.json', () => ({ key: 'footer value' }), { virtual: true });
jest.mock('../public/locales/en/second-page.json', () => ({ key: 'second-page value' }), { virtual: true });
jest.mock('../public/locales/en/staticpage.json', () => ({ key: 'staticpage value' }), { virtual: true });

describe('resources', () => {
  /**
   * This test verifies that the resources object has the correct structure
   * and contains the expected keys with their corresponding mocked values.
   */
  test('should have the correct structure and mocked values', () => {
    expect(resources).toHaveProperty('common');
    expect(resources).toHaveProperty('footer');
    expect(resources).toHaveProperty('second-page');
    expect(resources).toHaveProperty('staticpage');

    expect(resources.common).toEqual({ key: 'common value' });
    expect(resources.footer).toEqual({ key: 'footer value' });
    expect(resources['second-page']).toEqual({ key: 'second-page value' });
    expect(resources.staticpage).toEqual({ key: 'staticpage value' });
  });
});