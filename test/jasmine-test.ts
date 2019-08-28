import * as moment from 'moment';

describe('Jasmine', () => {
  it('createSpy', () => {
    // setup
    const hoge = jasmine.createSpy();

    // exercise
    hoge();

    // verify
    expect(hoge).toHaveBeenCalled();
  });

  it('clock - Date.now', () => {
    // setup
    jasmine.clock().mockDate(new Date(2019, 1, 1));

    // exercise
    const actual = Date.now();

    // verify
    expect(actual).toBe(new Date(2019, 1, 1).valueOf());
  });

  it('clock - new Date', () => {
    // setup
    const date = new Date(2019, 2, 1);
    const sec = date.valueOf();
    jasmine.clock().mockDate(date);

    // exercise
    const actual = new Date();

    // verify
    expect(actual.valueOf()).toBe(sec);
  });

  it('moment', () => {
    // setup
    const date = new Date(2019, 2, 1);
    const sec = date.valueOf();
    jasmine.clock().mockDate(date);

    // exercise
    const actual = moment();

    // verify
    expect(actual.valueOf()).toBe(sec);
  });
});
