/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let newSize = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[newSize++] = nums[i];
        }
    }

    return newSize;
};
