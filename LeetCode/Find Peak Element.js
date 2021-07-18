/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let low = 0, high = nums.length;

    while(low < high) {
        let mid = low + Math.floor((high - low)/2);
        if(nums[mid - 1] < nums[mid] && nums[mid + 1] < nums[mid]) return mid;
        if(nums[mid - 1] > nums[mid]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
};
