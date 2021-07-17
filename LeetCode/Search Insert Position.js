/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0, high = nums.length - 1, mid = 0;

    while(low <= high) {
        mid = Math.floor((low + high)/2);
        if(nums[mid] === target) return mid;
        if(nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
};
