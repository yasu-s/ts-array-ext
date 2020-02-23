import '../src/ext/array/zip';

describe('Array.zip', () => {
  it('ok', () => {
    // setup
    const items = [1, 2, 3];
    const second = ['a', 'b', 'c'];

    // exercise
    const actual = items.zip(second, (f, s) => `${f}${s}`);

    // verify
    expect(actual).toEqual(['1a', '2b', '3c']);
  });
});
