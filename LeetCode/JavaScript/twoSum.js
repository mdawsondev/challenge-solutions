// 19/19 test cases passed.
// Runtime: 128 ms
// Runtime beats 68.34% of JavaScript submissions.

function twoSum(n, t) {
  for (let nl = n.length;; nl--) {
      const x = n.indexOf(t-n[nl]);
      if (x > -1 && x !== nl) return [x, nl];
  };
};