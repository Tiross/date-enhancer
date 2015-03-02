describe('format spec', function () {

  describe('formatting years', function () {
    var date = new Date(Date.UTC(1932, 0, 1, 10, 30, 12));

    it('should return a full represention of a year on 4 digits with "Y"', function () {
      expect(date.format('Y')).toBe('1932');
    });

    it('should return a 2 digits represention of a year with "y"', function () {
      expect(date.format('y')).toBe('32');
    });

    it('should return 1 or 0 if it\'s a leap year with "L"', function () {
      expect(new Date(1900, 0).format('L')).toBe('0'); // 1900 is not a leap year (1900 % 100 === 0)
      expect(new Date(2008, 0).format('L')).toBe('1'); // 2008 is & leap year (2008 % 100 !== 0 && 2008 % 4 === 0)
      expect(new Date(2000, 0).format('L')).toBe('1'); // 2000 is & leap year (2000 % 400 === 0)
    });

    it('should return the year of the week with "o"', function () {
      expect(date.format('o')).toBe('1931');
      expect(new Date(2016, 0).format('o')).toBe('2015');
    });
  });

});
