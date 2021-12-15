import '../../src/ext/array/is-duplicate';

describe('Array.distinct', () => {
  it('duplicate', () => {
    // setup
    const index = 0;
    const items = [1, 2, '1', 1, '2', '1'];

    // exercise
    const actual = items.isDuplicate(index);

    // verify
    expect(actual).toBeTruthy();
  });

  it('no duplicate', () => {
    // setup
    const index = 1;
    const items = [1, 2, '1', 1, '2', '1'];

    // exercise
    const actual = items.isDuplicate(index);

    // verify
    expect(actual).toBeFalsy();
  });

  it('items.length = 0', () => {
    // setup
    const index = 0;
    const items = [] as any[];

    // exercise
    const actual = items.isDuplicate(index);

    // verify
    expect(actual).toBeFalsy();
  });

  it('items.length < 0', () => {
    // setup
    const index = -1;
    const items = [1, 2, 1];

    // exercise
    const actual = items.isDuplicate(index);

    // verify
    expect(actual).toBeFalsy();
  });

  it('items.length <= index', () => {
    // setup
    const index = 3;
    const items = [1, 2, 1];

    // exercise
    const actual = items.isDuplicate(index);

    // verify
    expect(actual).toBeFalsy();
  });
});
