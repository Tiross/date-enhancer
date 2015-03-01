
var year = 2015;
var month = 1;
var day = 1;
var hour = 10;
var minute = 30;
var second = 12;

var date = new Date(Date.UTC(year, month - 1, day, hour, minute, second));

QUnit.test('Test method "format" / year', function (assert) {
  assert.equal(date.format('Y'), year, '`Y` / A full numeric representation of a year, 4 digits');
  assert.equal(date.format('y'), year % 100, '`y` / A two digit representation of a year');

  assert.strictEqual(date.format('L'), '0', '`L` / Whether it\'s a leap year	1 if it is a leap year, 0 otherwise');
  assert.strictEqual(new Date(1900, 0).format('L'), '0', '`L` / 1900 is not a leap year (1900 % 100 === 0)');
  assert.strictEqual(new Date(2008, 0).format('L'), '1', '`L` / 2008 is & leap year (2008 % 100 !== 0 && 2008 % 4 === 0)');
  assert.strictEqual(new Date(2000, 0).format('L'), '1', '`L` / 2000 is & leap year (2000 % 400 === 0)');

  assert.equal(date.format('o'), '2015', '`o` / ISO-8601 year number');
  assert.equal(new Date(2016, 0).format('o'), '2015', '`o` / 1st of 2016 is in the last week of 2015');
});

QUnit.test('Test method "format" / month', function (assert) {
  assert.equal(date.format('m'), '01', '`m` / Numeric representation of a month, with leading zeros');
  assert.equal(date.format('n'), '1', '`n` / Numeric representation of a month, without leading zeros');

  assert.equal(date.format('M'), 'Jan', '`M` / A short textual representation of a month, three letters');
  assert.equal(new Date(2015, 1).format('M'), 'Feb', '`M` / February');
  assert.equal(new Date(2015, 2).format('M'), 'Mar', '`M` / March');
  assert.equal(new Date(2015, 3).format('M'), 'Apr', '`M` / April');
  assert.equal(new Date(2015, 4).format('M'), 'May', '`M` / May');
  assert.equal(new Date(2015, 5).format('M'), 'Jun', '`M` / June');
  assert.equal(new Date(2015, 6).format('M'), 'Jul', '`M` / July');
  assert.equal(new Date(2015, 7).format('M'), 'Aug', '`M` / August');
  assert.equal(new Date(2015, 8).format('M'), 'Sep', '`M` / September');
  assert.equal(new Date(2015, 9).format('M'), 'Oct', '`M` / October');
  assert.equal(new Date(2015, 10).format('M'), 'Nov', '`M` / November');
  assert.equal(new Date(2015, 11).format('M'), 'Dec', '`M` / December');

  assert.equal(date.format('F'), 'January', '`F` / A full textual representation of a month, such as January or March');
  assert.equal(new Date(2015, 1).format('F'), 'February', '`F` / February');
  assert.equal(new Date(2015, 2).format('F'), 'March', '`F` / March');
  assert.equal(new Date(2015, 3).format('F'), 'April', '`F` / April');
  assert.equal(new Date(2015, 4).format('F'), 'May', '`F` / May');
  assert.equal(new Date(2015, 5).format('F'), 'June', '`F` / June');
  assert.equal(new Date(2015, 6).format('F'), 'July', '`F` / July');
  assert.equal(new Date(2015, 7).format('F'), 'August', '`F` / August');
  assert.equal(new Date(2015, 8).format('F'), 'September', '`F` / September');
  assert.equal(new Date(2015, 9).format('F'), 'October', '`F` / October');
  assert.equal(new Date(2015, 10).format('F'), 'November', '`F` / November');
  assert.equal(new Date(2015, 11).format('F'), 'December', '`F` / December');

  assert.equal(date.format('t'), 31, '`t` / Number of days in the given month');
  assert.equal(new Date(2015, 1).format('t'), 28, '`t` / February');
  assert.equal(new Date(2016, 1).format('t'), 29, '`t` / February (leap year)');
  assert.equal(new Date(2015, 2).format('t'), 31, '`t` / March');
  assert.equal(new Date(2015, 3).format('t'), 30, '`t` / April');
  assert.equal(new Date(2015, 4).format('t'), 31, '`t` / May');
  assert.equal(new Date(2015, 5).format('t'), 30, '`t` / June');
  assert.equal(new Date(2015, 6).format('t'), 31, '`t` / July');
  assert.equal(new Date(2015, 7).format('t'), 31, '`t` / August');
  assert.equal(new Date(2015, 8).format('t'), 30, '`t` / September');
  assert.equal(new Date(2015, 9).format('t'), 31, '`t` / October');
  assert.equal(new Date(2015, 10).format('t'), 30, '`t` / November');
  assert.equal(new Date(2015, 11).format('t'), 31, '`t` / December');
});

