import '../../src/ext/array/calc';

describe('Array.sum', () => {
  it.each([
    { case: 'Array.length > 0', items: [1, 2, 3], expected: 6 },
    { case: 'Array.length = 0', items: [], expected: 0 },
  ])('$case', ({ items, expected }) => {
    // exercise
    const actual = items.sum();

    // verify
    expect(actual).toBe(expected);
  });
});

describe('Array.average', () => {
  it.each([
    { case: 'Array.length > 0', items: [1, 2, 3], expected: 2 },
    { case: 'Array.length = 0', items: [], expected: 0 },
  ])('$case', ({ items, expected }) => {
    // exercise
    const actual = items.average();

    // verify
    expect(actual).toBe(expected);
  });
});

describe('Array.max', () => {
  it.each([
    { case: 'Array.length > 0', items: [1, 2, 3], expected: 3 },
    { case: 'Array.length = 0', items: [], expected: 0 },
  ])('$case', ({ items, expected }) => {
    // exercise
    const actual = items.max();

    // verify
    expect(actual).toBe(expected);
  });
});

describe('Array.min', () => {
  it.each([
    { case: 'Array.length > 0', items: [1, 2, 3], expected: 1 },
    { case: 'Array.length = 0', items: [], expected: 0 },
  ])('$case', ({ items, expected }) => {
    // exercise
    const actual = items.min();

    // verify
    expect(actual).toBe(expected);
  });
});
