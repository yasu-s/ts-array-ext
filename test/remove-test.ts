import '../src/ext/array/remove';

describe('Array.remove', () => {
  it('ok', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    items.remove(2);

    // verify
    expect(items).toEqual([1, 3]);
  });

  it('not found', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    items.remove(4);

    // verify
    expect(items).toEqual([1, 2, 3]);
  });


  it('target = null', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    items.remove(null as any);

    // verify
    expect(items).toEqual([1, 2, 3]);
  });

  it('target = undefined', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    items.remove(undefined as any);

    // verify
    expect(items).toEqual([1, 2, 3]);
  });
});

describe('Array.removeAt', () => {
  it('ok', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    items.removeAt(1);

    // verify
    expect(items).toEqual([1, 3]);
  });

  it('ok', () => {
    // setup
    const items = [1, 2, 3];

    // exercise
    items.removeAt(4);

    // verify
    expect(items).toEqual([1, 2, 3]);
  });
});
