import '../../src/ext/array/orderby';

describe('Array.orderby', () => {
  const testData = [
    { id: 3, name: 'Bob' },
    { id: 2, name: 'Char' },
    { id: 4, name: 'Alex' },
    { id: 1, name: 'Bob' },
  ];

  it('sortKeys = null', () => {
    // setup
    const items = [3, 1, 2];

    // exercise
    const actual = items.orderBy();

    // verify
    expect(actual).toEqual([1, 2, 3]);
  });

  it('sortKeys = TestData.id', () => {
    // exercise
    const actual = testData.orderBy((d) => d.id);

    // verify
    expect(actual[0].id).toBe(1);
    expect(actual[1].id).toBe(2);
    expect(actual[2].id).toBe(3);
    expect(actual[3].id).toBe(4);
  });

  it('sortKeys = TestData.name', () => {
    // exercise
    const actual = testData.orderBy((d) => d.name);

    // verify
    expect(actual[0].name).toBe('Alex');
    expect(actual[1].name).toBe('Bob');
    expect(actual[2].name).toBe('Bob');
    expect(actual[3].name).toBe('Char');
  });

  it('sortKeys = TestData.name, TestData.id', () => {
    // exercise
    const actual = testData.orderBy(
      (d) => d.name,
      (d) => d.id,
    );

    // verify
    expect(actual[0].id).toBe(4);
    expect(actual[1].id).toBe(1);
    expect(actual[2].id).toBe(3);
    expect(actual[3].id).toBe(2);
  });

  it('sortKeys = { sortFn }', () => {
    // exercise
    const actual = testData.orderBy({ sortFn: (d) => d.name });

    // verify
    expect(actual[0].name).toBe('Alex');
    expect(actual[1].name).toBe('Bob');
    expect(actual[2].name).toBe('Bob');
    expect(actual[3].name).toBe('Char');
  });

  it('sortKeys = { sortFn, asc: false }', () => {
    // exercise
    const actual = testData.orderBy({ sortFn: (d) => d.name, asc: false });

    // verify
    expect(actual[0].name).toBe('Char');
    expect(actual[1].name).toBe('Bob');
    expect(actual[2].name).toBe('Bob');
    expect(actual[3].name).toBe('Alex');
  });

  it('sortKeys = { sortFn, asc: true }, { sortFn, asc: false }', () => {
    // exercise
    const actual = testData.orderBy({ sortFn: (d) => d.name, asc: true }, { sortFn: (d) => d.id, asc: false });

    // verify
    expect(actual[0].id).toBe(4);
    expect(actual[1].id).toBe(3);
    expect(actual[2].id).toBe(1);
    expect(actual[3].id).toBe(2);
  });
});
