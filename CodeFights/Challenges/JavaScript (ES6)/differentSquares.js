// Originally submitted by ldim, I wasn't able to find an elegant solution. Converted var to ES6.

function differentSquares(a) {
  let s = new Set;
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a[0].length - 1; j++) {
      const hash = a[i][j] + 10 * a[i][j + 1] + 100 * a[i + 1][j] + 1000 * a[i + 1][j + 1];
      s.add(hash);
    }
  }
  return s.size;
}
