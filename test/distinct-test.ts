import '../src/ext/array/distinct';

describe('Array.distinct', () => {
  it('Array.length > 0', () => {
    // setup
    const items = [1, 2, '1', 1, '2', '1'];

    // exercise
    const actual = items.distinct();

    // verify
    expect(actual).toEqual([1, 2, '1', '2']);
  });

  it('Array.length = 0', () => {
    // setup
    const items = [] as number[];

    // exercise
    const actual = items.distinct();

    // verify
    expect(actual).toEqual([]);
  });
});

describe('Array.distinctBy', () => {
  it('string', () => {
    // setup
    const items = [
      { id: 1, name: 'Alex' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Alex' },
    ];

    // exercise
    const actual = items.distinctBy(item => item.name);

    // verify
    expect(actual).toEqual([{ id: 1, name: 'Alex' }, { id: 2, name: 'Bob' } ]);
  });

  it('number', () => {
    // setup
    const items = [
      { id: 1, name: 'Alex' },
      { id: 1, name: 'Bob' },
      { id: 2, name: 'Alex' },
    ];

    // exercise
    const actual = items.distinctBy(item => item.id);

    // verify
    expect(actual).toEqual([{ id: 1, name: 'Alex' }, { id: 2, name: 'Alex' } ]);
  });

  it('Array.length = 0', () => {
    // setup
    const items = [] as number[];

    // exercise
    const actual = items.distinctBy(item => item);

    // verify
    expect(actual).toEqual([]);
  });

  it('args = undefined', () => {
    // setup
    const items = [1, 2, '1', 1, '2', '1'];

    // exercise
    const actual = items.distinctBy();

    // verify
    expect(actual).toEqual([1, 2, '1', '2']);
  });
});
