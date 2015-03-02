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

  describe('formatting months', function () {
    var january   = new Date(2015, 0); // 1
    var february  = new Date(2015, 1); // 2
    var march     = new Date(2015, 2); // 3
    var april     = new Date(2015, 3); // 4
    var may       = new Date(2015, 4); // 5
    var june      = new Date(2015, 5); // 6
    var july      = new Date(2015, 6); // 7
    var august    = new Date(2015, 7); // 8
    var september = new Date(2015, 8); // 9
    var october   = new Date(2015, 9); // 10
    var november  = new Date(2015, 10); // 11
    var december  = new Date(2015, 11); // 12

    it('should return a numeric representation of a month with leading zeros with "m"', function () {
      expect(january.format('m')).toBe('01');
      expect(february.format('m')).toBe('02');
      expect(march.format('m')).toBe('03');
      expect(april.format('m')).toBe('04');
      expect(may.format('m')).toBe('05');
      expect(june.format('m')).toBe('06');
      expect(july.format('m')).toBe('07');
      expect(august.format('m')).toBe('08');
      expect(september.format('m')).toBe('09');
      expect(october.format('m')).toBe('10');
      expect(november.format('m')).toBe('11');
      expect(december.format('m')).toBe('12');
    });

    it('should return a numeric representation of a month without leading zeros with "n"', function () {
      expect(january.format('n')).toBe('1');
      expect(february.format('n')).toBe('2');
      expect(march.format('n')).toBe('3');
      expect(april.format('n')).toBe('4');
      expect(may.format('n')).toBe('5');
      expect(june.format('n')).toBe('6');
      expect(july.format('n')).toBe('7');
      expect(august.format('n')).toBe('8');
      expect(september.format('n')).toBe('9');
      expect(october.format('n')).toBe('10');
      expect(november.format('n')).toBe('11');
      expect(december.format('n')).toBe('12');
    });

    it('should return a short textual representation of a month with "M"', function () {
      expect(january.format('M')).toBe('Jan');
      expect(february.format('M')).toBe('Feb');
      expect(march.format('M')).toBe('Mar');
      expect(april.format('M')).toBe('Apr');
      expect(may.format('M')).toBe('May');
      expect(june.format('M')).toBe('Jun');
      expect(july.format('M')).toBe('Jul');
      expect(august.format('M')).toBe('Aug');
      expect(september.format('M')).toBe('Sep');
      expect(october.format('M')).toBe('Oct');
      expect(november.format('M')).toBe('Nov');
      expect(december.format('M')).toBe('Dec');
    });

    it('should return a full textual representation of a month with "F"', function () {
      expect(january.format('F')).toBe('January');
      expect(february.format('F')).toBe('February');
      expect(march.format('F')).toBe('March');
      expect(april.format('F')).toBe('April');
      expect(may.format('F')).toBe('May');
      expect(june.format('F')).toBe('June');
      expect(july.format('F')).toBe('July');
      expect(august.format('F')).toBe('August');
      expect(september.format('F')).toBe('September');
      expect(october.format('F')).toBe('October');
      expect(november.format('F')).toBe('November');
      expect(december.format('F')).toBe('December');
    });

    it('should return the number of days in the given month with "t"', function () {
      expect(january.format('t')).toBe('31');
      expect(february.format('t')).toBe('28');
      expect(march.format('t')).toBe('31');
      expect(april.format('t')).toBe('30');
      expect(may.format('t')).toBe('31');
      expect(june.format('t')).toBe('30');
      expect(july.format('t')).toBe('31');
      expect(august.format('t')).toBe('31');
      expect(september.format('t')).toBe('30');
      expect(october.format('t')).toBe('31');
      expect(november.format('t')).toBe('30');
      expect(december.format('t')).toBe('31');

      expect(new Date(2016, 1).format('t')).toBe('29'); // february on a leap year
    });
  });

  describe('formatting weeks', function () {
    it('should return th number of the week with "W"', function () {
      expect(new Date('2015-01-01').format('W')).toBe('1');
      expect(new Date('2015-12-31').format('W')).toBe('53');
      expect(new Date('2016-01-01').format('W')).toBe('53');
    });
  });

});
