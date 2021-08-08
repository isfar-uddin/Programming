/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let temp = '';
    let length = s.length;

    for(i = 0; i <= words.length; i++) {
        temp += words[i];
        if(temp === s) return true;

        if(temp.length > s.length) return false;
    }

    return false;
};
