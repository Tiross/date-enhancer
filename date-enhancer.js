(function() {
    "use strict";
    if ("function" !== Date.prototype.format) {
        Date.prototype.format = function(pattern) {
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