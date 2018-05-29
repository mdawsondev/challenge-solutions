function avoidObstacles(arr) {
  for (var i = 1; ; i++)
    if (arr.every(e => e % i)) return i;
}