/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums[0] < nums[nums.length - 1]) return nums[0];

    let low = 0, high = nums.length - 1;

    while(low < high) {
        let mid = Math.floor(low + (high - low)/2);

        if(nums[mid] < nums[high]) {
            high = mid;
        } else if(nums[mid] > nums[high]) {
            low = mid + 1;
        } else {
            high--;
        }
    }

    return nums[low];
};
