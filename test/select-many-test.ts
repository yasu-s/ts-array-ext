import '../src/ext/array/select-many';

describe('Array.selectMany', () => {
  it('Array.length > 0', () => {
    // setup
    const items = [ [1, 2, 3], [4, 5] ];

    // exercise
    const actual = items.selectMany((value) => value);

    // verify
    expect(actual.length).toBe(5);
    expect(actual).toEqual([ 1, 2, 3, 4, 5]);
  });

  it('Array.length = 0', () => {
    // setup
    const items = [] as number[][];

    // exercise
    const actual = items.selectMany((value) => value);

    // verify
    expect(actual.length).toBe(0);
  });
});
