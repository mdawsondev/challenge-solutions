function electionsWinners(v, k) {
  const max = v.sort((a, b) => a - b).pop();
  if (!k) return v.includes(max) ? 0 : 1;
  return v.reduce((x, e) => e + k > max ? x + 1 : x, 1);
}