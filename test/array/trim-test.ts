import '../../src/ext/array/trim';

describe('Array.trim', () => {
  it.each([
    { case: 'null', items: [1, null, 3], expected: [1, 3] },
    { case: 'undefined', items: [1, undefined, 3], expected: [1, 3] },
    { case: 'null or undefined nothing', items: [1, 2, 3], expected: [1, 2, 3] },
    { case: 'Array.length = 0', items: [], expected: [] },
  ])('$case', ({ items, expected }) => {
    // exercise
    const actual = items.trim();

    // verify
    expect(actual).toEqual(expected);
  });
});
