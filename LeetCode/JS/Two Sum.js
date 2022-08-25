/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const length = nums.length;
    const compliment = [];
    const myMap = new Map();

    for(let i = 0; i < length; i++) {
        //brute force: time: O(n^2) space: O(1)
        /*for(let j = i + 1; j < length; j++) {
            if(nums[i] + nums[j] === target) return [i,j];
        }*/

        // Array: time: O(n) space: O(max(nums))
        /*if(compliment[target - nums[i]] !== undefined) {
            return [i, compliment[target - nums[i]]];
        }
        compliment[nums[i]] = i;*/

        // hashmap: time: O(n) space: O(n)
        if(myMap.has(target - nums[i])) {
            const old = myMap.get(target - nums[i]);
            return [old, i];
        }

        myMap.set(nums[i], i);
    }
};
