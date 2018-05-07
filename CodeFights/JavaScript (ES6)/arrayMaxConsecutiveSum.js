function arrayMaxConsecutiveSum(a, k) {
  let max = 0;
  if (k === 1) return Math.max(...a);
  let store = a.filter((e, i) => i < k),
    total = 0;
  store.forEach(f => {
    total += f;
  });

  a.forEach((e, i) => {
    total -= e;
    total += a[i + k];
    if (total > max) max = total;
  });
  return max;
}