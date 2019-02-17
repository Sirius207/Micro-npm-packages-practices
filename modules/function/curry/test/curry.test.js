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

  it('should be pure', () => {});

  it('should drop extra arguments', () => {});

  it('should allow zero argument', () => {});
});
