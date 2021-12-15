import '../../src/ext/array/last';

describe('Array.last', () => {
  it('Array.length > 0', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    const actual = items.last();

    // verify
    expect(actual).toBe(3);
  });

  it('Array.length = 0', () => {
    // setup
    const items = [] as number[];

    // exercise
    const actual = items.last();

    // verify
    expect(actual).toBeNull();
  });
});

describe('Array.lastOrDefault', () => {
  it('Array.length > 0', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    const actual = items.lastOrDefault(0);

    // verify
    expect(actual).toBe(3);
  });

  it('Array.length = 0', () => {
    // setup
    const items = [] as number[];

    // exercise
    const actual = items.lastOrDefault(0);

    // verify
    expect(actual).toBe(0);
  });
});
