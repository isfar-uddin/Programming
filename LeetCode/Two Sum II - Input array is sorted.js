/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// Recursion
var twoSum = function(numbers, target) {
    let index = -1;
    for(let i = 0; i< numbers.length; i++) {
        index = binarySearch(i+1, numbers.length, numbers, target - [numbers[i]])
        if(index >= 0) return [i + 1, index+1]
    }
};

const binarySearch = function (low, high, numbers, target) {
    let mid = Math.floor((low + high)/2);
    if(numbers[mid] === target) return mid;
    if(low >= high) return -1;
    if(numbers[mid] > target) {
        return binarySearch(low, mid - 1, numbers, target);
    }
    return binarySearch(mid+1, high, numbers, target);
}

// Iterative way
/*var twoSum = function(numbers, target) {
    let start = 0, end = numbers.length;
    for(let i = 0; i< numbers.length; i++) {
        start = i + 1;
        while(start <= end) {
            let mid = Math.floor((start + end)/2);
            if(numbers[mid] === target - numbers[i]) return [i + 1, mid + 1];
            if(numbers[mid] > target - numbers[i]) {
                end = mid - 1;
            } else {
                start = mid + 1
            }
        }
    }
};*/
