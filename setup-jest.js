jasmine.clock = () => {
  return {
    mockDate: (date) => {
      const BaseDate = Date;
      const value = date.valueOf();

      global.Date = class extends Date {
        constructor() {
          return new BaseDate(date);
        }

        static now() {
          return value;
        }
      }
    }
  };
};
