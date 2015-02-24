
QUnit.test('test getWeekNumber', function (assert) {
  var provider = [
    {date: '2015-01-01', number: 201501},
    {date: '2015-12-31', number: 201553, reason: 'Week 53'},
    {date: '2016-01-01', number: 201553, reason: 'First day of year, but week on past year'},
    {date: '2007-01-01', number: 200701, reason: 'First day of year, first day of week, first week of year'},
  ];

  provider.forEach(function (val) {
    var reason = val.date + ' -> ' + val.number + (val.reason ? ' : ' + val.reason : '');
    assert.strictEqual(new Date(val.date).getWeekNumber(), val.number, reason);
  })
});
