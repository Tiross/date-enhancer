describe('isValid spec', function () {

  it('should return true with a new instance of Date created without arguments', function () {
    expect(new Date().isValid()).toBe(true);
  });

  it('should return true when date is created with a string', function () {
    expect(new Date('2015-01-01').isValid()).toBe(true);
  });

  it('should return true when date is created with integer arguments', function () {
    expect(new Date(2015, 0, 1).isValid()).toBe(true);
  });

  it('should return false with invalid date', function () {
    expect(new Date('lol').isValid()).toBe(false);
  });

});
