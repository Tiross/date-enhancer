
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

  assert.equal(date.format('L'), '0', '`L` / Whether it\'s a leap year	1 if it is a leap year, 0 otherwise');
  assert.equal(new Date(1900, 0).format('L'), '0', '`L` / 1900 is not a leap year (1900 % 100 === 0)');
  assert.equal(new Date(2008, 0).format('L'), '1', '`L` / 2008 is & leap year (2008 % 100 !== 0 && 2008 % 4 === 0)');
  assert.equal(new Date(2000, 0).format('L'), '1', '`L` / 2000 is & leap year (2000 % 400 === 0)');

  assert.equal(date.format('o'), '2015', '`o` / ISO-8601 year number');
  assert.equal(new Date(2016, 0).format('o'), '2015', '`o` / 1st of 2016 is in the last week of 2015');
});
