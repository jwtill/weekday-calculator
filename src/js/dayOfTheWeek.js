export default class DayOfTheWeek {
  constructor(day) {
    this.day = new Date(day);
  }

  getDayOfTheWeek() {
    const dayRepr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return dayRepr[this.day.getDay()];
  }
}
