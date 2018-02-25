function digitDegree(n) {
  let x = y = 0;
  while (n > 9) {
    (n + '').split('').forEach(e => x += parseInt(e, 10));
    n = x, x = 0, y++;
  }
  return y;
}