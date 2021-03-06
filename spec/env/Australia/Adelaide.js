describe('format spec', function () {

  describe('formatting times', function () {
    var amDate = new Date(2015, 0, 1, 9, 59, 3, 12);
    var pmDate = new Date(2015, 0, 1, 20, 9, 40, 345);

    it('should return a numeric representation of the Swatch Internet time with "B"', function () {
      expect(amDate.format('B')).toBe('020');
      expect(pmDate.format('B')).toBe('444');
    });
  });

  describe('formatting timezones', function () {

    it('should return a timezone identifer with "e"', function () {
      expect(new Date(2015, 0).format('e')).toBe('ACDT');
    });

    it('should return 1 or 0 when given date is in DST or not with "I"', function () {
      expect(new Date(2015, 0).format('I')).toBe('1'); // July 1st is in DST
      expect(new Date(2015, 6).format('I')).toBe('0'); // I forgot it's in south hemisphere
    });

    it('should return the difference to Greenwich time without colon with "O"', function () {
      var date = new Date(2015, 0);

      expect(date.format('O')).toBe(date.format('I') === '1' ? '+1030' : '+0930');
    });

    it('should return the difference to Greenwich time with colon with "P"', function () {
      var date = new Date(2015, 0);

      expect(date.format('P')).toBe(date.format('I') === '1' ? '+10:30' : '+09:30');
    });

    it('should return the timezone abbreviation with "T"', function () {
      expect(new Date(2015, 0).format('T')).toBe('ACDT');
    });

    it('should return the timezone offset is seconds with "Z"', function () {
      var date = new Date(2015, 0);

      expect(date.format('Z')).toBe(date.format('I') === '1' ? '37800' : '34200');
    });
  });

  describe('formatting full dates and times', function () {
    var date = new Date(Date.UTC(2015, 0, 1, 11, 30, 12));

    it('should return a ISO 8601 representation of date and time with "c"', function () {
      expect(date.format('c')).toBe('2015-01-01T22:00:12+10:30');
    });

    it('should return a representation of date and time following RFC 2822 with "r"', function () {
      expect(date.format('r')).toBe('Thu, 1 Jan 2015 22:00:12 +1030');
    });
  });

  describe('formatting with composed pattern', function () {
    var date = new Date(2015, 0, 1, 11, 30, 12);

    it('should return "le 01/01/2015 à 11:30:12"', function () {
      expect(date.format('\\l\\e d/m/Y \\à H:i:s')).toBe('le 01/01/2015 à 11:30:12');
    });
  });

});
