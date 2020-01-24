function knapsackLight(v1, w1, v2, w2, maxW) {
  let bothW = w1 + w2,
    bothV = v1 + v2;
  if (bothW <= maxW) return bothV;
  if (w1 <= maxW && (w2 >= maxW || v1 > v2)) return v1;
  if (w2 <= maxW) return v2;
  return 0;
}