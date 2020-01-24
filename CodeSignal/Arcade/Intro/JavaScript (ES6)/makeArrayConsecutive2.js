const makeArrayConsecutive2 = (statues) => {
  const sorted = statues.sort((n1, n2) => n1 - n2);
  return sorted.reduce((totalMissing, cur, i) => {
      const next = statues[i+1] || null;
      const expected = cur + 1;
      const different = next && next !== expected || false;
      if (different) {
        const curMissing = next - expected;
        return totalMissing + curMissing;
      }
      return totalMissing;
    }, 0);
}

/**
 * The previous version of this answer used a for loop. While it may be visually
 * nicer to look at, I ran a benchmark on both version and the new version is
 * significantly faster with larger statue counts. For example, if Ratiorg had a
 * statue array of [1, 1000000] and we run the array through a for loop, the
 * code needs to iterate through every number between 1 and 1,000,000. By
 * calculating the missing number, we only need to sort the array and iterate
 * through two numbers.
 */

// makeArrayConsecutive2 = arr => {
//   let x = [];
//   for (let i = Math.min(...arr); i < Math.max(...arr); i++) {
//       if (arr.indexOf(i) < 0) x.push(i);
//   }
//   return x.length;
// }