import '../../src/ext/array/to-set';

describe('Array.toSet', () => {
  const testData = [
    { id: 3, name: 'Bob' },
    { id: 2, name: 'Char' },
    { id: 4, name: 'Alex' },
    { id: 1, name: 'Bob' },
  ];

  it('key = id', () => {
    // exercise
    const actual = testData.toSet((item) => item.id);

    // verify
    expect(actual.size).toBe(4);
    expect(actual.has(1)).toBeTruthy();
    expect(actual.has(100)).toBeFalsy();
  });

  it('key = name', () => {
    // exercise
    const actual = testData.toSet((item) => item.name);

    // verify
    expect(actual.size).toBe(3);
    expect(actual.has('Bob')).toBeTruthy();
    expect(actual.has('Bub')).toBeFalsy();
  });
});
