import '../src/ext/array/first';

describe('Array.first', () => {
  it('Array.length > 0', () => {
    // setup
    const items = [1, 2, 3];

    // execrise
    const actual = items.first();

    // verify
    expect(actual).toBe(1);
  });

  it('Array.length = 0', () => {
    // setup
    const items = [];

    // execrise
    const actual = items.first();

    // verify
    expect(actual).toBeNull();
  });
});
