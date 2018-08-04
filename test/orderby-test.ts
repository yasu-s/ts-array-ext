import '../src/ext/array/orderby';

class TestData {
  id: number;
  name: string;
  memo: string;
}

describe('Array.orderby', () => {
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

  it('sortKeys = null', () => {
    // setup
    const items = [3, 1, 2];

    // execrise
    const actual = items.orderBy();

    // verify
    expect(actual).toEqual([1, 2, 3]);
  });

  it('sortKeys = TestData.id', () => {
    // execrise
    const actual = testData.orderBy('id');

    // verify
    expect(actual[0].id).toBe(1);
    expect(actual[1].id).toBe(2);
    expect(actual[2].id).toBe(3);
    expect(actual[3].id).toBe(4);
  });

  it('sortKeys = TestData.name', () => {
    // execrise
    const actual = testData.orderBy('name');

    // verify
    expect(actual[0].name).toBe('Alex');
    expect(actual[1].name).toBe('Bob');
    expect(actual[2].name).toBe('Bob');
    expect(actual[3].name).toBe('Char');
  });

  it('sortKeys = TestData.name, TestData.id', () => {
    // execrise
    const actual = testData.orderBy('name', 'id');

    // verify
    expect(actual[0].id).toBe(4);
    expect(actual[1].id).toBe(1);
    expect(actual[2].id).toBe(3);
    expect(actual[3].id).toBe(2);
  });

  it('sortKeys = { key:TestData.name, asc: true }', () => {
    // execrise
    const actual = testData.orderBy({ sortKey: 'name', asc: true });

    // verify
    expect(actual[0].name).toBe('Alex');
    expect(actual[1].name).toBe('Bob');
    expect(actual[2].name).toBe('Bob');
    expect(actual[3].name).toBe('Char');
  });

  it('sortKeys = { key:TestData.name, asc: false }', () => {
    // execrise
    const actual = testData.orderBy({ sortKey: 'name', asc: false });

    // verify
    expect(actual[0].name).toBe('Char');
    expect(actual[1].name).toBe('Bob');
    expect(actual[2].name).toBe('Bob');
    expect(actual[3].name).toBe('Alex');
  });

  it('sortKeys = { key:TestData.name, asc: true }, { key:TestData.id, asc: false }', () => {
    // execrise
    const actual = testData.orderBy({ sortKey: 'name', asc: true }, { sortKey: 'id', asc: false });

    // verify
    expect(actual[0].id).toBe(4);
    expect(actual[1].id).toBe(3);
    expect(actual[2].id).toBe(1);
    expect(actual[3].id).toBe(2);
  });
});
