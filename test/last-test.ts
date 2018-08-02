import '../src/ext/array/last';

describe('Array.last', () => {
  it('Array.length > 0', () => {
    // setup
    const items = [1, 2, 3];

    // execrise
    const actual = items.last();

    // verify
    expect(actual).toBe(3);
  });

  it('Array.length = 0', () => {
    // setup
    const items = [];

    // execrise
    const actual = items.last();

    // verify
    expect(actual).toBeNull();
  });
});
