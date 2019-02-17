/* global describe, it */

const curry = require('../curry');
const ans = require('assert');

describe('curry', () => {
  it('should curry - basic type', () => {
    const add = (a, b) => a + b;
    const add2 = curry(add, 2);

    ans.equal(add2(4), 6);
  });

  it('should curry - iterate type', () => {
    const sum3 = (a, b, c) => a + b + c;
    const sum3C = curry(sum3);

    ans.equal(sum3(1, 2, 3), sum3C(1)(2)(3));
  });

  it('should allow multiple argument', () => {
    const sum3 = (a, b, c) => a + b + c;
    const sum3C = curry(sum3);

    ans.equal(sum3(1, 2, 3), sum3C(1, 2)(3));
    ans.equal(sum3(1, 2, 3), sum3C(1)(2, 3));
  });

  it('should allow zero argument', () => {
    const none = () => {};

    ans.equal(none(), undefined);
  });

  it('should drop extra arguments', () => {
    const add = (a, b) => a + b;
    const addC = curry(add);

    ans.deepEqual(addC(1, 2, 3, 4, 5), 3);
  });

  it('should be pure', () => {
    const add = curry((a, b) => a + b);
    const add1 = add(1);
    const add2 = add(2);

    ans.equal(add1(1), 2);
    ans.equal(add1(2), 3);
    ans.equal(add1(3), 4);
    ans.equal(add1(4), 5);

    ans.equal(add2(1), 3);
    ans.equal(add2(2), 4);
    ans.equal(add2(3), 5);
    ans.equal(add2(4), 6);
  });
});
