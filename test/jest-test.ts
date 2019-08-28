describe('jest', () => {
  it('Date.now', () => {
    // setup
    Date.now = jest.fn().mockReturnValue(new Date(2019, 1, 1).valueOf());

    // exercise
    const actual = Date.now();

    // verify
    expect(actual).toBe(new Date(2019, 1, 1).valueOf());
  });

  it('Date.now not mock', () => {
    // exercise
    const actual = Date.now();

    // verify
    expect(actual).not.toBe(new Date(2019, 1, 1).valueOf());
  });
});
