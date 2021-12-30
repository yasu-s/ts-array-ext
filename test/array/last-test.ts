import '../../src/ext/array/last';

describe('Array.last', () => {
  it.each([
    { case: 'Array.length > 0', items: [1, 2, 3], expected: 3 },
    { case: 'Array.length = 0', items: [], expected: null },
  ])('$case', ({ items, expected }) => {
    // exercise
    const actual = items.last();

    // verify
    expect(actual).toBe(expected);
  });
});

describe('Array.lastOrDefault', () => {
  it.each([
    { case: 'Array.length > 0', items: [1, 2, 3], expected: 3 },
    { case: 'Array.length = 0', items: [], expected: 0 },
  ])('$case', ({ items, expected }) => {
    // exercise
    const actual = items.lastOrDefault(0);

    // verify
    expect(actual).toBe(expected);
  });
});
