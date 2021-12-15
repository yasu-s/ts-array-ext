import '../src/ext/array/deep-copy';
import '../src/ext/object/deep-copy';

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

describe('Object.deepCopy', () => {
  it('object', () => {
    // setup
    const obj = { id: 1, name: 'hoge' };

    // exercise
    const actual = obj.deepCopy();

    // verify
    expect(actual).not.toBe(obj);
    expect(actual).toEqual({ id: 1, name: 'hoge' });
  });

  it('nested object', () => {
    // setup
    const obj = { data: [{ id: 1, name: 'hoge' }] };

    // exercise
    const actual = obj.deepCopy();

    // verify
    expect(actual).not.toBe(obj);
    expect(actual).toEqual({ data: [{ id: 1, name: 'hoge' }] });
  });
});
