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
      var leadingZeros = function (string, length) {
        length = typeof length === 'undefined' ? 2 : length;
        string = string.toString();

        while (string.length < length) {
          string = '0' + string;
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

          if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return 1;
          }

          return 0;
        },
        o: function () { // Week year
          return Math.floor(this.getWeekNumber() / 100);
        },

        // Month
        n: function () { // No leading zero
          return this.getMonth() + 1;
        },
        m: function () { // With leading zero
          return leadingZeros(this.format('n'));
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
          return leadingZeros(this.getDate());
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
        },

        // Time
        a: function () { // am / pm
          return this.getHours() < 12 ? 'am' : 'pm';
        },
        A: function () { // am / pm
          return this.format('a').toUpperCase();
        },
        B: function () { // swatch internet time
          return Math.floor((this.getSeconds() + this.getMinutes() * 60 + this.getHours() * 3600) / 86.4);
        },
        g: function () { // Hours, 12h, without leading zeros
          return this.getHours() % 12;
        },
        G: function () { // Hours, 24h, without leading zeros
          return this.getHours();
        },
        h: function () { // Hours, 12h, with leading zeros
          return leadingZeros(this.format('g'));
        },
        H: function () { // Hours, 24h, with leading zeros
          return leadingZeros(this.getHours());
        },
        i: function () { // Minutes, with leading zeros
          return leadingZeros(this.getMinutes());
        },
        s: function () { // Seconds, with leading zeros
          return leadingZeros(this.getSeconds());
        },
        u: function () { // Microseconds
          return leadingZeros(this.getMilliseconds() * 1e3, 6);
        },

        // Timezone
        e: function () { // TZ Name
          return (new Date()).toString().match(/\((.+)\)/)[1];
        },
        I: function () { // Is in DST
          // Based on http://stackoverflow.com/a/11888430

          var january = new Date(this.getFullYear(), 0);
          var july = new Date(this.getFullYear(), 6);

          var maxOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());

          return this.getTimezoneOffset() !== maxOffset ? '1' : '0';
        },
        O: function () { // Diff to GMT +0000 style
          return this.format('P').replace(':', '');
        },
        P: function () { // Diff to GMT +00:00 style
          var offset = this.getTimezoneOffset();
          var sign = offset <= 0 ? '+' : '-';

          offset = Math.abs(offset);

          return sign + leadingZeros(Math.floor(offset / 60)) + ':' + leadingZeros(offset % 60);
        },
        T: function () { // TZ Abbr, same as TZ name, JS is a shame on TZ manipulation
          return this.format('e');
        },
        Z: function () { // TZ offset in seconds
          return -60 * this.getTimezoneOffset();
        },

        // Full Date/Time
        c: function () { // ISO 8601
          return this.format('Y-m-d\\TH:i:sP');
        },
        r: function () { // RFC 2822
          return this.format('D, j M Y H:i:s O');
        },
        U: function () { // UNIX Timestamp
          return Math.floor(this.getTime() / 1000);
        }
      };
      var that = this;

      return pattern.replace(/\\?(.)/g, function (character) {
        return charValues[character] ? charValues[character].call(that) : character.replace(/^\\(.+)/, '$1');
      });
    };
  }
})();
