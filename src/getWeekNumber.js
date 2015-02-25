(function () {
  'use strict';

  // Based on https://en.wikipedia.org/wiki/ISO_week_date#Calculating_the_week_number_of_a_given_date

  if ('function' !== Date.prototype.getWeekNumber) {
    Date.prototype.getWeekNumber = function () {
      var firstDay = new Date(this.getFullYear(), 0, 1);
      var dayOfYear = Math.floor((this.valueOf() - firstDay.valueOf()) / 864e5 + 1);
      var result = Math.floor((dayOfYear - this.getDay() + 10) / 7);

      if (result) {
        return this.getFullYear() * 100 + result;
      }

      return new Date(this.getFullYear(), 0, 0).getWeekNumber();
    };
  }
})();
