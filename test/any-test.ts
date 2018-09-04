import '../src/ext/array/any';

describe('Array.any', () => {
  it('callbackfn = true', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    const actual = items.any(value => value === 2);

    // verify
    expect(actual).toBeTruthy();
  });

  it('callbackfn = false', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    const actual = items.any(value => value === 4);

    // verify
    expect(actual).toBeFalsy();
  });

  it('callbackfn = null, array.length > 0', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    const actual = items.any();

    // verify
    expect(actual).toBeTruthy();
  });

  it('callbackfn = null, array.length = 0', () => {
    // setup
    const items = [];

    // exercise
    const actual = items.any();

    // verify
    expect(actual).toBeFalsy();
  });
});
