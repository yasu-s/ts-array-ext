import '../../src/ext/array/first';

describe('Array.first', () => {
  it('Array.length > 0', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    const actual = items.first();

    // verify
    expect(actual).toBe(1);
  });

  it('Array.length = 0', () => {
    // setup
    const items = [] as number[];

    // exercise
    const actual = items.first();

    // verify
    expect(actual).toBeNull();
  });
});

describe('Array.firstOrDefault', () => {
  it('Array.length > 0', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    const actual = items.firstOrDefault(0);

    // verify
    expect(actual).toBe(1);
  });

  it('Array.length = 0', () => {
    // setup
    const items = [] as number[];

    // exercise
    const actual = items.firstOrDefault(0);

    // verify
    expect(actual).toBe(0);
  });
});
