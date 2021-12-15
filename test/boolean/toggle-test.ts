import '../../src/ext/boolean/toggle';

describe('Boolean.toggle', () => {
  it('true -> false', () => {
    // setup
    const target = true;

    // exercise
    const actual = target.toggle();

    // verify
    expect(actual).toBeFalsy();
  });

  it('false -> true', () => {
    // setup
    const target = false;

    // exercise
    const actual = target.toggle();

    // verify
    expect(actual).toBeTruthy();
  });
});
