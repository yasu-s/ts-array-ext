import '../../src/ext/object/deep-copy';

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
