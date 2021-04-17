import '../src/ext/string/is-nil-or-empty';

describe('String.isNillOrEmpty', () => {
  it('value = null', () => {
    // setup
    const target = null;

    // exercise
    const actual = String.isNillOrEmpty(target);

    // verify
    expect(actual).toBeTruthy();
  });

  it('value = undefined', () => {
    // setup
    const target = undefined;

    // exercise
    const actual = String.isNillOrEmpty(target);

    // verify
    expect(actual).toBeTruthy();
  });

  it('value = empty', () => {
    // setup
    const target = '';

    // exercise
    const actual = String.isNillOrEmpty(target);

    // verify
    expect(actual).toBeTruthy();
  });

  it('value = a', () => {
    // setup
    const target = 'a';

    // exercise
    const actual = String.isNillOrEmpty(target);

    // verify
    expect(actual).toBeFalsy();
  });
});

describe('String.isNill', () => {
  it('value = null', () => {
    // setup
    const target = null;

    // exercise
    const actual = String.isNill(target);

    // verify
    expect(actual).toBeTruthy();
  });

  it('value = undefined', () => {
    // setup
    const target = undefined;

    // exercise
    const actual = String.isNill(target);

    // verify
    expect(actual).toBeTruthy();
  });

  it('value = empty', () => {
    // setup
    const target = '';

    // exercise
    const actual = String.isNill(target);

    // verify
    expect(actual).toBeFalsy();
  });

  it('value = a', () => {
    // setup
    const target = 'a';

    // exercise
    const actual = String.isNill(target);

    // verify
    expect(actual).toBeFalsy();
  });
});

describe('String.isEmpty', () => {
  it('value = null', () => {
    // setup
    const target = null;

    // exercise
    const actual = String.isEmpty(target);

    // verify
    expect(actual).toBeFalsy();
  });

  it('value = undefined', () => {
    // setup
    const target = undefined;

    // exercise
    const actual = String.isEmpty(target);

    // verify
    expect(actual).toBeFalsy();
  });

  it('value = empty', () => {
    // setup
    const target = '';

    // exercise
    const actual = String.isEmpty(target);

    // verify
    expect(actual).toBeTruthy();
  });

  it('value = a', () => {
    // setup
    const target = 'a';

    // exercise
    const actual = String.isEmpty(target);

    // verify
    expect(actual).toBeFalsy();
  });
});
