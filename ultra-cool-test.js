const test = require('tape');

test('ultra cool test', function (t) {
  t.plan(100);
    for(var i = 0; i < 100; i++) {
      setTimeout(function () {
          t.ok(true);
      }, i * 100);
    }
});
