/**
 * @param {number[]} nums
 * @return {number}
 */
// My solution
/*var findMin = function(nums) {
    let low = 0, high = nums.length - 1;

    if(nums[low] < nums[high]) return nums[low];
    while(low < high) {
        let mid = low + Math.floor((high - low)/2);

        if(nums[mid] < nums[mid - 1] && mid > 0) return nums[mid];
        if(nums[mid] > nums[mid + 1] && mid < nums.length - 1) return nums[mid + 1];

        if(nums[low] > nums[mid]) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return nums[low];
};
*/

// Great solution

var findMin = function(nums) {
  let low = 0,
    high = nums.length - 1;
  while (low < high) {
    let mid = low + (high - low) / 2;
    if (nums[mid] < nums[high]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return nums[low];
};

