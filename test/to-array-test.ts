import '../src/ext/map/to-array';

describe('Map.toArray', () => {
  it('key = number, value = string', () => {
    // setup
    const map = new Map<number, string>([
      [ 1, 'Alex' ],
      [ 2, 'Bob' ]
    ]);

    // exercise
    const actual = map.toArray();

    // verify
    expect(actual.length).toBe(2);
    expect(actual[0].key).toBe(1);
    expect(actual[0].value).toBe('Alex');
  });
});
