const test = require('tape');

test('basic ok test', function (t) {
  t.plan(1);
  t.ok(true); // assert the value is truthy
});

test('basic assert test', function (t) {
  t.plan(1);
  t.assert(true, 'second param is a description of the assert'); // an alias for t.ok()
});

test('basic notOk test', function (t) {
  t.plan(1);
  t.notOk(false);
});

test('equal test', function (t) {
  t.plan(1);
  t.equal(42, 42);
});

test('deep equal test', function (t) {
  t.plan(1);
  t.deepEqual({content: 'trololo'}, {content: 'trololo'});
});
