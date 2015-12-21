const test = require('tape');

test.skip('this test will be skipped', function (t) {
  t.plan(1);
  t.notOk('trololololo lololo lololo');
});

test('this poor test will not run', function (t) {
  t.plan(1);
  t.ok('oyoyoyoyo oyoyoyo oyoyoyo', 'RIP Eduard Anatolyevich Khil');
});

test.only('only this test will run', function (t) {
  t.plan(1);
  t.ok('trololololo lololo lololo', 'love this song');
});
