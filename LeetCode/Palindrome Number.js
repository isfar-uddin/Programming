/**
 * @param {number} x
 * @return {boolean}
 */

// Will be memory overflow for 2147483648 number when storing in reverse
var isPalindrome = function(x) {
    if(x < 0) return false;

    let temp = x;
    let reverse = 0;
    while(temp) {
        reverse = reverse * 10 + temp % 10;
        temp = Math.floor(temp / 10);
    }

    return reverse === x;
};

var isPalindrome = function(x) {
    //all negative number or trailing digit 0 is not palindrome except 0
    if(x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reverse = 0;
    while(x > reverse) {
        reverse = reverse * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return x === reverse || x === reverse / 10; // if number is odd length reverse will be 1 digit greater than x
};
