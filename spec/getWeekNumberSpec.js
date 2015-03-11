describe('getWeekNumber', function () {

  it('should return 201501 for 2015-01-01', function () {
    expect(new Date(2015, 0, 1).getWeekNumber()).toBe(201501);
  });

  it('should return 201553 for 2015-12-31', function () {
    expect(new Date(2015, 11, 31).getWeekNumber()).toBe(201553);
  });

  it('should return 201553 for 2016-01-01', function () {
    expect(new Date(2016, 0, 1).getWeekNumber()).toBe(201553);
  });

  it('should return 200701 for 2007-01-01', function () {
    expect(new Date(2007, 0, 1).getWeekNumber()).toBe(200701);
  });
});
