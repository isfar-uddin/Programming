/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverseNum = 0;
    while(x) {
        reverseNum = reverseNum * 10 + x % 10;
        x = parseInt(x / 10);
    }
    if(Math.abs(reverseNum) > Math.pow(2, 31)) return 0;
    return reverseNum;

    // using js built-in function
    /*const reverseString = Math.abs(x).toString().split('');
    const reverseNum = reverseString.reverse().join('');
    if(reverseNum > Math.pow(2,31)) return 0;
    return reverseNum;*/
};
