import DayOfTheWeek from "../src/js/dayOfTheWeek.js";

describe('DayOfTheWeek', () => {
  test('should construct a new DayOfTheWeek object', () => {
    const testDate = new Date("2022-02-02");
    const dotw = new DayOfTheWeek("2022-02-02");
    expect(dotw.day).toEqual(testDate);
  });

  test('.getDayOfWeek() should return string representing day of the week', () => {
    const dotw = new DayOfTheWeek('2022-02-02');
    expect(dotw.getDayOfTheWeek()).toEqual('Wednesday');
  });
});