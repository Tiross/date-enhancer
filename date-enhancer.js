(function() {
    "use strict";
    if ("function" !== Date.prototype.format) {
        Date.locale = {};
        Date.locale.en = {
            months: {
                longs: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                shorts: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
            },
            days: {
                longs: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
                shorts: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
            },
            suffixes: [ "th", "st", "nd", "rd" ]
        };
        Date.locale.use = Date.locale.use || "en";
        Date.prototype.format = function(pattern) {
            var lpad = function(string, length, pad) {
                length = typeof length === "undefined" ? 0 : length;
                pad = typeof pad === "undefined" ? "0" : pad;
                while (string.length < length) {
                    string = pad + string;
                }
                return string;
            };
            var charValues = {
                Y: function() {
                    return this.getFullYear();
                },
                y: function() {
                    return this.getFullYear() % 100;
                },
                L: function() {
                    var year = this.getFullYear();
                    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                        return "1";
                    }
                    return "0";
                },
                o: function() {
                    return Math.floor(this.getWeekNumber() / 100);
                },
                n: function() {
                    return this.getMonth() + 1;
                },
                m: function() {
                    return lpad(this.format("n"), 2);
                },
                M: function() {
                    return Date.locale[Date.locale.use].months.shorts[this.getMonth()];
                },
                F: function() {
                    return Date.locale[Date.locale.use].months.longs[this.getMonth()];
                },
                t: function() {
                    return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
                }
            };
            var that = this;
            return pattern.replace(/\\?(.)/g, function(character) {
                return charValues[character] ? charValues[character].call(that) : character;
            });
        };
    }
})();

(function() {
    "use strict";
    if ("function" !== Date.prototype.getWeekNumber) {
        Date.prototype.getWeekNumber = function() {
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

(function() {
    "use strict";
    if ("function" !== Date.prototype.isValid) {
        Date.prototype.isValid = function() {
            return this.getTime() === this.getTime();
        };
    }
})();