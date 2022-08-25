/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {

        if(n === 0 || !isBadVersion(n)) return 0;

        let low = 1, high = n, mid = 0;
        while(low < high) {
            mid = low + Math.floor((high - low)/2);
            if(isBadVersion(mid) === false) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    };
};
