/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(!nums.length) return [-1, -1];
    let range = [-1 , -1];

    let low = 0, high = nums.length - 1, mid = -1;

    while(low < high) {
        mid = low + Math.floor((high - low)/2);
        if(nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    if(nums[low] !== target) return range;

    range[0] = low;
    high = nums.length - 1;
    while(low <= high) {
        mid = low + Math.floor((high - low)/2);
        if(nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    range[1] = high;

    return range;
};
