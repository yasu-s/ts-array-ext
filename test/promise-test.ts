import '../src/ext/promise/rxjs';

describe('Promise.toObservable', () => {
  it('ok', (done) => {
    // setup
    const promise = Promise.resolve(1);

    // exercise
    promise.toObservable().subscribe(data => {
      // verify
      expect(data).toBe(1);

      done();
    });
  });
});
