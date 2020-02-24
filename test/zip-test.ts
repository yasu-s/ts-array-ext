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

  it('second = null', () => {
    // setup
    const items = [1, 2, 3];
    const second = null as any;

    // exercise
    const actual = items.zip(second, (f, s) => `${f}${s}`);

    // verify
    expect(actual).toEqual([]);
  });

  it('fn = null', () => {
    // setup
    const items = [1, 2, 3];
    const second = ['a', 'b', 'c'];

    // exercise
    const actual = items.zip(second, null as any);

    // verify
    expect(actual).toEqual([]);
  });

  it('items.length < second.length', () => {
    // setup
    const items = [1, 2];
    const second = ['a', 'b', 'c'];

    // exercise
    const actual = items.zip(second, (f, s) => `${f}${s}`);

    // verify
    expect(actual).toEqual(['1a', '2b']);
  });
});
