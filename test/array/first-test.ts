import '../../src/ext/array/first';

describe('Array.first', () => {
  it.each([
    { case: 'Array.length > 0', items: [1, 2, 3], expected: 1 },
    { case: 'Array.length = 0', items: [], expected: null },
  ])('$case', ({ items, expected }) => {
    // exercise
    const actual = items.first();

    // verify
    expect(actual).toBe(expected);
  });
});

describe('Array.firstOrDefault', () => {
  it.each([
    { case: 'Array.length > 0', items: [1, 2, 3], expected: 1 },
    { case: 'Array.length = 0', items: [], expected: 0 },
  ])('$case', ({ items, expected }) => {
    // exercise
    const actual = items.firstOrDefault(0);

    // verify
    expect(actual).toBe(expected);
  });
});
