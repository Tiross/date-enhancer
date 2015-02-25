"use strict";

if ("function" !== Date.prototype.format) {
    Date.prototype.format = function($pattern) {
        var zero = function(v) {
            return v < 10 ? "0" + v : v;
        };
        if ("d" === $pattern) {
            return zero(this.getDate());
        }
        if ("j" === $pattern) {
            return this.getDate();
        }
        if ("i" === $pattern) {
            return zero(this.getMinutes());
        }
    };
}

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

"use strict";

if ("function" !== Date.prototype.isValid) {
    Date.prototype.isValid = function() {
        return this.getTime() === this.getTime();
    };
}