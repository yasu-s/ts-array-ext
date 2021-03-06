import '../src/ext/array/to-lookup';

class TestData {
  id = 0;
  name = '';
  memo = '';
}

describe('Array.toLookup', () => {
  let testData: TestData[];

  beforeEach(() => {
    testData = new Array<TestData>();

    let d = new TestData();
    d.id = 3;
    d.name = 'Bob';
    testData.push(d);

    d = new TestData();
    d.id = 2;
    d.name = 'Char';
    testData.push(d);

    d = new TestData();
    d.id = 4;
    d.name = 'Alex';
    testData.push(d);

    d = new TestData();
    d.id = 1;
    d.name = 'Bob';
    testData.push(d);
  });

  it('key = id, value = name', () => {
    // exercise
    const actual = testData.toLookup((item) => item.id, (item) => item.name);

    // verify
    expect(actual.size).toBe(4);
    expect(actual.has(1)).toBeTruthy();
    expect(actual.get(1)).toEqual(['Bob']);
    expect(actual.has(100)).toBeFalsy();
  });

  it('key = name, value = id', () => {
    // exercise
    const actual = testData.toLookup((item) => item.name, (item) => item.id);

    // verify
    expect(actual.size).toBe(3);
    expect(actual.has('Bob')).toBeTruthy();
    expect(actual.get('Bob')).toEqual([3, 1]);
    expect(actual.has('Bub')).toBeFalsy();
  });
});
