/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) space complexity
var removeDuplicates = function(nums) {
  let myMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (myMap.has(nums[i])) {
      nums.splice(i, 1);
      i--;
    } else {
      myMap.set(nums[i], nums[i]);
    }
  }
  return nums.length;
};

//O(1) space complexity
//Reducing array size
var removeDuplicates = function(nums) {
    if(nums.length === 0 || nums.length === 1) return nums.length;

    let curr = nums[0];
    let currPos = 0;
    let count = 0;
    for(let i = 1; i < nums.length; i++) {
        if(curr === nums[i]) {
            count++;
        } else {
            if(count > 0) {
               nums.splice(currPos+1, count);
                i = i - count;
                count = 0;
            }
            curr = nums[i];
            currPos = i;
        }
    }
    if(count > 0) {
        nums.splice(currPos + 1, count);z
    }
    return nums.length;
};

//O(1) space complexity
//Without reducing array size but change first n distinct element of the array
var removeDuplicates = function(nums) {
    if(nums.length === 0 || nums.length === 1) return nums.length;

    let newSize = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[i+1]) {
            nums[newSize] = nums[i];
            newSize++;
        }
    }

    return newSize;
};
