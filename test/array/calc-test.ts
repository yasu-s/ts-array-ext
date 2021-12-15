import '../../src/ext/array/calc';

describe('Array.sum', () => {
  it('Array.length > 0', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    const actual = items.sum();

    // verify
    expect(actual).toBe(6);
  });

  it('Array.length = 0', () => {
    // setup
    const items = [] as number[];

    // exercise
    const actual = items.sum();

    // verify
    expect(actual).toBe(0);
  });
});

describe('Array.average', () => {
  it('Array.length > 0', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    const actual = items.average();

    // verify
    expect(actual).toBe(2);
  });

  it('Array.length = 0', () => {
    // setup
    const items = [] as number[];

    // exercise
    const actual = items.average();

    // verify
    expect(actual).toBe(0);
  });
});

describe('Array.max', () => {
  it('Array.length > 0', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    const actual = items.max();

    // verify
    expect(actual).toBe(3);
  });

  it('Array.length = 0', () => {
    // setup
    const items = [] as number[];

    // exercise
    const actual = items.max();

    // verify
    expect(actual).toBe(0);
  });
});

describe('Array.min', () => {
  it('Array.length > 0', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    const actual = items.min();

    // verify
    expect(actual).toBe(1);
  });

  it('Array.length = 0', () => {
    // setup
    const items = [] as number[];

    // exercise
    const actual = items.min();

    // verify
    expect(actual).toBe(0);
  });
});