QUnit.test('Test method "format" / week', function (assert) {
  assert.equal(date.format('W'), 1, '`W` / Week of 1st day of 2015 => 1');
  assert.equal(new Date(2016, 0).format('W'), 53, '`W` / Week of 1st day of 2016 => 53');
});

QUnit.test('Test method "format" / day', function (assert) {
  var thursday = date;
  var friday = new Date(2015, 0, 2);
  var saturday = new Date(2015, 0, 3);
  var sunday = new Date(2015, 0, 4);
  var monday = new Date(2015, 0, 12);
  var tuesday = new Date(2015, 0, 13);
  var wednesday = new Date(2015, 0, 14);

  assert.equal(monday.format('d'), '12', '`d` / Day of the month, 2 digits with leading zeros / Monday');
  assert.equal(tuesday.format('d'), '13', '`d` / Day of the month, 2 digits with leading zeros / Tuesday');
  assert.equal(wednesday.format('d'), '14', '`d` / Day of the month, 2 digits with leading zeros / Wednesday');
  assert.equal(thursday.format('d'), '01', '`d` / Day of the month, 2 digits with leading zeros / Thursday');
  assert.equal(friday.format('d'), '02', '`d` / Day of the month, 2 digits with leading zeros / Friday');
  assert.equal(saturday.format('d'), '03', '`d` / Day of the month, 2 digits with leading zeros / Saturday');
  assert.equal(sunday.format('d'), '04', '`d` / Day of the month, 2 digits with leading zeros / Sunday');

  assert.equal(monday.format('D'), 'Mon', '`D` / A textual representation of a day, three letters / Monday');
  assert.equal(tuesday.format('D'), 'Tue', '`D` / A textual representation of a day, three letters / Tuesday');
  assert.equal(wednesday.format('D'), 'Wed', '`D` / A textual representation of a day, three letters / Wednesday');
  assert.equal(thursday.format('D'), 'Thu', '`D` / A textual representation of a day, three letters / Thursday');
  assert.equal(friday.format('D'), 'Fri', '`D` / A textual representation of a day, three letters / Friday');
  assert.equal(saturday.format('D'), 'Sat', '`D` / A textual representation of a day, three letters / Saturday');
  assert.equal(sunday.format('D'), 'Sun', '`D` / A textual representation of a day, three letters / Sunday');

  assert.equal(monday.format('j'), '12', '`j` / Day of the month without leading zeros / Monday');
  assert.equal(tuesday.format('j'), '13', '`j` / Day of the month without leading zeros / Tuesday');
  assert.equal(wednesday.format('j'), '14', '`j` / Day of the month without leading zeros / Wednesday');
  assert.equal(thursday.format('j'), '1', '`j` / Day of the month without leading zeros / Thursday');
  assert.equal(friday.format('j'), '2', '`j` / Day of the month without leading zeros / Friday');
  assert.equal(saturday.format('j'), '3', '`j` / Day of the month without leading zeros / Saturday');
  assert.equal(sunday.format('j'), '4', '`j` / Day of the month without leading zeros / Sunday');

  assert.equal(monday.format('l'), 'Monday', '`l` / A full textual representation of the day of the week / Monday');
  assert.equal(tuesday.format('l'), 'Tuesday', '`l` / A full textual representation of the day of the week / Tuesday');
  assert.equal(wednesday.format('l'), 'Wednesday', '`l` / A full textual representation of the day of the week / Wednesday');
  assert.equal(thursday.format('l'), 'Thursday', '`l` / A full textual representation of the day of the week / Thursday');
  assert.equal(friday.format('l'), 'Friday', '`l` / A full textual representation of the day of the week / Friday');
  assert.equal(saturday.format('l'), 'Saturday', '`l` / A full textual representation of the day of the week / Saturday');
  assert.equal(sunday.format('l'), 'Sunday', '`l` / A full textual representation of the day of the week / Sunday');

  assert.equal(monday.format('N'), '1', '`N` / ISO-8601 numeric representation of the day of the week / Monday / 1');
  assert.equal(tuesday.format('N'), '2', '`N` / ISO-8601 numeric representation of the day of the week / Tuesday / 2');
  assert.equal(wednesday.format('N'), '3', '`N` / ISO-8601 numeric representation of the day of the week / Wednesday / 3');
  assert.equal(thursday.format('N'), '4', '`N` / ISO-8601 numeric representation of the day of the week / Thursday / 4');
  assert.equal(friday.format('N'), '5', '`N` / ISO-8601 numeric representation of the day of the week / Friday / 5');
  assert.equal(saturday.format('N'), '6', '`N` / ISO-8601 numeric representation of the day of the week / Saturday / 6');
  assert.equal(sunday.format('N'), '7', '`N` / ISO-8601 numeric representation of the day of the week / Sunday / 7');

  assert.equal(monday.format('S'), 'th', '`S` / English ordinal suffix for the day of the month');
  assert.equal(tuesday.format('S'), 'th', '`S` / English ordinal suffix for the day of the month');
  assert.equal(wednesday.format('S'), 'th', '`S` / English ordinal suffix for the day of the month');
  assert.equal(thursday.format('S'), 'st', '`S` / English ordinal suffix for the day of the month');
  assert.equal(friday.format('S'), 'nd', '`S` / English ordinal suffix for the day of the month');
  assert.equal(saturday.format('S'), 'rd', '`S` / English ordinal suffix for the day of the month');
  assert.equal(sunday.format('S'), 'th', '`S` / English ordinal suffix for the day of the month');

  assert.equal(monday.format('w'), 1, '`w` / Numeric representation of the day of the week / Monday / 1');
  assert.equal(tuesday.format('w'), 2, '`w` / Numeric representation of the day of the week / Tuesday / 2');
  assert.equal(wednesday.format('w'), 3, '`w` / Numeric representation of the day of the week / Wednesday / 3');
  assert.equal(thursday.format('w'), 4, '`w` / Numeric representation of the day of the week / Thursday / 4');
  assert.equal(friday.format('w'), 5, '`w` / Numeric representation of the day of the week / Friday / 5');
  assert.equal(saturday.format('w'), 6, '`w` / Numeric representation of the day of the week / Saturday / 6');
  assert.equal(sunday.format('w'), 0, '`w` / Numeric representation of the day of the week / Sunday / 0');

  assert.equal(monday.format('z'), 11, '`z` / The day of the year (starting from 0) / Monday');
  assert.equal(tuesday.format('z'), 12, '`z` / The day of the year (starting from 0) / Tuesday');
  assert.equal(wednesday.format('z'), 13, '`z` / The day of the year (starting from 0) / Wednesday');
  assert.equal(thursday.format('z'), 0, '`z` / The day of the year (starting from 0) / Thursday');
  assert.equal(friday.format('z'), 1, '`z` / The day of the year (starting from 0) / Friday');
  assert.equal(saturday.format('z'), 2, '`z` / The day of the year (starting from 0) / Saturday');
  assert.equal(sunday.format('z'), 3, '`z` / The day of the year (starting from 0) / Sunday');
});

