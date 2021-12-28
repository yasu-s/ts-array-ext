import '../../src/ext/array/is-duplicate';

describe('Array.distinct', () => {
  it.each([
    { case: 'duplicate', index: 0, items: [1, 2, '1', 1, '2', '1'], expected: true },
    { case: 'no duplicate', index: 1, items: [1, 2, '1', 1, '2', '1'], expected: false },
    { case: 'items.length = 0', index: 0, items: [], expected: false },
    { case: 'index < 0', index: -1, items: [1, 2, 1], expected: false },
    { case: 'items.length <= index', index: 3, items: [1, 2, 1], expected: false },
  ])('$case', ({ index, items, expected }) => {
    // exercise
    const actual = items.isDuplicate(index);

    // verify
    expect(actual).toBe(expected);
  });
});
