import '../../src/ext/array/alias-linq';

describe('Array.select', () => {
  it.each([
    { case: 'Array.length > 0', items: [1, 2, 3], expected: [4, 5, 6] },
    { case: 'Array.length = 0', items: [], expected: [] },
  ])('$case', ({ items, expected }) => {
    // exercise
    const actual = items.select((item) => item + 3);

    // verify
    expect(actual).toEqual(expected);
  });
});

describe('Array.where', () => {
  it.each([
    { case: 'Array.length > 0', items: [1, 2, 3], expected: [2, 3] },
    { case: 'Array.length = 0', items: [], expected: [] },
  ])('$case', ({ items, expected }) => {
    // exercise
    const actual = items.where((item) => item > 1);

    // verify
    expect(actual).toEqual(expected);
  });
});

describe('Array.all', () => {
  it.each([
    { case: 'Array.length > 0, ok', items: [1, 2, 3], expected: true },
    { case: 'Array.length > 0, ng', items: [0, 1, 2], expected: false },
    { case: 'Array.length = 0', items: [], expected: false },
  ])('$case', ({ items, expected }) => {
    // exercise
    const actual = items.all((item) => item > 0);

    // verify
    expect(actual).toBe(expected);
  });
});

describe('Array.skip', () => {
  it('ok', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    const actual = items.skip(1);

    // verify
    expect(actual).toEqual([2, 3]);
  });
});

describe('Array.take', () => {
  it('ok', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    const actual = items.take(2);

    // verify
    expect(actual).toEqual([1, 2]);
  });
});
