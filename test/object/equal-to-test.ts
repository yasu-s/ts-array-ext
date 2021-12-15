import '../../src/ext/object/equal-to';

describe('Object.equalTo', () => {
  describe('object', () => {
    it('ok', () => {
      // setup
      const obj = { id: 1, name: 'hoge' };
      const target = { id: 1, name: 'hoge' };

      // exercise
      const actual = obj.equalTo(target);

      // verify
      expect(actual).toBeTruthy();
    });

    it('ng', () => {
      // setup
      const obj = { id: 1, name: 'hoge' };
      const target = { id: 2, name: 'hoge' };

      // exercise
      const actual = obj.equalTo(target);

      // verify
      expect(actual).toBeFalsy();
    });
  });

  describe('nested object', () => {
    it('ok', () => {
      // setup
      const obj = { data: [{ id: 1, name: 'hoge' }] };
      const target = { data: [{ id: 1, name: 'hoge' }] };

      // exercise
      const actual = obj.equalTo(target);

      // verify
      expect(actual).toBeTruthy();
    });

    it('ng', () => {
      // setup
      const obj = { data: [{ id: 1, name: 'hoge' }] };
      const target = { data: [{ id: 2, name: 'hoge' }] };

      // exercise
      const actual = obj.equalTo(target);

      // verify
      expect(actual).toBeFalsy();
    });
  });
});
