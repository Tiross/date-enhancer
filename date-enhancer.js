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
                string = string.toString();
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
                },
                W: function() {
                    return this.getWeekNumber() % 100;
                },
                d: function() {
                    return lpad(this.getDate(), 2);
                },
                j: function() {
                    return this.getDate();
                },
                D: function() {
                    return Date.locale[Date.locale.use].days.shorts[this.getDay()];
                },
                l: function() {
                    return Date.locale[Date.locale.use].days.longs[this.getDay()];
                },
                N: function() {
                    var dow = this.getDay();
                    return 0 === dow ? 7 : dow;
                },
                S: function() {
                    var suffix = Date.locale[Date.locale.use].suffixes[this.getDate()];
                    return typeof suffix === "undefined" ? Date.locale[Date.locale.use].suffixes[0] : suffix;
                },
                w: function() {
                    return this.getDay();
                },
                z: function() {
                    var ref = new Date(this.getFullYear(), 0, 0);
                    var elapsed = this.getTime() - ref.getTime();
                    return Math.floor(elapsed / 864e5) - 1;
                },
                a: function() {
                    return this.getHours() < 12 ? "am" : "pm";
                },
                A: function() {
                    return this.format("a").toUpperCase();
                },
                B: function() {
                    return Math.floor((this.getUTCSeconds() + this.getUTCMinutes() * 60 + this.getUTCHours() * 3600) / 86.4);
                },
                g: function() {
                    return this.getHours() % 12;
                },
                G: function() {
                    return this.getHours();
                },
                h: function() {
                    return lpad(this.format("g"), 2);
                },
                H: function() {
                    return lpad(this.getHours(), 2);
                },
                i: function() {
                    return lpad(this.getMinutes(), 2);
                },
                s: function() {
                    return lpad(this.getSeconds(), 2);
                },
                u: function() {
                    return lpad(this.getMilliseconds() * 1e3, 6);
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