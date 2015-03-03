describe('format spec', function () {

  describe('formatting years', function () {
    it('should return a full represention of a year on 4 digits with "Y"', function () {
      expect(new Date(1932, 0).format('Y')).toBe('1932');
    });

    it('should return a 2 digits represention of a year with "y"', function () {
      expect(new Date(1932, 0).format('y')).toBe('32');
    });

    it('should return 1 or 0 if it\'s a leap year with "L"', function () {
      expect(new Date(1900, 0).format('L')).toBe('0'); // 1900 is not a leap year (1900 % 100 === 0)
      expect(new Date(2008, 0).format('L')).toBe('1'); // 2008 is & leap year (2008 % 100 !== 0 && 2008 % 4 === 0)
      expect(new Date(2000, 0).format('L')).toBe('1'); // 2000 is & leap year (2000 % 400 === 0)
    });

    it('should return the year of the week with "o"', function () {
      expect(new Date(1932, 0).format('o')).toBe('1931');
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

  describe('formatting days', function () {
    var monday = new Date(2015, 0, 12);
    var tuesday = new Date(2015, 0, 13);
    var wednesday = new Date(2015, 0, 14);
    var thursday = new Date(2015, 0, 1);
    var friday = new Date(2015, 0, 2);
    var saturday = new Date(2015, 0, 3);
    var sunday = new Date(2015, 0, 4);

    it('should return the day of the month with leading zeros with "d"', function () {
      expect(monday.format('d')).toBe('12');
      expect(tuesday.format('d')).toBe('13');
      expect(wednesday.format('d')).toBe('14');
      expect(thursday.format('d')).toBe('01');
      expect(friday.format('d')).toBe('02');
      expect(saturday.format('d')).toBe('03');
      expect(sunday.format('d')).toBe('04');
    });

    it('should return the day of the month without leading zeros with "j"', function () {
      expect(monday.format('j')).toBe('12');
      expect(tuesday.format('j')).toBe('13');
      expect(wednesday.format('j')).toBe('14');
      expect(thursday.format('j')).toBe('1');
      expect(friday.format('j')).toBe('2');
      expect(saturday.format('j')).toBe('3');
      expect(sunday.format('j')).toBe('4');
    });

    it('should return a short textual representation of the day with "D"', function () {
      expect(monday.format('D')).toBe('Mon');
      expect(tuesday.format('D')).toBe('Tue');
      expect(wednesday.format('D')).toBe('Wed');
      expect(thursday.format('D')).toBe('Thu');
      expect(friday.format('D')).toBe('Fri');
      expect(saturday.format('D')).toBe('Sat');
      expect(sunday.format('D')).toBe('Sun');
    });

    it('should return a full textual representation of the day with "l"', function () {
      expect(monday.format('l')).toBe('Monday');
      expect(tuesday.format('l')).toBe('Tuesday');
      expect(wednesday.format('l')).toBe('Wednesday');
      expect(thursday.format('l')).toBe('Thursday');
      expect(friday.format('l')).toBe('Friday');
      expect(saturday.format('l')).toBe('Saturday');
      expect(sunday.format('l')).toBe('Sunday');
    });

    it('should return a ISO-8601 numeric representation of the day of the week with "N"', function () {
      expect(monday.format('N')).toBe('1');
      expect(tuesday.format('N')).toBe('2');
      expect(wednesday.format('N')).toBe('3');
      expect(thursday.format('N')).toBe('4');
      expect(friday.format('N')).toBe('5');
      expect(saturday.format('N')).toBe('6');
      expect(sunday.format('N')).toBe('7');
    });

    it('should return an english ordinal suffix for the day of the month with "S"', function () {
      expect(monday.format('S')).toBe('th');
      expect(tuesday.format('S')).toBe('th');
      expect(wednesday.format('S')).toBe('th');
      expect(thursday.format('S')).toBe('st');
      expect(friday.format('S')).toBe('nd');
      expect(saturday.format('S')).toBe('rd');
      expect(sunday.format('S')).toBe('th');
    });

    it('should return a numeric representation of the day of the week with "w"', function () {
      expect(monday.format('w')).toBe('1');
      expect(tuesday.format('w')).toBe('2');
      expect(wednesday.format('w')).toBe('3');
      expect(thursday.format('w')).toBe('4');
      expect(friday.format('w')).toBe('5');
      expect(saturday.format('w')).toBe('6');
      expect(sunday.format('w')).toBe('0');
    });

    it('should return the day of the year, starting from 0, with "z"', function () {
      expect(monday.format('z')).toBe('11');
      expect(tuesday.format('z')).toBe('12');
      expect(wednesday.format('z')).toBe('13');
      expect(thursday.format('z')).toBe('0');
      expect(friday.format('z')).toBe('1');
      expect(saturday.format('z')).toBe('2');
      expect(sunday.format('z')).toBe('3');

      expect(new Date(2016, 0, 0).format('z')).toBe('364'); // Last day of 2015
      expect(new Date(2001, 0, 0).format('z')).toBe('365'); // Last day of 2000 (leap year)
    });
  });

  describe('formatting times', function () {
    var amDate = new Date(2015, 0, 1, 9, 59, 3, 12);
    var pmDate = new Date(2015, 0, 1, 20, 9, 40, 345);

    describe('formating hours', function (){

      it('should return am or pm with "a"', function () {
        expect(amDate.format('a')).toBe('am');
        expect(pmDate.format('a')).toBe('pm');
      });

      it('should return AM or PM with "A"', function () {
        expect(amDate.format('A')).toBe('AM');
        expect(pmDate.format('A')).toBe('PM');
      });

      it('should return a 12-hour representation of an hour without leading zeros', function () {
        expect(amDate.format('g')).toBe('9');
        expect(pmDate.format('g')).toBe('8');
      });

      it('should return a 24-hour representation of an hour without leading zeros', function () {
        expect(amDate.format('G')).toBe('9');
        expect(pmDate.format('G')).toBe('20');
      });

      it('should return a 12-hour representation of an hour with leading zeros', function () {
        expect(amDate.format('h')).toBe('09');
        expect(pmDate.format('h')).toBe('08');
      });

      it('should return a 24-hour representation of an hour with leading zeros', function () {
        expect(amDate.format('H')).toBe('09');
        expect(pmDate.format('H')).toBe('20');
      });
    });

    describe('formating minutes', function (){
      it('should return minutes with leading zeros with "i"', function () {
        expect(amDate.format('i')).toBe('59');
        expect(pmDate.format('i')).toBe('09');
      });
    });

    describe('formating seconds / microseconds', function (){
      it('should return seconds with leading zeros with "s"', function () {
        expect(amDate.format('s')).toBe('03');
        expect(pmDate.format('s')).toBe('40');
      });

      it('should return microseconds until epoch with "u"', function () {
        expect(amDate.format('u')).toBe('012000');
        expect(pmDate.format('u')).toBe('345000');
      });
    });

    xit('should return a numeric representation of the Swatch Internet time with "B"', function () {
      expect(amDate.format('B')).toBe('374');
      expect(pmDate.format('B')).toBe('798');
    });
  });

  xdescribe('formatting timezones', function () {

    it('should return a timezone identifer with "e"', function () {
      expect(new Date(2015, 0).format('e')).toBe('CET');
    });

    it('should return 1 or 0 when given date is in DST or not with "I"', function () {
      expect(new Date(2015, 0).format('I')).toBe('0');
      expect(new Date(2015, 3).format('I')).toBe('1'); // April 1st is in DST in France
    });

    it('should return the difference to Greenwich time without colon with "O"', function () {
      var date = new Date(2015, 0);

      expect(date.format('O')).toBe(date.format('I') === '1' ? '+0200' : '+0100');
    });

    it('should return the difference to Greenwich time with colon with "P"', function () {
      var date = new Date(2015, 0);

      expect(date.format('P')).toBe(date.format('I') === '1' ? '+02:00' : '+01:00');
    });

    it('should return the timezone abbreviation with "T"', function () {
      expect(new Date(2015, 0).format('T')).toBe('CET');
    });

    it('should return the timezone offset is seconds with "Z"', function () {
      var date = new Date(2015, 0);

      expect(date.format('Z')).toBe(date.format('I') === '1' ? '7200' : '3600');
    });
  });

});
