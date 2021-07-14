/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0 || x === 1) return x;

    let low = 1, high = x;
    let mid = 0;
    while(high >= low) {
        mid = Math.floor((low + high)/2);
        if(mid * mid === x) return Math.floor(mid);

        if(mid * mid > x) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return Math.floor(high);
};
