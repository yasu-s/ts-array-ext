describe('Jasmine', () => {
  it('createSpy', () => {
    // setup
    const hoge = jasmine.createSpy();

    // exercise
    hoge();

    // verify
    expect(hoge).toHaveBeenCalled();
  });

  it('clock', () => {
    // setup
    jasmine.clock = jest.fn().mockReturnValue({
      mockDate: (date?: Date) => {
        Date.now = jest.fn().mockReturnValue(date.valueOf());
      }
    });
    jasmine.clock().mockDate(new Date(2019, 1, 1));

    // exercise
    const actual = Date.now();

    // verify
    expect(actual).toBe(new Date(2019, 1, 1).valueOf());
  });
});
