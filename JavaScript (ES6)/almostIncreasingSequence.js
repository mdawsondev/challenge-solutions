almostIncreasingSequence = a => {
  let c = 0;
  for(let i = 0; i < a.length; i++) {
    if (a[i] <= a[i-1]) {
        c++;
        if (c > 1 || (a[i] <= a[i-2] && a[i+1] <= a[i-1])) return false;
    }
  }
  return true;
}