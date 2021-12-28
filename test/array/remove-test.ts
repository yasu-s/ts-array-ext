import '../../src/ext/array/remove';

describe('Array.remove', () => {
  it.each([
    { case: 'ok', items: [1, 2, 3], target: 2, expected: [1, 3] },
    { case: 'not found', items: [1, 2, 3], target: 4, expected: [1, 2, 3] },
  ])('$case', ({ items, target, expected }) => {
    // exercise
    items.remove(target);

    // verify
    expect(items).toEqual(expected);
  });
});

describe('Array.removeAt', () => {
  it.each([
    { case: 'ok', items: [1, 2, 3], index: 1, expected: [1, 3] },
    { case: 'not found', items: [1, 2, 3], index: 4, expected: [1, 2, 3] },
  ])('$case', ({ items, index, expected }) => {
    // exercise
    items.removeAt(index);

    // verify
    expect(items).toEqual(expected);
  });
});
