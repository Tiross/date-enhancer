
var year = 2015;
var month = 1;
var day = 1;
var hour = 10;
var minute = 30;
var second = 12;

var date = new Date(Date.UTC(year, month - 1, day, hour, minute, second));

QUnit.test('test years', function (assert) {
  assert.equal(date.format('Y'), year, '`Y` / A full numeric representation of a year, 4 digits');
  assert.equal(date.format('y'), year % 100, '`y` / A two digit representation of a year');

  assert.strictEqual(date.format('L'), '0', '`L` / Whether it\'s a leap year	1 if it is a leap year, 0 otherwise');
  assert.strictEqual(new Date(1900, 0).format('L'), '0', '`L` / 1900 is not a leap year (1900 % 100 === 0)');
  assert.strictEqual(new Date(2008, 0).format('L'), '1', '`L` / 2008 is & leap year (2008 % 100 !== 0 && 2008 % 4 === 0)');
  assert.strictEqual(new Date(2000, 0).format('L'), '1', '`L` / 2000 is & leap year (2000 % 400 === 0)');

  assert.equal(date.format('o'), '2015', '`o` / ISO-8601 year number');
  assert.equal(new Date(2016, 0).format('o'), '2015', '`o` / 1st of 2016 is in the last week of 2015');
});

QUnit.test('test month', function (assert) {
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
