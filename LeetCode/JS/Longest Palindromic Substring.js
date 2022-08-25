/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let length = s.length;
    let coordinate = { start: 0, end: 0};
    let dp = new Array(length + 1).fill(0).map(() => new Array(length + 1).fill(0));

    for(let i = 0; i < length; i++) {
        dp[i][i] = 1;
    }

    for(let i = 0; i < length; i++) {
        let start = 0;
        let end = i + 1;
        while(end < length) {
            if(s[start] === s[end]) {
                if(i > 1 && dp[start + 1][end - 1]) {
                    dp[start][end] = 1;
                    coordinate.start = start;
                    coordinate.end = end;
                } else if(i <= 1) {
                    dp[start][end] = 1;
                    coordinate.start = start;
                    coordinate.end = end;
                }
            }

            start++;
            end++;
        }
    }

    return s.slice(coordinate.start, coordinate.end + 1);
};
