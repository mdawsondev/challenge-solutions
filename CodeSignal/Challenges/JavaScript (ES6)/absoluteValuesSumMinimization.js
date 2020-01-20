function absoluteValuesSumMinimization(a) {
  const h = Math.floor(a.sort((a, b) => a - b).length / 2);
  return a.length % 2 ? a[h] : a[h - 1];
}