QUnit.test('Test method "format" / time', function (assert) {
  var amDate = new Date(2015, 0, 1, 9, 59, 3, 12);
  var pmDate = new Date(2015, 0, 1, 20, 9, 40, 345);

  assert.equal(amDate.format('a'), 'am', '`a` / Lowercase Ante meridiem and Post meridiem	/ am');
  assert.equal(pmDate.format('a'), 'pm', '`a` / Lowercase Ante meridiem and Post meridiem	/ pm');

  assert.equal(amDate.format('A'), 'AM', '`A` / Uppercase Ante meridiem and Post meridiem	/ AM');
  assert.equal(pmDate.format('A'), 'PM', '`A` / Uppercase Ante meridiem and Post meridiem	/ PM');

  assert.equal(amDate.format('B'), 374, '`B` / Swatch Internet time / Morning');
  assert.equal(pmDate.format('B'), 798, '`B` / Swatch Internet time / Afternoon');

  assert.equal(amDate.format('g'), 9, '`g` / 12-hour format of an hour without leading zeros / Morning');
  assert.equal(pmDate.format('g'), 8, '`g` / 12-hour format of an hour without leading zeros / Afternoon');

  assert.equal(amDate.format('G'), 9, '`G` / 24-hour format of an hour without leading zeros / Morning');
  assert.equal(pmDate.format('G'), 20, '`G` / 24-hour format of an hour without leading zeros / Afternoon');

  assert.equal(amDate.format('h'), '09', '`h` / 12-hour format of an hour with leading zeros / Morning');
  assert.equal(pmDate.format('h'), '08', '`h` / 12-hour format of an hour with leading zeros / Afternoon');

  assert.equal(amDate.format('H'), '09', '`H` / 24-hour format of an hour with leading zeros / Morning');
  assert.equal(pmDate.format('H'), '20', '`H` / 24-hour format of an hour with leading zeros / Afternoon');

  assert.equal(amDate.format('i'), '59', '`i` / Minutes with leading zeros / Morning');
  assert.equal(pmDate.format('i'), '09', '`i` / Minutes with leading zeros / Afternoon');

  assert.equal(amDate.format('s'), '03', '`s` / Seconds with leading zeros / Morning');
  assert.equal(pmDate.format('s'), '40', '`s` / Seconds with leading zeros / Afternoon');

  assert.equal(amDate.format('u'), '012000', '`s` / Microseconds / Morning');
  assert.equal(pmDate.format('u'), '345000', '`s` / Microseconds / Afternoon');
});

QUnit.test('Test method "format" / Timezone', function (assert) {
  assert.equal(date.format('e'), 'CET', '`e` / Timezone identifier');

  assert.equal(date.format('I'), '0', '`I` / Is in DST / false');
  assert.equal((new Date(2015, 3)).format('I'), '1', '`I` / Is in DST / April 1st is true in France');

  assert.equal(date.format('O'), date.format('I') === '1' ? '+0200' : '+0100', '`O` / Difference to Greenwich time');

  assert.equal(date.format('P'), date.format('I') === '1' ? '+02:00' : '+01:00', '`P` / Difference to Greenwich time wtih colon');

  assert.equal(date.format('T'), 'CET', '`T` / Timezone abbreviation');

  assert.equal(date.format('Z'), date.format('I') === '1' ? 7200 : 3600, '`Z` / Timezone offset in seconds');
});

QUnit.test('Test method "format" / Full date&time', function (assert) {
  assert.equal(date.format('c'), '2015-01-01T11:30:12+01:00', '`c` / ISO 8601');
  assert.equal(date.format('r'), 'Thu, 1 Jan 2015 11:30:12 +0100', '`r` / RFC 2822');
  assert.equal(date.format('U'), 1420108212, '`U` / Seconds since the Unix Epoch');
});
