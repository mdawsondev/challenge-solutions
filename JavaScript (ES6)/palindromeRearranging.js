function palindromeRearranging(str) {
  let seen = new Set();
  str.split('').forEach(e => {
     seen.has(e) ? seen.delete(e) : seen.add(e);
  });
  return seen.size < 2;
}