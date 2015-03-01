Date enhancer
===============
> The JavaScript Date enhancement

[![Build Status](https://travis-ci.org/Tiross/date-enhancer.svg?branch=master)](https://travis-ci.org/Tiross/date-enhancer)


isValid
---------

Check if a created instance of `Date` is a valid date.

```javascript
var validDate = new Date(2015, 2, 1);

if (validDate.isValid()) {
  // It's true !
}

var invalidDate = new Date('lol');

if (invalidDate.isValid()) {
  alert('this will never be shown');
}
```

getWeekNumber
---------------

Return the year and week number in the format `YYYYWW`.

```javascript
var firstDayOf2016 = new Date(2016, 0);

alert(firstDayOf2016.getWeekNumber()); // will show 201553
```

format
--------

`format` is a port of `date` function of PHP.

You can use the same format pattern as defined on [PHP.net](http://php.net/manual/en/function.date.php).

```javascript
var date = new Date(2015, 3, 4);

alert(date.format('F \\t\\h\\e jS \\b\\e \\y\\o\\u')); // Star Wars day :)
```

The following characters are recognized in the format parameter string.


#### Day

character | Description | Example
:---------------:|-------------|--------
d | Day of the month, 2 digits with leading zeros | 01 to 31
D | A textual representation of a day, three letters | Mon through Sun
j | Day of the month without leading zeros | 1 to 31
l<br>lowercase "L" | A full textual representation of the day of the week | Sunday through Saturday
N | ISO-8601 numeric representation of the day of the week | 1 (for Monday) through 7 (for Sunday)
S | English ordinal suffix for the day of the month, 2 characters | st, nd, rd or th
w | Numeric representation of the day of the week | 0 (for Sunday) through 6 (for Saturday)
z | The day of the year (starting from 0) | 0 through 365


#### Week

character | Description | Example
:---------------:|-------------|--------
W | ISO-8601 week number of year, weeks starting on Monday | 42 (the 42nd week in the year)


#### Month

character | Description | Example
:---------------:|-------------|--------
F | A full textual representation of a month, such as January or March | January through December
m | Numeric representation of a month, with leading zeros | 01 through 12
M | A short textual representation of a month, three letters | Jan through Dec
n | Numeric representation of a month, without leading zeros | 1 through 12
t | Number of days in the given month | 28 through 31


#### Year

character | Description | Example
:---------------:|-------------|--------
L | Whether it's a leap year | 1 if it is a leap year, 0 otherwise.
o | ISO-8601 year number | 1999 or 2003
Y | A full numeric representation of a year, 4 digits | 1999 or 2003
y | A two digit representation of a year | Examples: 99 or 03


#### Time

character | Description | Example
:---------------:|-------------|--------
a | Lowercase Ante meridiem and Post meridiem | am or pm
A | Uppercase Ante meridiem and Post meridiem | AM or PM
B | Swatch Internet time | 000 through 999
g | 12-hour format of an hour without leading zeros | 1 through 12
G | 24-hour format of an hour without leading zeros | 0 through 23
h | 12-hour format of an hour with leading zeros | 01 through 12
H | 24-hour format of an hour with leading zeros | 00 through 23
i | Minutes with leading zeros | 00 to 59
s | Seconds, with leading zeros | 00 through 59
u | Microseconds | 654000


#### Timezone

character | Description | Example
:---------------:|-------------|--------
e | Timezone identifier | UTC, GMT
I<br>uppercase "i" | Whether or not the date is in daylight saving time | 1 if in DST, 0 otherwise.
O | Difference to Greenwich time (GMT) in hours | +0200
P | Difference to Greenwich time (GMT) with colon between hours and minutes | +02:00
T | Timezone abbreviation | EST, MDT ...
Z | Timezone offset in seconds | -43200 through 50400


#### Full Date/Time

character | Description | Example
:---------------:|-------------|--------
c | ISO 8601 date | 2004-02-12T15:19:21+00:00
r | RFC 2822 formatted date | Thu, 21 Dec 2000 16:01:07 +0200
U | Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT) | 1420108212
