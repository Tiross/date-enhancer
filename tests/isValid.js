
QUnit.test('test isValid', function (assert) {
  assert.ok(new Date().isValid(), 'new Date() is valid');
  assert.ok(new Date('2015-01-01').isValid(), 'new Date(\'2015-01-01\') is valid');
  assert.ok(new Date(2015, 0, 1).isValid(), 'new Date(2015, 0, 1) is valid');
  assert.ok(!(new Date('lol').isValid()), 'new Date(\'lol\') is invalid');
});
