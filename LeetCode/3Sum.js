/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let ans = [];
  let sum = 0;
  let target = 0;
  const length = nums.length;

  if (length < 3) return ans;

  nums.sort((a, b) => a - b);

  for (i = 0; i < length; i++) {
    if (nums[i] > target) return ans;

    if (i && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = length - 1;

    while (j < k) {
      sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        ans.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return ans;
};
