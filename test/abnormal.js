const test = require('ava');
const {Calc} = require('../build/index');

test('1 + 1 !== 3', t => {
  const expected = 3;
  const actual = Calc.add(1, 1);
  t.not(expected, actual);
});
