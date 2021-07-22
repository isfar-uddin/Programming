/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0, high = nums.length - 1;

    if(nums[low] === target) return low;

    while(low < high) {
        let mid = low + Math.floor((high - low)/2);

        if(nums[mid] === target) return mid;
        if(nums[high] === target) return high;

        if(nums[low] > nums[high]) {
            high--;
        } else if(nums[mid] > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return -1;
};
