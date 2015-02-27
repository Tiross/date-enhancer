(function () {
  'use strict';

  if ('function' !== Date.prototype.format) {
    Date.prototype.format = function (pattern) {
      var charValues = {

        // Year
        Y: function () { // Year, 4 digits
          return this.getFullYear();
        },
        y: function () { // Year, 2 digits
          return this.getFullYear() % 100;
        },
        L: function () { // Is a leap year
          var year = this.getFullYear();

          if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return '1';
          }

          return '0';
        },
        o: function () { // Week year
          return Math.floor(this.getWeekNumber() / 100);
        }
      };
      var that = this;

      return pattern.replace(/\\?(.)/g, function (character) {
        return charValues[character] ? charValues[character].call(that) : character;
      });
    };
  }
})();
