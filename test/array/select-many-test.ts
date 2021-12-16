import '../../src/ext/array/select-many';

describe('Array.selectMany', () => {
  it.each([
    {
      case: 'Array.length > 0',
      items: [
        [1, 2, 3],
        [4, 5],
      ],
      expected: [1, 2, 3, 4, 5],
    },
    { case: 'Array.length = 0', items: [], expected: [] },
  ])('$case', ({ items, expected }) => {
    // exercise
    const actual = items.selectMany((value) => value);

    // verify
    expect(actual).toEqual(expected);
  });
});
