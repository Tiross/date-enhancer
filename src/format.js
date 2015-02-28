(function () {
  'use strict';

  if ('function' !== Date.prototype.format) {
    Date.locale = {};
    Date.locale.en = {
      months: {
        longs: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ],
        shorts: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      days: {
        longs: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        shorts: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      },
      suffixes: ['th', 'st', 'nd', 'rd']
    };

    Date.locale.use = Date.locale.use || 'en';

    Date.prototype.format = function (pattern) {
      var lpad = function (string, length, pad) {
        length = typeof length === 'undefined' ? 0 : length;
        pad    = typeof pad === 'undefined' ? '0' : pad;
        string = string.toString();

        while (string.length < length) {
          string = pad + string;
        }

        return string;
      };

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
        },

        // Month
        n: function () { // No leading zero
          return this.getMonth() + 1;
        },
        m: function () { // With leading zero
          return lpad(this.format('n'), 2);
        },
        M: function () { // 3 letters
          return Date.locale[ Date.locale.use ].months.shorts[ this.getMonth() ];
        },
        F: function () { // Full text
          return Date.locale[ Date.locale.use ].months.longs[ this.getMonth() ];
        },
        t: function () { // Nb of days
          return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
        },

        // Weeks
        W: function () { // Week number
          return this.getWeekNumber() % 100;
        },

        // Days
        d: function () { // With leading zero
          return lpad(this.getDate(), 2);
        },
        j: function () { // Without leading zero
          return this.getDate();
        },
        D: function () { // 3 letters
          return Date.locale[ Date.locale.use ].days.shorts[ this.getDay() ];
        },
        l: function () { // Full text
          return Date.locale[ Date.locale.use ].days.longs[ this.getDay() ];
        },
        N: function () { // Day of week ISO
          var dow = this.getDay();

          return 0 === dow ? 7 : dow;
        },
        S: function () { // Ordinal suffix
          var suffix = Date.locale[ Date.locale.use ].suffixes[ this.getDate() ];

          return typeof suffix === 'undefined' ? Date.locale[ Date.locale.use ].suffixes[0] : suffix;
        },
        w: function () { // Day of week
          return this.getDay();
        },
        z: function () { // Day of year
          var ref = new Date(this.getFullYear(), 0, 0);
          var elapsed = this.getTime() - ref.getTime();

          return Math.floor(elapsed / 864e5) - 1;
        }
      };
      var that = this;

      return pattern.replace(/\\?(.)/g, function (character) {
        return charValues[character] ? charValues[character].call(that) : character;
      });
    };
  }
})();
