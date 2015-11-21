describe('format spec', function () {

  describe('formatting times', function () {
    var amDate = new Date(2015, 0, 1, 9, 59, 3, 12);
    var pmDate = new Date(2015, 0, 1, 20, 9, 40, 345);

    it('should return a numeric representation of the Swatch Internet time with "B"', function () {
      expect(amDate.format('B')).toBe('666');
      expect(pmDate.format('B')).toBe('090');
    });
  });

  describe('formatting timezones', function () {

    it('should return a timezone identifer with "e"', function () {
      expect(new Date(2015, 0, 1).format('e')).toBe('EDT');
    });

    it('should return 1 or 0 when given date is in DST or not with "I"', function () {
      expect(new Date(2015, 0).format('I')).toBe('0');
      expect(new Date(2015, 3).format('I')).toBe('1'); // April 1st is in DST
    });

    it('should return the difference to Greenwich time without colon with "O"', function () {
      var date = new Date(2015, 0);

      expect(date.format('O')).toBe(date.format('I') === '1' ? '-0400' : '-0500');
    });

    it('should return the difference to Greenwich time with colon with "P"', function () {
      var date = new Date(2015, 0);

      expect(date.format('P')).toBe(date.format('I') === '1' ? '-04:00' : '-05:00');
    });

    it('should return the timezone abbreviation with "T"', function () {
      expect(new Date(2015, 0, 1).format('T')).toBe('EDT');
    });

    it('should return the timezone offset is seconds with "Z"', function () {
      var date = new Date(2015, 0);

      expect(date.format('Z')).toBe(date.format('I') === '1' ? '-14400' : '-18000');
    });
  });

  describe('formatting full dates and times', function () {
    var date = new Date(Date.UTC(2015, 0, 1, 11, 30, 12));

    it('should return a ISO 8601 representation of date and time with "c"', function () {
      expect(date.format('c')).toBe('2015-01-01T06:30:12-05:00');
    });

    it('should return a representation of date and time following RFC 2822 with "r"', function () {
      expect(date.format('r')).toBe('Thu, 1 Jan 2015 06:30:12 -0500');
    });
  });

});
