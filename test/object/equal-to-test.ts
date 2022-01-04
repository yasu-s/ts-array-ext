import '../../src/ext/object/equal-to';

describe('Object.equalTo', () => {
  describe('object', () => {
    it.each([
      { case: 'ok', target: { id: 1, name: 'hoge' }, expected: true },
      { case: 'ng', target: { id: 2, name: 'hoge' }, expected: false },
    ])('$case', ({ target, expected }) => {
      // setup
      const obj = { id: 1, name: 'hoge' };

      // exercise
      const actual = obj.equalTo(target);

      // verify
      expect(actual).toBe(expected);
    });
  });

  describe('nested object', () => {
    it.each([
      { case: 'ok', target: { data: [{ id: 1, name: 'hoge' }] }, expected: true },
      { case: 'ng', target: { data: [{ id: 2, name: 'hoge' }] }, expected: false },
    ])('$case', ({ target, expected }) => {
      // setup
      const obj = { data: [{ id: 1, name: 'hoge' }] };

      // exercise
      const actual = obj.equalTo(target);

      // verify
      expect(actual).toBe(expected);
    });
  });
});
