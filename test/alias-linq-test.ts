import '../src/ext/array/alias-linq';

describe('Array.select', () => {
  it('Array.length > 0', () => {
    // setup
    const items = [1, 2, 3];

    // execrise
    const actual = items.select(item => item + 3);

    // verify
    expect(actual).toEqual([4, 5, 6]);
  });

  it('Array.length = 0', () => {
    // setup
    const items = [];

    // execrise
    const actual = items.select(item => item + 3);

    // verify
    expect(actual).toEqual([]);
  });
});

describe('Array.where', () => {
  it('Array.length > 0', () => {
    // setup
    const items = [1, 2, 3];

    // execrise
    const actual = items.where(item => item > 1);

    // verify
    expect(actual).toEqual([2, 3]);
  });

  it('Array.length = 0', () => {
    // setup
    const items = [];

    // execrise
    const actual = items.where(item => item > 1);

    // verify
    expect(actual).toEqual([]);
  });
});

describe('Array.all', () => {
  it('Array.length > 0, ok', () => {
    // setup
    const items = [1, 2, 3];

    // execrise
    const actual = items.all(item => item > 0);

    // verify
    expect(actual).toBeTruthy();
  });

  it('Array.length > 0, ng', () => {
    // setup
    const items = [1, 2, 3];

    // execrise
    const actual = items.all(item => item > 1);

    // verify
    expect(actual).toBeFalsy();
  });

  it('Array.length = 0', () => {
    // setup
    const items = [];

    // execrise
    const actual = items.all(item => item > 1);

    // verify
    expect(actual).toBeFalsy();
  });
});

describe('Array.skip', () => {
  it('ok', () => {
    // setup
    const items = [1, 2, 3];

    // execrise
    const actual = items.skip(1);

    // verify
    expect(actual).toEqual([2, 3]);
  });
});

describe('Array.take', () => {
  it('ok', () => {
    // setup
    const items = [1, 2, 3];

    // execrise
    const actual = items.take(2);

    // verify
    expect(actual).toEqual([1, 2]);
  });
});
