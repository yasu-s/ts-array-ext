describe('Jasmine', () => {
  it('createSpy', () => {
    // setup
    const hoge = jasmine.createSpy();

    // exercise
    hoge();

    // verify
    expect(hoge).toHaveBeenCalled();
  });
});
