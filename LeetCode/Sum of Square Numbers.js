/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let low = 0, high = Math.floor(Math.sqrt(c));

    while(low <= high) {
        let sum = low * low + high * high;

        if(sum === c) return true;

        if(sum > c){
            high--;
        } else {
            low++;
        }
    }

    return false;
};
