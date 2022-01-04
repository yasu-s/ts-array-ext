import '../../src/ext/object/deep-copy';

describe('Object.deepCopy', () => {
  it.each([
    { case: 'object', obj: { id: 1, name: 'hoge' }, expected: { id: 1, name: 'hoge' } },
    { case: 'nested object', obj: { data: [{ id: 1, name: 'hoge' }] }, expected: { data: [{ id: 1, name: 'hoge' }] } },
  ])('$case', ({ obj, expected }) => {
    // exercise
    const actual = obj.deepCopy<{ id: number; name: string }>();

    // verify
    expect(actual).not.toBe(obj);
    expect(actual).toEqual(expected);
  });
});
