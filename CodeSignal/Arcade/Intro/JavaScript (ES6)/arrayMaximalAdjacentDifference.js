function arrayMaximalAdjacentDifference(arr) {
  let max = 0;
  while (arr.length > 1) {
    const diff = Math.abs(arr[0] - arr[1]);
    if (diff > max) max = diff;
    arr.shift();
  }
  return max;
}