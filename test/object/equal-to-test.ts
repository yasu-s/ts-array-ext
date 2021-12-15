import '../../src/ext/array/equal-to';
import '../../src/ext/object/equal-to';

describe('Array.equalTo', () => {
  describe('number array', () => {
    it('ok', () => {
      // setup
      const items = [1, 2, 3];
      const target = [1, 2, 3];

      // exercise
      const actual = items.equalTo(target);

      // verify
      expect(actual).toBeTruthy();
    });

    it('ng', () => {
      // setup
      const items = [1, 2, 3];
      const target = [1, 2, 4];

      // exercise
      const actual = items.equalTo(target);

      // verify
      expect(actual).toBeFalsy();
    });
  });

  describe('object array', () => {
    it('ok', () => {
      // setup
      const items = [
        { id: 1, name: 'hoge' },
        { id: 2, name: 'hige' },
      ];
      const target = [
        { id: 1, name: 'hoge' },
        { id: 2, name: 'hige' },
      ];

      // exercise
      const actual = items.equalTo(target);

      // verify
      expect(actual).toBeTruthy();
    });

    it('ng', () => {
      // setup
      const items = [
        { id: 1, name: 'hoge' },
        { id: 2, name: 'hige' },
      ];
      const target = [
        { id: 1, name: 'hoge' },
        { id: 2, name: 'huge' },
      ];

      // exercise
      const actual = items.equalTo(target);

      // verify
      expect(actual).toBeFalsy();
    });
  });

  describe('nested array', () => {
    it('ok', () => {
      // setup
      const items = [{ data: [{ id: 1, name: 'hoge' }] }];
      const target = [{ data: [{ id: 1, name: 'hoge' }] }];

      // exercise
      const actual = items.equalTo(target);

      // verify
      expect(actual).toBeTruthy();
    });

    it('ng', () => {
      // setup
      const items = [{ data: [{ id: 1, name: 'hoge' }] }];
      const target = [{ data: [{ id: 2, name: 'hoge' }] }];

      // exercise
      const actual = items.equalTo(target);

      // verify
      expect(actual).toBeFalsy();
    });
  });
});

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
