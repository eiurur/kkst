const test = require('ava');
const { Calc } = require('../index');

test('1 + 1 === 2', (t) => {
  const expected = 2;
  const actual = Calc.add(1, 1);
  t.is(expected, actual);
});

test('1 + 1 !== 3', (t) => {
  const expected = 3;
  const actual = Calc.add(1, 1);
  t.not(expected, actual);
});
