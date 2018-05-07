// https://leetcode.com/submissions/detail/144120124/
// 15/15 Passed | Runtime: 80ms | Beats: 98.88%

function singleNumber(nums) {
  const numsLength = nums.length;
  if (numsLength === 1) return nums[0];
  nums = nums.sort((a, b) => a - b)
  for (let i = numsLength - 1; ; i = i - 2) {
    if (nums[i] !== nums[i - 1]) return nums[i]
  }
};