import '../../src/ext/boolean/toggle';

describe('Boolean.toggle', () => {
  it.each([
    { case: 'true -> false', target: true, expected: false },
    { case: 'false -> true', target: false, expected: true },
  ])('$case', ({ target, expected }) => {
    // exercise
    const actual = target.toggle();

    // verify
    expect(actual).toBe(expected);
  });
});
