/**
 * @param {number} num
 * @return {boolean}
 */
/*
// Binary search
// complexity O(nlogn)
var isPerfectSquare = function(num) {
    let low = 1, high = num;

    while(low <= high) {
        let mid = low + Math.floor((high - low)/2);
        let sqrNum = mid * mid;
        if(sqrNum === num) return true;

        if(sqrNum > num) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return false;
};
*/
// sqrt number is 1+3+5+7+9+11+.....
// complexity O(sqrt(n))
var isPerfectSquare = function(num) {
    let i = 1;
    while(num > 0) {
        num -= i;
        i += 2;
    }

    return num === 0;
}

// Another method called newton's method should learn
