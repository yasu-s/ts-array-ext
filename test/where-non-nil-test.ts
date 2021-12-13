import '../src/ext/array/where-non-nil';

describe('Array.whereNonNil', () => {
  it.each([
    { testCase: 'mix nil', items: [1, null, undefined, 2], expected: [1, 2]},
    { testCase: 'non nil', items: [0, 1, 2], expected: [0, 1, 2]},
    { testCase: 'empty array', items: [], expected: []}
  ])('$testCase', ({ items, expected }) => {
    // exercise
    const actuals = items.whereNonNil()

    // verify
    expect(actuals).toEqual(expected)
  })
});
