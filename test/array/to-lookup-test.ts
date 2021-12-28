import '../../src/ext/array/to-lookup';

describe('Array.toLookup', () => {
  const testData = [
    { id: 3, name: 'Bob' },
    { id: 2, name: 'Char' },
    { id: 4, name: 'Alex' },
    { id: 1, name: 'Bob' },
  ];

  it('key = id, value = name', () => {
    // exercise
    const actual = testData.toLookup(
      (item) => item.id,
      (item) => item.name,
    );

    // verify
    expect(actual.size).toBe(4);
    expect(actual.has(1)).toBeTruthy();
    expect(actual.get(1)).toEqual(['Bob']);
    expect(actual.has(100)).toBeFalsy();
  });

  it('key = name, value = id', () => {
    // exercise
    const actual = testData.toLookup(
      (item) => item.name,
      (item) => item.id,
    );

    // verify
    expect(actual.size).toBe(3);
    expect(actual.has('Bob')).toBeTruthy();
    expect(actual.get('Bob')).toEqual([3, 1]);
    expect(actual.has('Bub')).toBeFalsy();
  });
});
