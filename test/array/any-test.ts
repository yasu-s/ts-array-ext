import '../../src/ext/array/any';

describe('Array.any', () => {
  it.each([
    { case: 'callbackfn = true', items: [1, 2, 3], expected: true },
    { case: 'callbackfn = false', items: [1, 3], expected: false },
  ])('$case', ({ items, expected }) => {
    // exercise
    const actual = items.any((value) => value === 2);

    // verify
    expect(actual).toBe(expected);
  });

  it.each([
    { case: 'callbackfn = null, array.length > 0', items: [1, 2, 3], expected: true },
    { case: 'callbackfn = null, array.length = 0', items: [], expected: false },
  ])('$case', ({ items, expected }) => {
    // exercise
    const actual = items.any();

    // verify
    expect(actual).toBe(expected);
  });
});
