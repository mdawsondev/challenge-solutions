function deleteDigit(n) {
  let max = 0;
  (n + '').split('').forEach(e => {
    let o = n + '';
    o = Number(o.replace(e, ''));
    if (o > max) max = o;
  });
  return max;
}