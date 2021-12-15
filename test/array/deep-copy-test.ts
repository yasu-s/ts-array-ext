import '../../src/ext/array/deep-copy';

describe('Array.deepCopy', () => {
  it('number array', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    const actual = items.deepCopy();

    // verify
    expect(actual).not.toBe(items);
    expect(actual).toEqual([1, 2, 3]);
  });

  it('object array', () => {
    // setup
    const items = [
      { id: 1, name: 'hoge' },
      { id: 2, name: 'hige' },
    ];

    // exercise
    const actual = items.deepCopy();

    // verify
    expect(actual).not.toBe(items);
    expect(actual).toEqual([
      { id: 1, name: 'hoge' },
      { id: 2, name: 'hige' },
    ]);
  });

  it('nested array', () => {
    // setup
    const items = [{ data: [{ id: 1, name: 'hoge' }] }];

    // exercise
    const actual = items.deepCopy();

    // verify
    expect(actual).not.toBe(items);
    expect(actual).toEqual([{ data: [{ id: 1, name: 'hoge' }] }]);
  });
});
