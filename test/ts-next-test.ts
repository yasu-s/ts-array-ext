class Test {
  hoge: {
    hooge: string
  };
}

describe('Optional Chaining', () => {
  it('object null', () => {
    // setup
    const obj: Test = null;

    // exercise
    const actual = obj?.hoge.hooge;

    // verify
    expect(actual).toBeUndefined();
  });

  it('object undefined', () => {
    // setup
    const obj: Test = undefined;

    // exercise
    const actual = obj?.hoge.hooge;

    // verify
    expect(actual).toBeUndefined();
  });

  it('object defined', () => {
    // setup
    const obj = new Test();
    obj.hoge = { hooge: 'xxx' };

    // exercise
    const actual = obj?.hoge.hooge;

    // verify
    expect(actual).toBe('xxx');
  });
});

describe('Nullish Coalescing', () => {
  it('object null', () => {
    // setup
    const obj: Test = null;

    // exercise
    const actual = obj ?? new Test();

    // verify
    expect(actual).toBeInstanceOf(Test);
  });

  it('object undefined', () => {
    // setup
    const obj: Test = undefined;

    // exercise
    const actual = obj ?? new Test();

    // verify
    expect(actual).toBeInstanceOf(Test);
  });

  it('object defined', () => {
    // setup
    const obj = new Test();
    obj.hoge = { hooge: 'xxx' };

    // exercise
    const actual = obj ?? new Test();

    // verify
    expect(actual.hoge.hooge).toBe('xxx');
  });
});
