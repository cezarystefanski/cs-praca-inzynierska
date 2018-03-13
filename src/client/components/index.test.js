import { Home, Example } from './index';

describe('import components', () => {
  it('should import Home', () => {
    expect(Home).toBeDefined();
  });
  it('should import Home', () => {
    expect(Example).toThrow();
  });
});
