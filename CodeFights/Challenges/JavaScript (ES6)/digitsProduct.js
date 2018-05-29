// Submitted by jakzo, converted into ES6 and stripped of fluff. Needs to be reworked for an original answer.

function digitsProduct(n) {
  if (n === 0) return 10;
  if (n === 1) return 1;
  let d = 10,
      p = 1,
      r = 0;
  while (n > 1) {
      if (--d === 1) return -1;
      while (n % d === 0) {
          n /= d;
          r += d * p;
          p *= 10;
      }
  }
  return r;
}