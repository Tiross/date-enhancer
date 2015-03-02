describe('format spec', function () {

  describe('formatting years', function () {
    var date = new Date(Date.UTC(2015, 0, 1, 10, 30, 12));

    it('should return a full represention of a year on 4 digits', function () {
     expect(date.format('Y')).toBe(2015);
    });
  });

});
