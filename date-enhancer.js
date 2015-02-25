(function() {
    "use strict";
    if ("function" !== Date.prototype.format) {
        Date.prototype.format = function(pattern) {
            var zero = function(v) {
                return v < 10 ? "0" + v : v;
            };
            var chars = pattern.split("");
            var result = "";
            var that = this;
            chars.forEach(function(character) {
                if ("d" === character) {
                    result += zero(that.getDate());
                }
            });
            return result;
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