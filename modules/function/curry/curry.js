

function curry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  }
  return (...args2) => curry(fn, ...args, ...args2)
}


module.exports = curry;