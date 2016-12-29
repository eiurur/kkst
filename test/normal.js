const test = require('ava');
const {Calc} = require('../build/index');

test('1 + 1 === 2', t => {
  const expected = 2;
  const actual = Calc.add(1, 1);
  t.is(expected, actual);
});
