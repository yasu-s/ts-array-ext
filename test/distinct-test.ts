import '../src/ext/array/distinct';

describe('Array.distinct', () => {
  it('Array.length > 0', () => {
    // setup
    const items = [1, 2, '1', 1, '2', '1'];

    // execrise
    const actual = items.distinct();

    // verify
    expect(actual).toEqual([1, 2, '1', '2']);
  });

  it('Array.length = 0', () => {
    // setup
    const items = [];

    // execrise
    const actual = items.distinct();

    // verify
    expect(actual).toEqual([]);
  });
});
