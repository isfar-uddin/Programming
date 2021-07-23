/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let low = 1, high = nums.length - 1;

    while(low < high) {
        let count = 0;
        let mid = low + Math.floor((high - low)/2);
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] <= mid) {
                count++;
            }
        }

        if(count <= mid) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
};
