import '../src/ext/array/trim';

describe('Array.trim', () => {
  it('null', () => {
    // setup
    const items = [1, null, 3];

    // exercise
    const actual = items.trim();

    // verify
    expect(actual).toEqual([1, 3]);
  });

  it('undefined', () => {
    // setup
    const items = [1, undefined, 3];

    // exercise
    const actual = items.trim();

    // verify
    expect(actual).toEqual([1, 3]);
  });

  it('null or undefined nothing', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    const actual = items.trim();

    // verify
    expect(actual).toEqual([1, 2, 3]);
  });

  it('Array.length = 0', () => {
    // setup
    const items = [] as number[];

    // exercise
    const actual = items.trim();

    // verify
    expect(actual).toEqual([]);
  });
});
