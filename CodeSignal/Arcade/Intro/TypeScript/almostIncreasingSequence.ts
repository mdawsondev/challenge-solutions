const almostIncreasingSequence = (arr: number[]): boolean => {
  for (let i = 0, errors = 0; i < arr.length; i++) {
    const cur = arr[i];
    const next = arr[i+1];
    const prev = arr[i-1];
    if (cur >= next) {
      const start = next <= prev ? i + 1 : i;
      arr.splice(start, 1);
      errors += 1;
      i = -1;
    }
    if (errors === 2) return false;
  }
  return true;
}
