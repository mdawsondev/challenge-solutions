function extractEachKth(x, k) {
  return x.filter((e, i) => {
    if ((i + 1) % k !== 0) return e;
  });
}